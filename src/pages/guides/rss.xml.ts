import type { APIRoute } from 'astro';

export const prerender = true;

const site = 'https://jasonknashville.com';
const guides = [
  {
    title: 'Nashville Condos Are Repricing—and Buyers Are Responding',
    description: 'A recent-buyer resale sample shows Nashville condo sellers increasingly accepting losses while condo contract activity rises. That may be the market’s clearest example of price discovery beginning to work.',
    path: '/guides/nashville-condos-repricing-buyers-responding/',
    published: 'Mon, 31 Aug 2026 13:00:00 GMT',
  },
  {
    title: 'Nashville Buyers Have Leverage—Here’s How to Use It',
    description: 'Seller concessions are unusually common in Nashville. Here is how buyers can compare a price cut, closing-cost credit, rate buydown, and repair credit.',
    path: '/guides/nashville-seller-concessions-2026/',
    published: 'Fri, 28 Aug 2026 13:00:00 GMT',
  },
  {
    title: 'Nashville Homeowners May Have More Options Than They Think',
    description: 'Mortgage rates can make moving feel like a nonstarter. Record homeowner equity may give some Nashville owners more flexibility than the rate alone suggests.',
    path: '/guides/nashville-home-equity-options/',
    published: 'Wed, 26 Aug 2026 13:00:00 GMT',
  },
  {
    title: 'Could Nashville’s Housing Standoff Turn Into a Crash?',
    description: 'Florida and Las Vegas share pieces of Nashville’s post-boom setup. The differences show which warning signs matter—and what would have to change before “slow” becomes “crash.”',
    path: '/guides/could-nashville-housing-market-crash/',
    published: 'Tue, 25 Aug 2026 13:00:00 GMT',
  },
  {
    title: 'Nashville’s Contract Pipeline Is Getting Weaker.',
    description: 'Detached-house contracts under $300,000 are down at least 21% from each of the past three years. Here’s why that leading signal matters more than the latest closing data.',
    path: '/guides/nashville-contract-pipeline-weaker/',
    published: 'Mon, 24 Aug 2026 13:00:00 GMT',
  },
  {
    title: 'The Market Isn’t Crashing. It’s Stuck.',
    description: 'More inventory, longer days on market, fewer contracts—and prices that still are not falling very much. Here’s why Greater Nashville looks more like a bid/ask standoff than a classic housing crash.',
    path: '/guides/why-the-market-feels-stuck/',
    published: 'Fri, 21 Aug 2026 13:00:00 GMT',
  },
];

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = () => {
  const items = guides.map((guide) => {
    const url = `${site}${guide.path}`;
    return `
      <item>
        <title>${escapeXml(guide.title)}</title>
        <link>${url}</link>
        <guid isPermaLink="true">${url}</guid>
        <pubDate>${guide.published}</pubDate>
        <description>${escapeXml(guide.description)}</description>
      </item>`;
  }).join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Jason Kaczmarski Guides</title>
        <link>${site}/guides/</link>
        <description>Plain-English market notes and Middle Tennessee real estate guidance from Jason Kaczmarski.</description>
        <language>en-us</language>
        <lastBuildDate>${guides[0].published}</lastBuildDate>${items}
      </channel>
    </rss>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
};
