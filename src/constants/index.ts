/**
 * Application constants
 * Comprehensive SEO configuration for Sacred Groves
 */

// =============================================================================
// BASE CONFIGURATION
// =============================================================================

export const APP_NAME = 'Sacred Groves'
export const APP_DESCRIPTION = 'Sacred Groves is a Community Interest Company reimagining business in partnership with nature. Join our global community of Guardians protecting biodiverse habitats across the UK and Canada.'
export const APP_URL = import.meta.env.VITE_APP_URL || 'https://sacredgroves.earth'
export const DEFAULT_OG_IMAGE = '/og-image.jpg'
export const TWITTER_HANDLE = '@sacredgroves'

// =============================================================================
// ORGANIZATION INFO (for structured data)
// =============================================================================

export const ORGANIZATION = {
  name: 'The Sacred Groves CIC',
  legalName: 'The Sacred Groves Community Interest Company',
  url: APP_URL,
  logo: `${APP_URL}/logo.png`,
  foundingDate: '2020',
  founders: ['Vikram Krishna', 'Monisha Krishna'],
  address: {
    streetAddress: '124 City Road',
    addressLocality: 'London',
    addressRegion: 'England',
    postalCode: 'EC1V 2NX',
    addressCountry: 'GB',
  },
  contactPoint: {
    telephone: '',
    contactType: 'customer service',
    email: 'connect@sacredgroves.earth',
  },
  sameAs: [
    'https://www.linkedin.com/company/the-sacred-groves/',
    'https://www.youtube.com/@thesacredgroves',
    'https://www.instagram.com/thesacredgroves/',
    'https://www.facebook.com/thesacredgroves/',
  ],
}

// =============================================================================
// SEO DEFAULTS
// =============================================================================

export const DEFAULT_SEO = {
  title: 'Sacred Groves',
  description: APP_DESCRIPTION,
  keywords: 'nature conservation, habitat protection, forest conservation, biodiversity, climate action, sacred groves, environmental protection, sustainable business, UK forests, Canadian forests',
  ogImage: DEFAULT_OG_IMAGE,
  type: 'website',
}

// =============================================================================
// PAGE-SPECIFIC SEO CONFIGURATION
// =============================================================================

