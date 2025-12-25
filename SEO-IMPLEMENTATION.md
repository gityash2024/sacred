# Sacred Groves - SEO Implementation Guide

This document outlines the comprehensive SEO optimization implemented for the Sacred Groves React website.

## Table of Contents

1. [Overview](#overview)
2. [Technical SEO Foundation](#technical-seo-foundation)
3. [Structured Data (JSON-LD)](#structured-data-json-ld)
4. [Performance Optimizations](#performance-optimizations)
5. [Accessibility Features](#accessibility-features)
6. [File Structure](#file-structure)
7. [Usage Examples](#usage-examples)
8. [Testing & Validation](#testing--validation)

---

## Overview

The SEO implementation follows enterprise-level best practices including:

- **React Helmet Async** for dynamic meta tag management
- **Comprehensive structured data** (Organization, Website, Breadcrumb, FAQ schemas)
- **Open Graph & Twitter Cards** for social media sharing
- **Core Web Vitals tracking** for performance monitoring
- **Full accessibility compliance** (WCAG AA standards)
- **PWA support** with manifest.json

---

## Technical SEO Foundation

### Meta Tags (per page)

Each page includes:
- Unique title tags (50-60 characters)
- Meta descriptions (150-160 characters)
- Keywords meta tags
- Canonical URLs
- Open Graph tags (og:title, og:description, og:image, og:url, og:type)
- Twitter Card tags
- Robots directives

### Implementation Location

- **Base meta tags**: `index.html`
- **Dynamic meta tags**: `src/components/common/SEO/SEO.tsx`
- **Page-specific SEO data**: `src/constants/index.ts`

### SEO Component Usage

```tsx
import { SEO } from '@/components/common/SEO'
import { PAGE_SEO, BREADCRUMBS, FAQ_DATA } from '@/constants'

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        keywords={PAGE_SEO.home.keywords}
        ogImage={PAGE_SEO.home.ogImage}
        breadcrumbs={BREADCRUMBS.home}
        faq={FAQ_DATA}
        includeOrganization={true}
        includeWebsite={true}
      />
      {/* Page content */}
    </>
  )
}
```

---

## Structured Data (JSON-LD)

### Implemented Schemas

1. **Organization Schema** (homepage)
   - Company name, logo, address
   - Contact information
   - Social media profiles
   - Founding date & founders

2. **Website Schema** (homepage)
   - Site name, URL
   - Search action potential

3. **BreadcrumbList Schema** (all pages)
   - Navigation path
   - Position-based items

4. **FAQPage Schema** (homepage)
   - Common questions and answers

### Schema Utilities

Located in `src/utils/seo.ts`:

```typescript
// Generate Organization schema
generateOrganizationSchema()

// Generate Website schema
generateWebsiteSchema(searchUrl?: string)

// Generate Breadcrumb schema
generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[])

// Generate FAQ schema
generateFAQSchema(faqItems: FAQItem[])

// Combine multiple schemas
combineSchemas(schemas: object[])
```

---

## Performance Optimizations

### Vite Configuration

- **Code splitting**: Vendor chunks for React, Router, Helmet
- **Tree shaking**: Automatic removal of unused code
- **Minification**: Terser with console removal in production
- **Asset optimization**: Smart chunk naming and organization

### Web Vitals Tracking

Implemented in `src/utils/webVitals.ts`:

- **LCP** (Largest Contentful Paint) - Target: < 2.5s
- **FID** (First Input Delay) - Target: < 100ms
- **CLS** (Cumulative Layout Shift) - Target: < 0.1
- **FCP** (First Contentful Paint)
- **TTFB** (Time to First Byte)

### Image Optimization

- Lazy loading with native `loading="lazy"`
- Proper alt attributes for all images
- SVG optimization for icons
- Responsive images support

### Font Loading

- Preconnect to Google Fonts
- Font-display: swap for non-blocking render

---

## Accessibility Features

### Implemented Standards

- **Skip to content link** for keyboard navigation
- **Proper heading hierarchy** (h1-h6)
- **ARIA labels** on interactive elements
- **Focus visible states** for keyboard users
- **Color contrast** meeting WCAG AA
- **Touch targets** minimum 44x44px
- **Reduced motion** support

### Key Components

1. **Skip Link**: Added in `index.html`
2. **Route Announcer**: Screen reader notifications on navigation
3. **Semantic HTML**: Proper use of header, main, nav, footer, section
4. **Focus Management**: Proper tab order and focus states

---

## File Structure

```
src/
├── components/
│   └── common/
│       └── SEO/
│           ├── SEO.tsx          # Main SEO component
│           └── index.ts
├── constants/
│   └── index.ts                 # SEO data, PAGE_SEO, BREADCRUMBS, FAQ_DATA
├── types/
│   └── index.ts                 # TypeScript types for SEO
├── utils/
│   ├── seo.ts                   # SEO utility functions
│   └── webVitals.ts             # Web Vitals tracking
└── pages/
    └── NotFound/                # Custom 404 page
        ├── NotFound.tsx
        └── NotFound.module.css

public/
├── manifest.json                # PWA manifest
├── robots.txt                   # Crawler directives
└── sitemap.xml                  # XML sitemap
```

---

## Usage Examples

### Adding SEO to a New Page

1. Add page configuration to `src/constants/index.ts`:

```typescript
export const PAGE_SEO = {
  // ... existing pages
  newPage: {
    title: 'New Page Title (50-60 chars)',
    description: 'New page description here (150-160 chars).',
    keywords: 'keyword1, keyword2, keyword3',
    ogImage: '/og-new-page.jpg',
    canonicalPath: '/new-page',
  },
}

export const BREADCRUMBS = {
  // ... existing breadcrumbs
  newPage: [
    { name: 'Home', path: '/' },
    { name: 'New Page', path: '/new-page' },
  ],
}
```

2. Use in your component:

```tsx
import { SEO } from '@/components/common/SEO'
import { PAGE_SEO, BREADCRUMBS } from '@/constants'

export const NewPage: React.FC = () => {
  return (
    <>
      <SEO
        title={PAGE_SEO.newPage.title}
        description={PAGE_SEO.newPage.description}
        keywords={PAGE_SEO.newPage.keywords}
        ogImage={PAGE_SEO.newPage.ogImage}
        breadcrumbs={BREADCRUMBS.newPage}
      />
      {/* Page content */}
    </>
  )
}
```

3. Add to sitemap.xml and update routes

---

## Testing & Validation

### Recommended Tools

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Google PageSpeed Insights**: https://pagespeed.web.dev/
3. **Google Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
4. **Lighthouse**: Built into Chrome DevTools
5. **Schema.org Validator**: https://validator.schema.org/

### Testing Checklist

- [ ] All pages have unique titles
- [ ] Meta descriptions are within 150-160 characters
- [ ] Open Graph images are 1200x630px
- [ ] Structured data validates without errors
- [ ] All images have alt attributes
- [ ] Heading hierarchy is correct (one h1 per page)
- [ ] Focus states are visible
- [ ] Skip link works correctly
- [ ] Mobile viewport is properly configured
- [ ] Sitemap is accessible
- [ ] Robots.txt allows crawling

### Performance Targets

| Metric | Target | Good | Needs Improvement |
|--------|--------|------|-------------------|
| LCP | < 2.5s | < 2.5s | 2.5s - 4s |
| FID | < 100ms | < 100ms | 100ms - 300ms |
| CLS | < 0.1 | < 0.1 | 0.1 - 0.25 |
| FCP | < 1.8s | < 1.8s | 1.8s - 3s |
| TTFB | < 0.8s | < 0.8s | 0.8s - 1.8s |

---

## Deployment Notes

### Environment Variables

Create a `.env` file:

```env
VITE_APP_URL=https://sacredgroves.earth
```

### Post-Deployment Steps

1. Submit sitemap to Google Search Console
2. Verify structured data in Search Console
3. Monitor Core Web Vitals in Search Console
4. Set up Google Analytics 4 (optional)

---

## Maintenance

### Regular Tasks

- Update sitemap.xml when adding/removing pages
- Review and update meta descriptions quarterly
- Monitor Core Web Vitals monthly
- Check for broken links and images
- Update structured data when organization info changes

### Updating SEO Data

All SEO configuration is centralized in `src/constants/index.ts`. Update this file to:
- Change page titles/descriptions
- Add new pages
- Update organization information
- Modify breadcrumb structures

---

## Support

For questions or issues related to SEO implementation, refer to:
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Web Vitals Documentation](https://web.dev/vitals/)

