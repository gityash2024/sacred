/**
 * 404 Not Found Page Component
 * Custom error page with SEO optimization
 */

import { Link } from 'react-router-dom'
import { SEO } from '@/components/common/SEO'
import { PAGE_SEO } from '@/constants'
import styles from './NotFound.module.css'

/**
 * NotFound page component
 * Displays when user navigates to non-existent route
 * @returns NotFound page JSX element
 */
export const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title={PAGE_SEO.notFound.title}
        description={PAGE_SEO.notFound.description}
        noindex={true}
        nofollow={true}
      />

      <section className={styles.container} aria-labelledby="error-title">
        <div className={styles.content}>
          {/* Decorative Forest Element */}
          <div className={styles.forestDecoration} aria-hidden="true">
            <svg viewBox="0 0 200 120" className={styles.treeSvg}>
              <path
                d="M100 10 L130 50 L115 50 L140 90 L60 90 L85 50 L70 50 Z"
                fill="currentColor"
                opacity="0.3"
              />
              <rect x="95" y="90" width="10" height="20" fill="currentColor" opacity="0.4" />
              <path
                d="M60 25 L80 55 L70 55 L90 85 L30 85 L50 55 L40 55 Z"
                fill="currentColor"
                opacity="0.2"
              />
              <rect x="56" y="85" width="8" height="15" fill="currentColor" opacity="0.3" />
              <path
                d="M150 30 L170 60 L160 60 L175 85 L125 85 L140 60 L130 60 Z"
                fill="currentColor"
                opacity="0.25"
              />
              <rect x="147" y="85" width="7" height="12" fill="currentColor" opacity="0.35" />
            </svg>
          </div>

          {/* Error Code */}
          <h1 id="error-title" className={styles.errorCode}>
            404
          </h1>

          {/* Error Message */}
          <h2 className={styles.title}>Lost in the Forest</h2>

          <p className={styles.description}>
            The page you're looking for seems to have wandered off the beaten path.
            <br />
            Let's guide you back to our sacred habitats.
          </p>

          {/* Navigation Options */}
          <nav className={styles.navigation} aria-label="Error page navigation">
            <Link to="/" className={styles.primaryButton}>
              <span>Return Home</span>
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>

            <Link to="/our-sacred-groves" className={styles.secondaryButton}>
              <span>Explore Our Habitats</span>
            </Link>
          </nav>

          {/* Helpful Links */}
          <div className={styles.helpfulLinks}>
            <p className={styles.helpfulText}>Or try visiting:</p>
            <ul className={styles.linkList}>
              <li>
                <Link to="/people-for-the-planet">People for the Planet</Link>
              </li>
              <li>
                <Link to="/business-for-the-planet">Business for the Planet</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Support */}
          <p className={styles.support}>
            Need help? Contact us at{' '}
            <a href="mailto:connect@sacredgroves.earth">connect@sacredgroves.earth</a>
          </p>
        </div>
      </section>
    </>
  )
}

export default NotFound

