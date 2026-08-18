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
    title: 'Move Now or Wait',
    description: 'Compare moving now with waiting as rates, prices, rent, and your equity change.',
    href: '/tools/move-now-or-wait/',
    eyebrow: 'Timing your move',
    status: 'live',
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
    href: '/tools/home-affordability/',
    eyebrow: 'Buying power',
    status: 'live',
  },
  {
    title: 'Down Payment & Cash-to-Close Planner',
    description: 'Compare down-payment options and estimate the cash needed for closing costs, prepaids, reserves, and deposits.',
    href: '/tools/cash-to-close/',
    eyebrow: 'Cash to close',
    status: 'live',
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
    href: 'https://jasonknashville.github.io/Commute-Savings-Calculator/',
    eyebrow: 'Location tradeoffs',
    status: 'migrating',
  },
];
