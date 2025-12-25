/**
 * Main Layout Component
 * Wraps pages with Header, Footer, and proper semantic structure
 * Includes accessibility features and SEO enhancements
 */

import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop/ScrollToTop'
import styles from './MainLayout.module.css'

interface MainLayoutProps {
  children?: ReactNode
}

/**
 * Main layout wrapper component
 * Uses Outlet for nested routes with proper semantic HTML structure
 * @returns Layout JSX element
 */
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation()

  // Handle scroll on route change - scroll to hash if present, otherwise scroll to top
  useEffect(() => {
    if (location.hash) {
      // Wait for the page to render, then scroll to the hash element
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      // No hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location.pathname, location.hash])

  // Update document title for screen readers on navigation
  useEffect(() => {
    // Announce page change to screen readers
    const pageTitle = document.title
    const announcement = document.getElementById('route-announcer')
    if (announcement) {
      announcement.textContent = `Navigated to ${pageTitle}`
    }
  }, [location.pathname])

  return (
    <div className={styles.layout}>
      {/* Screen reader announcement for route changes */}
      <div
        id="route-announcer"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={styles.srOnly}
      />

      {/* Header with navigation */}
      <Header />

      {/* Main content area */}
      <main id="main-content" className={styles.main} role="main" tabIndex={-1}>
        {/* Render children if provided (for error boundary), otherwise use Outlet */}
        {children || <Outlet />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button - Available on all pages */}
      <ScrollToTop />
    </div>
  )
}
