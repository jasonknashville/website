export type Tool = {
  title: string;
  description: string;
  href: string;
  eyebrow: string;
  featured?: boolean;
  status?: 'live' | 'migrating';
};

export const tools: Tool[] = [
  {
    title: 'Move-Up Mortgage Calculator',
    description: 'Estimate net sale proceeds, compare selling with keeping your current home, and see the effect on your next payment.',
    href: '/tools/move-up-calculator/',
    eyebrow: 'Equity & next payment',
    featured: true,
    status: 'live',
  },
  {
    title: '30-Year vs. 15-Year Mortgage',
    description: 'Compare payments, total interest, payoff time, and the effect of paying extra on a 30-year loan.',
    href: '/tools/30-vs-15-calculator/',
    eyebrow: 'Loan term comparison',
    featured: true,
    status: 'live',
  },
  {
    title: 'Move Now or Wait 12 Months',
    description: 'Compare the cost of moving today with waiting a year as rates, prices, and equity change.',
    href: 'https://jasonknashville.github.io/Move-Now-vs-Wait-12-Months/',
    eyebrow: 'Timing your move',
    status: 'migrating',
  },
  {
    title: 'Ideal Home Clarity Check',
    description: 'Identify what is missing, name every obstacle, and get planning tools tailored to your answers.',
    href: '/tools/ideal-home-quiz/',
    eyebrow: '60-second quiz',
    featured: true,
    status: 'live',
  },
  {
    title: 'Home Affordability Calculator',
    description: 'Estimate a home price and payment range that fits your monthly budget.',
    href: 'https://jasonknashville.github.io/What-Can-I-Afford-Calc/',
    eyebrow: 'Buying power',
    status: 'migrating',
  },
  {
    title: 'Down Payment Calculator',
    description: 'Compare down-payment options and see how each changes the loan and monthly payment.',
    href: 'https://jasonknashville.github.io/Down-Payment-Calculator/',
    eyebrow: 'Cash to close',
    status: 'migrating',
  },
  {
    title: 'Home Equity Calculator',
    description: 'Explore how principal paydown and appreciation can change your equity over time.',
    href: 'https://jasonknashville.github.io/Equity-Calculator/',
    eyebrow: 'Long-term ownership',
    status: 'migrating',
  },
  {
    title: 'Commute Cost Calculator',
    description: 'Put a dollar value on commute time, mileage, fuel, and a potential move.',
    href: '/tools/commute-cost/',
    eyebrow: 'Location tradeoffs',
    status: 'live',
  },
];
