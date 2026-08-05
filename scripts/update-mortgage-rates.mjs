import { readFile, writeFile } from 'node:fs/promises';

const sourceUrl = 'https://www.freddiemac.com/pmms';
const outputUrl = new URL('../src/data/mortgage-rates.json', import.meta.url);

const response = await fetch(sourceUrl, {
  headers: { 'user-agent': 'jasonknashville.com rate updater (educational calculator defaults)' },
});

if (!response.ok) throw new Error(`Freddie Mac returned ${response.status}`);

const html = await response.text();
const text = html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;|&#160;/gi, ' ')
  .replace(/&amp;/gi, '&')
  .replace(/\s+/g, ' ');

const dateMatch = text.match(/U\.S\. weekly mortgage rate averages as of\s+(\d{2}\/\d{2}\/\d{4})/i);
const thirtyMatch = text.match(/30-year Fixed-Rate Mortgage\s+([\d.]+)%/i);
const fifteenMatch = text.match(/15-year Fixed-Rate Mortgage\s+([\d.]+)%/i);

if (!dateMatch || !thirtyMatch || !fifteenMatch) {
  throw new Error('Could not find the PMMS date and both fixed-rate averages. Freddie Mac may have changed its page.');
}

const [month, day, year] = dateMatch[1].split('/');
const next = {
  source: 'Freddie Mac Primary Mortgage Market Survey',
  sourceUrl,
  asOf: `${year}-${month}-${day}`,
  thirtyYear: Number(thirtyMatch[1]),
  fifteenYear: Number(fifteenMatch[1]),
  updatedAt: new Date().toISOString(),
};

const current = JSON.parse(await readFile(outputUrl, 'utf8'));
if (current.asOf === next.asOf && current.thirtyYear === next.thirtyYear && current.fifteenYear === next.fifteenYear) {
  console.log(`Rates are already current as of ${next.asOf}.`);
  process.exit(0);
}

await writeFile(outputUrl, `${JSON.stringify(next, null, 2)}\n`);
console.log(`Updated PMMS defaults: 30-year ${next.thirtyYear}%, 15-year ${next.fifteenYear}% (${next.asOf}).`);
