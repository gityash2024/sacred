/**
 * Loading Component
 * Walking elephant loader matching the webapplication style
 */

import React from 'react'
import styles from './Loading.module.css'

/**
 * Loading component for Suspense fallback
 * @returns Loading JSX element
 */
export const Loading: React.FC = () => {
  return (
    <div className={styles.loadingContainer} role="status" aria-label="Loading">
      <div className={styles.loaderWrapper}>
        <img 
          src="/assets/img/elephantgif.gif" 
          className={styles.elephantGif} 
          alt="Loading..." 
        />
        <p className={styles.loadingText}>Please wait...</p>
      </div>
      <span className={styles.srOnly}>Loading...</span>
    </div>
  )
}
