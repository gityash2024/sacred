/**
 * Application Entry Point
 * Initializes React app with performance monitoring
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initWebVitals, reportToConsole, logPerformanceSummary } from './utils/webVitals'

// Initialize Web Vitals tracking in development
if (import.meta.env.DEV) {
  // Initialize Web Vitals with console reporting
  initWebVitals(reportToConsole)

  // Log performance summary after page load
  window.addEventListener('load', () => {
    setTimeout(logPerformanceSummary, 1000)
  })
}

// Initialize Web Vitals in production (send to analytics)
if (import.meta.env.PROD) {
  initWebVitals((metric) => {
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag
      gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        metric_rating: metric.rating,
        non_interaction: true,
      })
    }
  })
}

// Create root and render app
const root = document.getElementById('root')

if (root) {
  createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)
} else {
  console.error('Root element not found')
}
