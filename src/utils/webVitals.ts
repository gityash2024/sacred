/**
 * Web Vitals tracking utility
 * Monitors Core Web Vitals metrics for performance optimization
 */

interface WebVitalMetric {
  id: string
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  navigationType: string
}

type ReportHandler = (metric: WebVitalMetric) => void

/**
 * Thresholds for Core Web Vitals ratings
 */
const THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  FID: { good: 100, poor: 300 },
  INP: { good: 200, poor: 500 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
}

/**
 * Get rating based on metric value and thresholds
 */
function getRating(
  name: string,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS]
  if (!threshold) return 'needs-improvement'

  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}

/**
 * Report Web Vitals to console (development)
 */
export const reportToConsole: ReportHandler = (metric) => {
  const styles = {
    good: 'color: #0a4d2e; font-weight: bold',
    'needs-improvement': 'color: #c9a100; font-weight: bold',
    poor: 'color: #c41e3a; font-weight: bold',
  }

  console.log(
    `%c[Web Vitals] ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`,
    styles[metric.rating]
  )
}

/**
 * Report Web Vitals to Google Analytics
 */
export const reportToGA: ReportHandler = (metric) => {
  // Check if gtag is available
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
      metric_rating: metric.rating,
    })
  }
}

/**
 * Report Web Vitals to a custom endpoint
 */
export const reportToEndpoint = (endpoint: string): ReportHandler => {
  return (metric) => {
    const body = JSON.stringify({
      id: metric.id,
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      navigationType: metric.navigationType,
      url: window.location.href,
      timestamp: Date.now(),
    })

    // Use sendBeacon for reliability
    if (navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, body)
    } else {
      fetch(endpoint, {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
      }).catch(() => {
        // Silent fail for analytics
      })
    }
  }
}

/**
 * Initialize Web Vitals tracking with Performance Observer
 * Uses native Performance API for lightweight implementation
 */
export function initWebVitals(onReport: ReportHandler = reportToConsole): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return
  }

  // Track Largest Contentful Paint (LCP)
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1] as PerformancePaintTiming
      if (lastEntry) {
        const value = lastEntry.startTime
        onReport({
          id: `lcp-${Date.now()}`,
          name: 'LCP',
          value,
          rating: getRating('LCP', value),
          delta: value,
          navigationType: getNavigationType(),
        })
      }
    })
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
  } catch {
    // Observer not supported
  }

  // Track First Input Delay (FID)
  try {
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const firstEntry = entries[0] as PerformanceEventTiming
      if (firstEntry) {
        const value = firstEntry.processingStart - firstEntry.startTime
        onReport({
          id: `fid-${Date.now()}`,
          name: 'FID',
          value,
          rating: getRating('FID', value),
          delta: value,
          navigationType: getNavigationType(),
        })
      }
    })
    fidObserver.observe({ type: 'first-input', buffered: true })
  } catch {
    // Observer not supported
  }

  // Track Cumulative Layout Shift (CLS)
  try {
    let clsValue = 0
    let clsEntries: PerformanceEntry[] = []

    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries() as (PerformanceEntry & { hadRecentInput?: boolean; value?: number })[]
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value || 0
          clsEntries.push(entry)
        }
      })
    })
    clsObserver.observe({ type: 'layout-shift', buffered: true })

    // Report CLS on page hide
    const reportCLS = () => {
      if (clsEntries.length > 0) {
        onReport({
          id: `cls-${Date.now()}`,
          name: 'CLS',
          value: clsValue,
          rating: getRating('CLS', clsValue),
          delta: clsValue,
          navigationType: getNavigationType(),
        })
      }
    }

    // Report when page is hidden
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        reportCLS()
      }
    })
  } catch {
    // Observer not supported
  }

  // Track First Contentful Paint (FCP)
  try {
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const fcpEntry = entries.find((e) => e.name === 'first-contentful-paint')
      if (fcpEntry) {
        const value = fcpEntry.startTime
        onReport({
          id: `fcp-${Date.now()}`,
          name: 'FCP',
          value,
          rating: getRating('FCP', value),
          delta: value,
          navigationType: getNavigationType(),
        })
      }
    })
    fcpObserver.observe({ type: 'paint', buffered: true })
  } catch {
    // Observer not supported
  }

  // Track Time to First Byte (TTFB)
  try {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigation) {
      const value = navigation.responseStart - navigation.requestStart
      if (value > 0) {
        onReport({
          id: `ttfb-${Date.now()}`,
          name: 'TTFB',
          value,
          rating: getRating('TTFB', value),
          delta: value,
          navigationType: getNavigationType(),
        })
      }
    }
  } catch {
    // Not supported
  }
}

/**
 * Get navigation type
 */
function getNavigationType(): string {
  if (typeof window === 'undefined') return 'unknown'

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  return navigation?.type || 'navigate'
}

/**
 * Log performance summary to console
 */
export function logPerformanceSummary(): void {
  if (typeof window === 'undefined') return

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  if (!navigation) return

  console.group('%c📊 Performance Summary', 'color: #0a4d2e; font-weight: bold')
  console.log(`DNS Lookup: ${(navigation.domainLookupEnd - navigation.domainLookupStart).toFixed(2)}ms`)
  console.log(`TCP Connection: ${(navigation.connectEnd - navigation.connectStart).toFixed(2)}ms`)
  console.log(`TTFB: ${(navigation.responseStart - navigation.requestStart).toFixed(2)}ms`)
  console.log(`Response Time: ${(navigation.responseEnd - navigation.responseStart).toFixed(2)}ms`)
  console.log(`DOM Interactive: ${navigation.domInteractive.toFixed(2)}ms`)
  console.log(`DOM Content Loaded: ${navigation.domContentLoadedEventEnd.toFixed(2)}ms`)
  console.log(`Load Complete: ${navigation.loadEventEnd.toFixed(2)}ms`)
  console.groupEnd()
}

