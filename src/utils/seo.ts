/**
 * SEO utility functions
 * Comprehensive utilities for structured data generation and SEO helpers
 */

import { APP_NAME, APP_URL, ORGANIZATION } from '@/constants'
import type {
  BreadcrumbItem,
  FAQItem,
  OrganizationSchema,
  WebsiteSchema,
  BreadcrumbListSchema,
  FAQPageSchema,
  ArticleSchema,
  PersonSchema,
} from '@/types'

// =============================================================================
// URL UTILITIES
// =============================================================================

/**
 * Generates full canonical URL
 * @param path - Path to append to base URL
 * @returns Full canonical URL
 */
export const getCanonicalUrl = (path: string = ''): string => {
  const baseUrl = APP_URL.replace(/\/$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  // Remove trailing slash except for root
  const normalizedPath = cleanPath === '/' ? cleanPath : cleanPath.replace(/\/$/, '')
  return `${baseUrl}${normalizedPath}`
}

/**
 * Generates full image URL
 * @param imagePath - Image path (relative or absolute)
 * @returns Full image URL
 */
export const getFullImageUrl = (imagePath: string): string => {
  if (imagePath.startsWith('http')) {
    return imagePath
  }
  const baseUrl = APP_URL.replace(/\/$/, '')
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
  return `${baseUrl}${cleanPath}`
}

// =============================================================================
// ORGANIZATION SCHEMA
// =============================================================================

/**
 * Generates structured data (JSON-LD) for Organization schema
 * @returns Organization schema object
 */
export const generateOrganizationSchema = (): OrganizationSchema => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORGANIZATION.name,
    legalName: ORGANIZATION.legalName,
    url: ORGANIZATION.url,
    logo: ORGANIZATION.logo,
    foundingDate: ORGANIZATION.foundingDate,
    founder: ORGANIZATION.founders.map((name) => ({
      '@type': 'Person' as const,
      name,
    })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORGANIZATION.address.streetAddress,
      addressLocality: ORGANIZATION.address.addressLocality,
      addressRegion: ORGANIZATION.address.addressRegion,
      postalCode: ORGANIZATION.address.postalCode,
      addressCountry: ORGANIZATION.address.addressCountry,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: ORGANIZATION.contactPoint.contactType,
      email: ORGANIZATION.contactPoint.email,
    },
    sameAs: ORGANIZATION.sameAs,
    description: `${APP_NAME} is a Community Interest Company protecting biodiverse habitats for future generations.`,
  }
}

// =============================================================================
// WEBSITE SCHEMA
// =============================================================================

/**
 * Generates structured data for Website schema
 * @param searchUrl - Optional search URL template
 * @returns Website schema object
 */
export const generateWebsiteSchema = (searchUrl?: string): WebsiteSchema => {
  const schema: WebsiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: APP_NAME,
    url: APP_URL,
    description: `${APP_NAME} - Protecting biodiverse habitats for people and planet.`,
  }

  if (searchUrl) {
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: searchUrl,
      },
      'query-input': 'required name=search_term_string',
    }
  }

  return schema
}

// =============================================================================
// BREADCRUMB SCHEMA
// =============================================================================

/**
 * Generates structured data for BreadcrumbList schema
 * @param breadcrumbs - Array of breadcrumb items
 * @returns BreadcrumbList schema object
 */
export const generateBreadcrumbSchema = (breadcrumbs: BreadcrumbItem[]): BreadcrumbListSchema => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  }
}

// =============================================================================
// FAQ SCHEMA
// =============================================================================

/**
 * Generates structured data for FAQPage schema
 * @param faqItems - Array of FAQ items
 * @returns FAQPage schema object
 */
export const generateFAQSchema = (faqItems: FAQItem[]): FAQPageSchema => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

// =============================================================================
// ARTICLE SCHEMA
// =============================================================================

/**
 * Generates structured data for Article schema
 * @param options - Article metadata options
 * @returns Article schema object
 */
export const generateArticleSchema = (options: {
  headline: string
  description?: string
  image?: string
  authorName?: string
  publishedTime?: string
  modifiedTime?: string
  url: string
}): ArticleSchema => {
  const { headline, description, image, authorName, publishedTime, modifiedTime, url } = options

  const author: PersonSchema | undefined = authorName
    ? {
        '@type': 'Person',
        name: authorName,
      }
    : undefined

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image ? getFullImageUrl(image) : undefined,
    author,
    publisher: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: ORGANIZATION.name,
      url: ORGANIZATION.url,
      logo: ORGANIZATION.logo,
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

// =============================================================================
// LOCAL BUSINESS SCHEMA (for specific locations)
// =============================================================================

/**
 * Generates structured data for LocalBusiness/Place schema
 * @param options - Location options
 * @returns LocalBusiness schema object
 */
export const generateLocalBusinessSchema = (options: {
  name: string
  description?: string
  latitude: number
  longitude: number
  address?: {
    streetAddress?: string
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
}) => {
  const { name, description, latitude, longitude, address } = options

  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name,
    description,
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.streetAddress,
        addressLocality: address.addressLocality,
        addressRegion: address.addressRegion,
        addressCountry: address.addressCountry,
      },
    }),
  }
}

// =============================================================================
// COMBINED SCHEMAS (for pages with multiple schema types)
// =============================================================================

/**
 * Combines multiple schemas into a graph
 * @param schemas - Array of schema objects
 * @returns Combined schema with @graph
 */
export const combineSchemas = (schemas: object[]): object => {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.map((schema) => {
      // Remove @context from individual schemas when combining
      const { ...rest } = schema as Record<string, unknown>
      delete rest['@context']
      return rest
    }),
  }
}

// =============================================================================
// SEO VALIDATION HELPERS
// =============================================================================

/**
 * Truncates text to specified length for SEO
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text
 */
export const truncateForSEO = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text
  }
  const truncated = text.slice(0, maxLength - 3)
  const lastSpace = truncated.lastIndexOf(' ')
  return lastSpace > 0 ? `${truncated.slice(0, lastSpace)}...` : `${truncated}...`
}

/**
 * Validates title length (50-60 characters recommended)
 * @param title - Title to validate
 * @returns Boolean indicating if title length is optimal
 */
export const isOptimalTitleLength = (title: string): boolean => {
  return title.length >= 50 && title.length <= 60
}

/**
 * Validates description length (150-160 characters recommended)
 * @param description - Description to validate
 * @returns Boolean indicating if description length is optimal
 */
export const isOptimalDescriptionLength = (description: string): boolean => {
  return description.length >= 150 && description.length <= 160
}

/**
 * Generates a safe slug from text
 * @param text - Text to convert to slug
 * @returns URL-safe slug
 */
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}
