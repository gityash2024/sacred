/**
 * SEO Component
 * Comprehensive SEO management with structured data, Open Graph, Twitter Cards,
 * breadcrumbs, and FAQ schema support
 */

import { Helmet } from 'react-helmet-async'
import { APP_NAME, APP_URL, DEFAULT_OG_IMAGE, TWITTER_HANDLE } from '@/constants'
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  getCanonicalUrl,
  getFullImageUrl,
  combineSchemas,
} from '@/utils/seo'
import type { SEOComponentProps, BreadcrumbItem, FAQItem } from '@/types'

/**
 * SEO Component for managing page metadata
 * Implements comprehensive SEO best practices including:
 * - Dynamic meta tags
 * - Open Graph tags
 * - Twitter Card tags
 * - Canonical URLs
 * - Structured data (JSON-LD)
 * - Breadcrumb schema
 * - FAQ schema
 * - Organization schema
 * - Website schema
 *
 * @param props - SEO configuration props
 * @returns Helmet component with meta tags
 */
export const SEO: React.FC<SEOComponentProps> = ({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
  type = 'website',
  noindex = false,
  nofollow = false,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
  breadcrumbs,
  faq,
  includeOrganization = false,
  includeWebsite = false,
}) => {
  // Generate page metadata
  const pageTitle = title ? `${title} | ${APP_NAME}` : APP_NAME
  const pageDescription =
    description || `${APP_NAME} - Protecting biodiverse habitats for people and planet.`
  const pageImage = ogImage || DEFAULT_OG_IMAGE
  const canonical = canonicalUrl || getCanonicalUrl(typeof window !== 'undefined' ? window.location.pathname : '')
  const fullImageUrl = getFullImageUrl(pageImage)

  // Build robots meta content
  const robotsContent = buildRobotsContent(noindex, nofollow)

  // Generate structured data schemas
  const schemas = generateSchemas({
    breadcrumbs,
    faq,
    includeOrganization,
    includeWebsite,
  })

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Robots Meta */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />

      {/* Author Meta (for articles) */}
      {author && <meta name="author" content={author} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={APP_NAME} />
      <meta property="og:locale" content="en_GB" />

      {/* Article-specific Open Graph tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && <meta property="article:author" content={author} />}
      {type === 'article' && section && <meta property="article:section" content={section} />}
      {type === 'article' &&
        tags?.map((tag, index) => <meta key={index} property="article:tag" content={tag} />)}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={pageTitle} />

      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#0A4D2E" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />

      {/* Geo Meta Tags (for local SEO) */}
      <meta name="geo.region" content="GB-ENG" />
      <meta name="geo.placename" content="London" />

      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* Preconnect to critical third-party origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data (JSON-LD) */}
      {schemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(schemas.length === 1 ? schemas[0] : combineSchemas(schemas))}
        </script>
      )}
    </Helmet>
  )
}

/**
 * Build robots meta content
 */
function buildRobotsContent(noindex: boolean, nofollow: boolean): string {
  const parts: string[] = []

  if (noindex) {
    parts.push('noindex')
  } else {
    parts.push('index')
  }

  if (nofollow) {
    parts.push('nofollow')
  } else {
    parts.push('follow')
  }

  parts.push('max-snippet:-1')
  parts.push('max-image-preview:large')
  parts.push('max-video-preview:-1')

  return parts.join(', ')
}

/**
 * Generate structured data schemas based on props
 */
function generateSchemas(options: {
  breadcrumbs?: BreadcrumbItem[]
  faq?: FAQItem[]
  includeOrganization?: boolean
  includeWebsite?: boolean
}): object[] {
  const { breadcrumbs, faq, includeOrganization, includeWebsite } = options
  const schemas: object[] = []

  // Always include organization schema for brand consistency
  if (includeOrganization) {
    schemas.push(generateOrganizationSchema())
  }

  // Include website schema (primarily for homepage)
  if (includeWebsite) {
    schemas.push(generateWebsiteSchema(`${APP_URL}/search?q={search_term_string}`))
  }

  // Include breadcrumb schema if breadcrumbs provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs))
  }

  // Include FAQ schema if FAQ items provided
  if (faq && faq.length > 0) {
    schemas.push(generateFAQSchema(faq))
  }

  return schemas
}

export default SEO