export const PAGE_SEO = {
  home: {
    title: 'Protect Nature | Join Our Global Guardian Community',
    description: 'Sacred Groves empowers individuals and businesses to protect biodiverse habitats. Join 30+ countries in our mission to safeguard forests in the UK and Canada.',
    keywords: 'protect forest, nature conservation, guardian community, sacred groves, habitat protection, climate action, biodiversity',
    ogImage: '/og-home.jpg',
    canonicalPath: '/',
  },
  about: {
    title: 'About Us | Our Mission to Protect Nature',
    description: 'Learn about Sacred Groves CIC, a Community Interest Company founded to protect biodiverse habitats. Meet our founders and discover our conservation mission.',
    keywords: 'about sacred groves, nature conservation mission, community interest company, founders, CIC UK, environmental protection',
    ogImage: '/og-about.jpg',
    canonicalPath: '/about',
  },
  peopleForPlanet: {
    title: 'People for the Planet | Protect a Habitat',
    description: 'Become a Guardian of the Wild. Protect or gift a biodiverse habitat with Sacred Groves. Simple, tangible climate action for individuals.',
    keywords: 'protect habitat, gift habitat, guardian of the wild, personal climate action, nature protection, biodiversity',
    ogImage: '/og-people-for-planet.jpg',
    canonicalPath: '/people-for-the-planet',
  },
  businessForPlanet: {
    title: 'Business for the Planet | Corporate Sustainability',
    description: 'Co-create new economic models for People, Planet, Prosperity, and Purpose. Partnership opportunities for businesses committed to nature.',
    keywords: 'corporate sustainability, ESG, business climate action, partnership for planet, sustainable business, nature partnership',
    ogImage: '/og-business-for-planet.jpg',
    canonicalPath: '/business-for-the-planet',
  },
  myEarthPoint: {
    title: 'myEarth Point | Reward Climate Action',
    description: 'Turn everyday consumer choices into rewards for people, business, and planet. A new loyalty system that protects habitats.',
    keywords: 'myearth point, climate rewards, eco loyalty program, sustainable shopping, green rewards',
    ogImage: '/og-myearth-point.jpg',
    canonicalPath: '/my-earth-point',
  },
  junkToJungles: {
    title: 'Junk to Jungles | Transform Waste to Nature',
    description: 'Transform your waste into a smart investment. A truly circular system that turns junk into protected jungles.',
    keywords: 'junk to jungles, circular economy, waste to nature, sustainable waste, recycling program',
    ogImage: '/og-junk-to-jungles.jpg',
    canonicalPath: '/junk-to-jungles',
  },
  india: {
    title: 'Sacred Groves India | Conservation Partnerships',
    description: 'Sacred Groves conservation partnerships in India. Join the movement to protect biodiversity across the Indian subcontinent.',
    keywords: 'sacred groves india, conservation india, habitat protection india, biodiversity india',
    ogImage: '/og-india.jpg',
    canonicalPath: '/india',
  },
  partnershipForPlanet: {
    title: 'Partnership for the Planet | Business Collaboration',
    description: 'Imagine the possibilities. Partner with Sacred Groves across Beauty, Finance, Food, Health, Hospitality, Real Estate, Retail, Sports, and Travel.',
    keywords: 'partnership for planet, business collaboration, corporate partnership, sustainability partnership',
    ogImage: '/og-partnership.jpg',
    canonicalPath: '/partnership-for-the-planet',
  },
  storiesThatInspire: {
    title: 'Stories That Inspire | Guardian Testimonials',
    description: 'Read inspiring stories from Sacred Groves Guardians around the world. Real impact, real stories of nature conservation.',
    keywords: 'guardian stories, conservation testimonials, nature protection stories, inspiring environmental stories',
    ogImage: '/og-stories.jpg',
    canonicalPath: '/stories-that-inspire',
  },
  ourSacredGroves: {
    title: 'Our Sacred Groves | Protected Habitats',
    description: 'Explore our protected habitats: Coed Rhyal and Gigrin Prysg in Wales, UK, and Ocean Sanctuary in Nova Scotia, Canada.',
    keywords: 'sacred groves habitats, coed rhyal, gigrin prysg, ocean sanctuary, protected forests, wales forests',
    ogImage: '/og-our-groves.jpg',
    canonicalPath: '/our-sacred-groves',
  },
  coedRhyal: {
    title: 'Coed Rhyal | Ancient Oak Woodland, Wales',
    description: 'Coed Rhyal is an Ancient Oak Woodland in Wales, United Kingdom. Part of the National Forest for Wales network.',
    keywords: 'coed rhyal, ancient oak woodland, wales forest, national forest wales, oak trees',
    ogImage: '/og-coed-rhyal.jpg',
    canonicalPath: '/coed-rhyal',
  },
  girginPrysg: {
    title: 'Gigrin Prysg | Ancient Oak Woodland, Wales',
    description: 'Gigrin Prysg is an Ancient Oak Woodland in Wales, UK. Protected as part of the National Forest for Wales.',
    keywords: 'gigrin prysg, ancient oak woodland, wales forest, national forest wales, temperate rainforest',
    ogImage: '/og-girgin-prysg.jpg',
    canonicalPath: '/girgin-prysg',
  },
  oceanSanctuary: {
    title: 'Ocean Sanctuary | Coastal Forest, Nova Scotia',
    description: 'Ocean Sanctuary is a biodiverse habitat on the South Shore of Nova Scotia, Canada, protecting coastal forests and wetlands.',
    keywords: 'ocean sanctuary, nova scotia forest, canadian forest, coastal conservation, acadian forest',
    ogImage: '/og-ocean-sanctuary.jpg',
    canonicalPath: '/ocean-sanctuary',
  },
  recognizedGlobally: {
    title: 'Recognized Globally | Awards & Recognition',
    description: 'Sacred Groves impact is being recognized globally. Featured by Welsh Government, PwC, Microsoft, Cannes Lions, and COP28.',
    keywords: 'sacred groves awards, recognition, conservation awards, environmental recognition, pwc net zero',
    ogImage: '/og-recognized.jpg',
    canonicalPath: '/recognized-globally',
  },
  notFound: {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist. Return to Sacred Groves homepage to continue exploring our conservation mission.',
    keywords: '',
    ogImage: DEFAULT_OG_IMAGE,
    canonicalPath: '/404',
  },
}

// =============================================================================
// BREADCRUMB CONFIGURATION
// =============================================================================

