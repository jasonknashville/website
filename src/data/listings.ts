// Curated property tours, not an MLS feed. Add tours here and update status
// when a property goes under contract or sells. Only active entries are shown.
export const listings = [
  {
    address: '227 Cumberland Cir',
    location: 'Bluefields · Nashville, TN 37214',
    linkText: '227 Cumberland Cir in Bluefields',
    href: '/227-cumberland-cir/',
    image: '/227-cumberland-cir/photos/02.webp',
    imageAlt: 'Brick ranch at 227 Cumberland Cir in Nashville’s Bluefields neighborhood',
    highlights: 'Single-level brick ranch · 3 bedrooms · Attached garage',
    description: 'Original hardwoods, a knotty pine kitchen, and a separate family room bring character to this single-level home in Bluefields. Explore the room photography alongside an interactive floor plan.',
    status: 'active',
  },
  {
    address: '108A N 9th St',
    location: 'East Nashville · Nashville, TN 37206',
    linkText: '108A N 9th St in East Nashville',
    href: 'https://108a-n-9th.jasonknashville.com/',
    image: 'https://108a-n-9th.jasonknashville.com/photos/drone-5009.webp',
    imageAlt: 'Aerial view of 108A N 9th St in East Nashville',
    highlights: '4 bedrooms · 4 full + 2 half baths · 3,011 sq ft',
    description: 'Designed by SW Design Group and built by Bonham Builders, this East Nashville home offers a rooftop with downtown views and a two-car garage. Explore the photos and interactive floor plans across all three levels.',
    status: 'active',
  },
];
export const activeListings = listings.filter((listing) => listing.status === 'active');
