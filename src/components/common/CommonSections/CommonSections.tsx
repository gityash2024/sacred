/**
 * Common Sections Component
 * Reusable sections used across multiple pages
 */
import React from 'react'
import { LinkedInPostsSlider } from './LinkedInPostsSlider'
import { MobileLinkedInCarousel } from './MobileLinkedInCarousel'
import styles from './CommonSections.module.css'
import align_1 from '@/assets/align_1.svg'
import align_2 from '@/assets/align_2.svg'
import align_3 from '@/assets/align_3.svg'
import align_4 from '@/assets/align_4.svg'

/**
 * Aligned with UN SDGs Section
 */
interface AlignedWithUNSDGsProps {
  hideLinkedInCarousel?: boolean
  showMobileCarousel?: boolean
}

export const AlignedWithUNSDGs: React.FC<AlignedWithUNSDGsProps> = ({ hideLinkedInCarousel = false, showMobileCarousel = false }) => {
  return (
    <>
      <section className={styles.alignedSection}>
        <div className={styles.alignedContainer}>
          {/* Top Row - Heading and SDG Icons */}
          <div className={styles.alignedTopRow}>
            {/* Left Side - Heading */}
            <div className={styles.alignedLeft}>
              <h2 className={styles.alignedHeading}>
                Aligned with<br />
                the UN<br />
                Sustainable<br />
                Development<br />
                Goals.
              </h2>
            </div>

            {/* Right Side - SDG Icons */}
            <div className={styles.alignedTopRight}>
              <div className={styles.sdgIcons}>
                <img src={align_1} alt="SDG 12: Responsible Consumption" className={styles.sdgIcon} />
                <img src={align_2} alt="SDG 13: Climate Action" className={styles.sdgIcon} />
                <img src={align_3} alt="SDG 15: Life on Land" className={styles.sdgIcon} />
                <img src={align_4} alt="SDG 17: Partnerships" className={styles.sdgIcon} />
              </div>
            </div>
          </div>

          {/* Bottom Row - LinkedIn Posts Slider (Full Width) - Only show if not hidden */}
          {!hideLinkedInCarousel && (
            <div className={styles.alignedBottomRow}>
              <LinkedInPostsSlider />
            </div>
          )}
        </div>
      </section>

      {/* Mobile Aligned Sections */}
      <div className={styles.mobileAlignedWrapper}>
        {/* Section 1: UN SDGs */}
        <section 
          className={styles.mobileAlignedSDG}
          style={{
            backgroundColor: '#B8E0D3',
            padding: '60px 20px',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <h2 
            className={styles.mobileSDGHeading}
            style={{
              fontFamily: 'Montserrat',
              fontSize: '32px',
              fontWeight: 500,
              color: '#03303D',
              lineHeight: '1.2',
              margin: '0 0 40px 0',
              textAlign: 'left',
              width: '100%',
              display: 'block'
            }}
          >
            Aligned with the<br />
            UN Sustainable<br />
            Development<br />
            Goals.
          </h2>
          <div 
            className={styles.mobileSDGGrid}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              width: '100%',
              marginBottom: '40px'
            }}
          >
            <img src={align_1} alt="SDG 12" className={styles.mobileSDGIcon} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            <img src={align_2} alt="SDG 13" className={styles.mobileSDGIcon} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            <img src={align_3} alt="SDG 15" className={styles.mobileSDGIcon} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            <img src={align_4} alt="SDG 17" className={styles.mobileSDGIcon} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
        </section>

        {/* Section 2: LinkedIn Carousel */}
        {(!hideLinkedInCarousel || showMobileCarousel) && <MobileLinkedInCarousel />}
      </div>
    </>
  )
}

