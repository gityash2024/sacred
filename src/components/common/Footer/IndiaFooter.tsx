import styles from './IndiaFooter.module.css'
import footerlogo from '@/assets/footerlogo.svg'
import footerlogo_1 from '@/assets/footerlogo_1.svg'
import footerlogo_2 from '@/assets/footerlogo_2.svg'

export const IndiaFooter = () => {
  return (
    <footer className={styles.indiaFooter}>
      <div className={styles.indiaFooterContainer}>
        <div className={styles.indiaFooterGrid}>
          {/* About Us Section */}
          <div className={styles.indiaFooterColumn}>
            <h3 className={styles.indiaFooterHeading}>About Us</h3>
            <a href="#" className={styles.indiaFooterLink}>Note from our Founders</a>
            <a href="#" className={styles.indiaFooterLink}>Our Story</a>
          </div>

          {/* Logo and Address Section */}
          <div className={styles.indiaFooterCenter}>
            <img src={footerlogo} alt="Sacred Groves" className={styles.indiaFooterLogo} />
            <p className={styles.indiaFooterAddress}>
              Sacred Groves Conservation Services Private Limited<br />
              C-4, Usha Niketan, Safdarjung Development Area, Hauz Khas, South West Delhi, New Delhi, Delhi, India 110016
            </p>
          </div>

          {/* Connect with Us Section */}
          <div className={styles.indiaFooterColumn}>
            <h3 className={styles.indiaFooterHeading}>Connect with Us</h3>
            <a href="mailto:connect@sacredgroves.earth" className={styles.indiaFooterLink}>
              connect@sacredgroves.earth
            </a>
            <a href="tel:+919971290132" className={styles.indiaFooterLink}>
              +91 99712 90132
            </a>
            <p className={styles.indiaFooterCIN}>CIN: U02401DL2025PTC447970</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={styles.indiaFooterBottom}>
          <img src={footerlogo_1} alt="" className={styles.indiaFooterLeftIcons} />
          <p className={styles.indiaFooterCopyright}>
            <span className={styles.indiaCopyrightFirst}>© 2020–2026 The Sacred Groves. All rights reserved.</span>
            <br />
            <span className={styles.indiaCopyrightSecond}>SACRED GROVES and the SG Sacred Groves Logo are registered trade mark belonging to The Sacred Groves C.I.C.</span>
          </p>
          <img src={footerlogo_2} alt="" className={styles.indiaFooterRightIcons} />
        </div>
      </div>
    </footer>
  )
}

