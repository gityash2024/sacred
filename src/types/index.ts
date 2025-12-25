/**
 * Type definitions for Sacred Groves SEO and application
 */

// =============================================================================
// SEO TYPES
// =============================================================================

/**
 * Core SEO properties for pages
 */
export interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
  type?: 'website' | 'article' | 'profile' | 'product'
  noindex?: boolean
  nofollow?: boolean
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

/**
 * Breadcrumb item structure
 */
export interface BreadcrumbItem {
  name: string
  path: string
}

/**
 * FAQ item for structured data
 */
export interface FAQItem {
  question: string
  answer: string
}

/**
 * Organization address for structured data
 */
export interface OrganizationAddress {
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
}

/**
 * Contact point for structured data
 */
export interface ContactPoint {
  telephone?: string
  contactType: string
  email?: string
  areaServed?: string[]
  availableLanguage?: string[]
}

/**
 * Organization structured data
 */
export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  legalName?: string
  url: string
  logo?: string
  foundingDate?: string
  founder?: PersonSchema[]
  address?: PostalAddressSchema
  contactPoint?: ContactPointSchema
  sameAs?: string[]
  description?: string
}

/**
 * Person schema for founders
 */
export interface PersonSchema {
  '@type': 'Person'
  name: string
  jobTitle?: string
  url?: string
}

/**
 * Postal address schema
 */
export interface PostalAddressSchema {
  '@type': 'PostalAddress'
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
}

/**
 * Contact point schema
 */
export interface ContactPointSchema {
  '@type': 'ContactPoint'
  telephone?: string
  contactType: string
  email?: string
  areaServed?: string | string[]
  availableLanguage?: string | string[]
}

/**
 * Website structured data
 */
export interface WebsiteSchema {
  '@context': string
  '@type': 'WebSite'
  name: string
  url: string
  description?: string
  potentialAction?: SearchActionSchema
}

/**
 * Search action for website schema
 */
export interface SearchActionSchema {
  '@type': 'SearchAction'
  target: {
    '@type': 'EntryPoint'
    urlTemplate: string
  }
  'query-input': string
}

/**
 * Breadcrumb list structured data
 */
export interface BreadcrumbListSchema {
  '@context': string
  '@type': 'BreadcrumbList'
  itemListElement: BreadcrumbItemSchema[]
}

/**
 * Breadcrumb item schema
 */
export interface BreadcrumbItemSchema {
  '@type': 'ListItem'
  position: number
  name: string
  item: string
}

/**
 * FAQ page structured data
 */
export interface FAQPageSchema {
  '@context': string
  '@type': 'FAQPage'
  mainEntity: FAQEntitySchema[]
}

/**
 * FAQ entity schema
 */
export interface FAQEntitySchema {
  '@type': 'Question'
  name: string
  acceptedAnswer: {
    '@type': 'Answer'
    text: string
  }
}

/**
 * Article structured data
 */
export interface ArticleSchema {
  '@context': string
  '@type': 'Article' | 'NewsArticle' | 'BlogPosting'
  headline: string
  description?: string
  image?: string | string[]
  author?: PersonSchema | OrganizationSchema
  publisher?: OrganizationSchema
  datePublished?: string
  dateModified?: string
  mainEntityOfPage?: {
    '@type': 'WebPage'
    '@id': string
  }
}

/**
 * Local business structured data
 */
export interface LocalBusinessSchema {
  '@context': string
  '@type': 'LocalBusiness' | 'Organization'
  name: string
  url: string
  logo?: string
  image?: string
  description?: string
  address?: PostalAddressSchema
  geo?: GeoCoordinatesSchema
  telephone?: string
  email?: string
  openingHoursSpecification?: OpeningHoursSchema[]
  sameAs?: string[]
  priceRange?: string
}

/**
 * Geo coordinates schema
 */
export interface GeoCoordinatesSchema {
  '@type': 'GeoCoordinates'
  latitude: number
  longitude: number
}

/**
 * Opening hours schema
 */
export interface OpeningHoursSchema {
  '@type': 'OpeningHoursSpecification'
  dayOfWeek: string | string[]
  opens: string
  closes: string
}

// =============================================================================
// ROUTE TYPES
// =============================================================================

/**
 * Route configuration type
 */
export interface RouteConfig {
  path: string
  element: React.LazyExoticComponent<React.ComponentType>
}

/**
 * Navigation item for sitemap generation
 */
export interface NavigationItem {
  path: string
  name: string
  priority: number
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

// =============================================================================
// WEB VITALS TYPES
// =============================================================================

/**
 * Web Vitals metric
 */
export interface WebVitalsMetric {
  id: string
  name: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB'
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  entries: PerformanceEntry[]
  navigationType: 'navigate' | 'reload' | 'back-forward' | 'back-forward-cache' | 'prerender'
}

/**
 * Web Vitals report handler
 */
export type WebVitalsReportHandler = (metric: WebVitalsMetric) => void

// =============================================================================
// COMPONENT PROPS TYPES
// =============================================================================

/**
 * Extended SEO component props
 */
export interface SEOComponentProps extends SEOProps {
  /** Breadcrumb items for the page */
  breadcrumbs?: BreadcrumbItem[]
  /** FAQ items for FAQ schema */
  faq?: FAQItem[]
  /** Article metadata for article schema */
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
    section?: string
    tags?: string[]
  }
  /** Include organization schema */
  includeOrganization?: boolean
  /** Include website schema (for homepage) */
  includeWebsite?: boolean
  /** Children components */
  children?: React.ReactNode
}
