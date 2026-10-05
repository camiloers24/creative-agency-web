// Contenido de cada servicio (títulos, listas e imágenes tomados de los componentes originales)
const u = (id: string) => `https://images.unsplash.com/${id}?q=80&w=1000`;

export type Service = {
  id: string;
  title: string[];
  items: string[];
  images: string[];
  tone: 'paper' | 'charcoal';
  variant?: 'film';
};

export const SERVICES: Service[] = [
  {
    id: 'release-parties',
    title: ['Release', 'Parties'],
    items: ['Creative Direction', 'Art Direction', 'Production', 'Design', 'Venue'],
    images: [u('photo-1470225620780-dba8ba36b745')],
    tone: 'paper',
  },
  {
    id: 'events',
    title: ['Events'],
    items: ['Production', 'Art Design', 'Logistics', 'Bookings'],
    images: [
      u('photo-1516280440614-37939bbacd81'),
      u('photo-1533174072545-7a4b6ad7a6c3'),
      u('photo-1506157786151-b8491531f063'),
    ],
    tone: 'charcoal',
  },
  {
    id: 'branding',
    title: ['Branding'],
    items: ['Visual Concept', 'Brand Book', 'For Artist', 'Identity'],
    images: [
      u('photo-1534528741775-53994a69daeb'),
      u('photo-1506794778202-cad84cf45f1d'),
    ],
    tone: 'paper',
  },
  {
    id: 'art-direction',
    title: ['Art', 'Direction'],
    items: ['Art Direction', 'Art Assisting', 'Decoration', 'Renders'],
    images: [
      u('photo-1534126416832-a88fdf2911c2'),
      u('photo-1516035069371-29a1b244cc32'),
      u('photo-1492106087820-71f1a00d2b11'),
      u('photo-1469334031218-e382a71b716b'),
    ],
    tone: 'paper',
    variant: 'film',
  },
  {
    id: 'fashion-styling',
    title: ['Fashion', 'Styling'],
    items: ['Celebrity Styling', 'Fashion Editorial', 'Fashion Consulting'],
    images: [
      u('photo-1539109136881-3be0616acf4b'),
      u('photo-1515886657613-9f3515b0c78f'),
      u('photo-1509631179647-0177331693ae'),
      u('photo-1490481651871-ab68de25d43d'),
    ],
    tone: 'paper',
  },
  {
    id: 'styling-videoclips',
    title: ['Styling', 'Videoclips'],
    items: ['Fashion Concept', 'Fashion Design', 'Brand Hunting'],
    images: [
      u('photo-1511671782779-c97d3d27a1d4'),
      u('photo-1470225620780-dba8ba36b745'),
      u('photo-1493225255756-d9584f8606e9'),
      u('photo-1550684848-fac1c5b4e853'),
    ],
    tone: 'charcoal',
  },
  {
    id: 'pr-fashion',
    title: ['PR', 'Fashion Brands'],
    items: ['Brand Collabs', 'Event & Brand PR', 'Styling for Events'],
    images: [
      u('photo-1492707892479-7bc8d5a4ee93'),
      u('photo-1481824429379-07aa5e5b0739'),
      u('photo-1509319117193-57bab727e09d'),
    ],
    tone: 'charcoal',
  },
  {
    id: 'social-media',
    title: ['Social', 'Media'],
    items: ['Web Design', 'Video Edition', 'Social Media Strategy'],
    images: [
      u('photo-1515378791036-0648a3ef77b2'),
      u('photo-1464863979621-258859e62245'),
    ],
    tone: 'paper',
  },
  {
    id: 'artist-experiences',
    title: ['Artist', 'Experiences'],
    items: ['Marketing Campaigns', 'Experience Activations', 'Brand/Music Experiences'],
    images: [
      u('photo-1598488035139-bdbb2231ce04'),
      u('photo-1501386761578-eac5c94b800a'),
      u('photo-1492684223066-81342ee5ff30'),
      u('photo-1508700115892-45ecd05ae2ad'),
      u('photo-1511671782779-c97d3d27a1d4'),
    ],
    tone: 'charcoal',
  },
  {
    id: 'gifting-pr-kits',
    title: ['Gifting', 'PR Kits'],
    items: ['Merch', 'PR Kits', 'Personalized Gifts'],
    images: [
      u('photo-1591047139829-d91aecb6caea'),
      u('photo-1564557287817-3785e38ec1f5'),
      u('photo-1620799140408-edc6dcb6d633'),
    ],
    tone: 'paper',
  },
];