export const BREADCRUMBS = {
  home: [{ name: 'Home', path: '/' }],
  about: [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ],
  peopleForPlanet: [
    { name: 'Home', path: '/' },
    { name: 'People for the Planet', path: '/people-for-the-planet' },
  ],
  businessForPlanet: [
    { name: 'Home', path: '/' },
    { name: 'Business for the Planet', path: '/business-for-the-planet' },
  ],
  myEarthPoint: [
    { name: 'Home', path: '/' },
    { name: 'Business for the Planet', path: '/business-for-the-planet' },
    { name: 'myEarth Point', path: '/my-earth-point' },
  ],
  junkToJungles: [
    { name: 'Home', path: '/' },
    { name: 'Business for the Planet', path: '/business-for-the-planet' },
    { name: 'Junk to Jungles', path: '/junk-to-jungles' },
  ],
  india: [
    { name: 'Home', path: '/' },
    { name: 'India', path: '/india' },
  ],
  partnershipForPlanet: [
    { name: 'Home', path: '/' },
    { name: 'Business for the Planet', path: '/business-for-the-planet' },
    { name: 'Partnership for the Planet', path: '/partnership-for-the-planet' },
  ],
  storiesThatInspire: [
    { name: 'Home', path: '/' },
    { name: 'Stories That Inspire', path: '/stories-that-inspire' },
  ],
  ourSacredGroves: [
    { name: 'Home', path: '/' },
    { name: 'Our Sacred Groves', path: '/our-sacred-groves' },
  ],
  coedRhyal: [
    { name: 'Home', path: '/' },
    { name: 'Our Sacred Groves', path: '/our-sacred-groves' },
    { name: 'Coed Rhyal', path: '/coed-rhyal' },
  ],
  girginPrysg: [
    { name: 'Home', path: '/' },
    { name: 'Our Sacred Groves', path: '/our-sacred-groves' },
    { name: 'Gigrin Prysg', path: '/girgin-prysg' },
  ],
  oceanSanctuary: [
    { name: 'Home', path: '/' },
    { name: 'Our Sacred Groves', path: '/our-sacred-groves' },
    { name: 'Ocean Sanctuary', path: '/ocean-sanctuary' },
  ],
}

// =============================================================================
// FAQ DATA (for structured data)
// =============================================================================

export const FAQ_DATA = [
  {
    question: 'What is Sacred Groves?',
    answer: 'Sacred Groves is a Community Interest Company (CIC) incorporated in the United Kingdom that protects biodiverse habitats. We enable individuals and businesses to become Guardians of the Wild by protecting real forest acres.',
  },
  {
    question: 'How does habitat protection work?',
    answer: 'We secure biodiverse habitats and forests, divide them into Sacred Groves Clusters (SGCs) with unique IDs, and allow Guardians to protect each cluster for a period of 10 years.',
  },
  {
    question: 'Where are the Sacred Groves habitats located?',
    answer: 'We currently protect three habitats: Coed Rhyal and Gigrin Prysg (Ancient Oak Woodlands in Wales, UK) and Ocean Sanctuary (coastal forest in Nova Scotia, Canada).',
  },
  {
    question: 'Is Sacred Groves a charity?',
    answer: 'No, Sacred Groves is not a charity. We are a Community Interest Company (CIC) - a social enterprise that maximizes community benefit while rewarding people, planet, and business.',
  },
  {
    question: 'How can businesses partner with Sacred Groves?',
    answer: 'Businesses can partner through our Business for the Planet program, including Partnership for the Planet, myEarth Point loyalty integration, Junk to Jungles recycling program, and Brand a Habitat options.',
  },
]

// =============================================================================
// NAVIGATION STRUCTURE (for SEO sitemap generation)
// =============================================================================

export const SITE_NAVIGATION = [
  { path: '/', name: 'Home', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', name: 'About Us', priority: 0.9, changefreq: 'monthly' },
  { path: '/people-for-the-planet', name: 'People for the Planet', priority: 0.9, changefreq: 'weekly' },
  { path: '/business-for-the-planet', name: 'Business for the Planet', priority: 0.9, changefreq: 'weekly' },
  { path: '/my-earth-point', name: 'myEarth Point', priority: 0.8, changefreq: 'monthly' },
  { path: '/junk-to-jungles', name: 'Junk to Jungles', priority: 0.8, changefreq: 'monthly' },
  { path: '/partnership-for-the-planet', name: 'Partnership for the Planet', priority: 0.8, changefreq: 'monthly' },
  { path: '/india', name: 'India', priority: 0.7, changefreq: 'monthly' },
  { path: '/stories-that-inspire', name: 'Stories That Inspire', priority: 0.7, changefreq: 'weekly' },
  { path: '/our-sacred-groves', name: 'Our Sacred Groves', priority: 0.8, changefreq: 'monthly' },
  { path: '/coed-rhyal', name: 'Coed Rhyal', priority: 0.7, changefreq: 'monthly' },
  { path: '/girgin-prysg', name: 'Gigrin Prysg', priority: 0.7, changefreq: 'monthly' },
  { path: '/ocean-sanctuary', name: 'Ocean Sanctuary', priority: 0.7, changefreq: 'monthly' },
]
