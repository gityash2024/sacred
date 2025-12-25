import { useLocation, Link } from 'react-router-dom'
import styles from './Footer.module.css'
import footerlogo from '@/assets/footerlogo.svg'
import linkedln from '@/assets/linkedln.svg'
import youtube from '@/assets/youtube.svg'
import instagram from '@/assets/instagram.svg'
import facebook from '@/assets/facebook.svg'
import alogo from '@/assets/alogo.svg'
import PlayStoreLogo from '@/assets/PlayStoreLogo.svg'
import footerlogo_1 from '@/assets/footerlogo_1.svg'
import footerlogo_2 from '@/assets/footerlogo_2.svg'
import follow_us_icon from '@/assets/follow_us_icon.svg'
import { IndiaFooter } from './IndiaFooter'

export const Footer = () => {
  const location = useLocation()
  const isBusinessForPlanetPage = location.pathname === '/business-for-the-planet'
  const isPeopleForPlanetPage = location.pathname === '/people-for-the-planet'
  const isJunkToJunglesPage = location.pathname === '/junk-to-jungles'
  const isIndiaPage = location.pathname === '/india'
  const isPartnershipForPlanetPage = location.pathname === '/partnership-for-the-planet'
  const isStoriesThatInspirePage = location.pathname === '/stories-that-inspire'
  const isAboutPage = location.pathname === '/about'
  const isOurSacredGrovesPage = location.pathname === '/our-sacred-groves'
  const isCoedRhyalPage = location.pathname === '/coed-rhyal'
  const isGirginPrysgPage = location.pathname === '/girgin-prysg'
  const isOceanSanctuaryPage = location.pathname === '/ocean-sanctuary'
  const isMyEarthPointPage = location.pathname === '/my-earth-point'
  const isMediaCentrePage = location.pathname === '/media-centre'

  // List of all valid routes
  const validRoutes = [
    '/',
    '/people-for-the-planet',
    '/business-for-the-planet',
    '/about',
    '/my-earth-point',
    '/junk-to-jungles',
    '/india',
    '/partnership-for-the-planet',
    '/stories-that-inspire',
    '/our-sacred-groves',
    '/coed-rhyal',
    '/girgin-prysg',
    '/ocean-sanctuary',
    '/media-centre',
  ]

  // Check if current path is a 404 page (not in valid routes)
  const isNotFoundPage = !validRoutes.includes(location.pathname)

  const shouldHideFollowUs = isBusinessForPlanetPage || isPeopleForPlanetPage || isJunkToJunglesPage || isIndiaPage || isPartnershipForPlanetPage || isStoriesThatInspirePage || isAboutPage || isOurSacredGrovesPage || isCoedRhyalPage || isGirginPrysgPage || isOceanSanctuaryPage || isMyEarthPointPage || isMediaCentrePage || isNotFoundPage
  // const currentYear = new Date().getFullYear()

  // Return India-specific footer for India page
  if (isIndiaPage) {
    return <IndiaFooter />
  }

  return (
    <footer className={`${styles.footer} ${shouldHideFollowUs ? styles.footerNoFollow : ''}`}>
      {!shouldHideFollowUs && (
        <div className={styles.followContainer}>
          <a href="https://www.linkedin.com/company/the-sacred-groves/" target="_blank" rel="noopener noreferrer" className={styles.followButton}>
            FOLLOW US
            <img style={{ marginLeft: '20px' }} src={follow_us_icon} alt="Follow Us" />
          </a>
        </div>
      )}

      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div>
            <h3>About Us</h3>
            <Link to="/about">Note from our Founders</Link>
            <Link to="/about">Our Story</Link>
          </div>

          <div>
            <h3>Our Sacred Groves</h3>
            <Link to="/coed-rhyal">Coed Rhyal<br />Wales, United Kingdom</Link>
            <Link to="/girgin-prysg">Gigrin Prysg<br />Wales, United Kingdom</Link>
            <Link to="/ocean-sanctuary">Ocean Sanctuary<br />Nova Scotia, Canada</Link>
            <Link to="/our-sacred-groves">Art and Science of <br />Conservation</Link>
            <Link to="/our-sacred-groves">Wild Tech</Link>
          </div>

          <div>
            <h3>People for the Planet</h3>
            <Link to="/people-for-the-planet#protect-a-habitat">Protect a Habitat</Link>
            <Link to="/people-for-the-planet#gift-a-habitat">Gift a Habitat</Link>

            <h3 className={`${styles.legalHeading} ${styles.webMargin}`}>
              Business for the Planet
            </h3>
            <Link to="/partnership-for-the-planet">Partnership for the Planet</Link>
            <Link to="/my-earth-point">myEarth Point</Link>
            <Link to="/junk-to-jungles">Junk to Jungles</Link>
            <Link to="/business-for-the-planet#seeds-of-recognition">Seeds of Recognition</Link>
            <Link to="/business-for-the-planet#brand-a-habitat">Brand a Habitat</Link>
            <Link to="/india">Sacred Groves India</Link>
          </div>

          <div>
            <h3>Resources</h3>
            <Link to="/stories-that-inspire">Stories that Inspire us</Link>
            <Link to="/media-centre">Media Centre</Link>
            <a 
              href="/knowledgebase/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault()
                window.open('/knowledgebase/docs', '_blank')
              }}
            >
              Knowledge Centre
            </a>

            <h3 className={styles.legalHeading}>Legal</h3>
            <Link to="/about">Disclosures</Link>
            <a href="/policy#cookies" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
            <a href="/policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
          </div>

          <div className={styles.contactSection}>
            <img src={footerlogo} alt="Sacred Groves" className={styles.logo} />
            <p>The Sacred Groves CIC, 124 City Road,<br />London, England, EC1V 2NX</p>
            <div className={styles.socialIcons}>
              <a href="#"><img src={linkedln} alt="LinkedIn" /></a>
              <a href="#"><img src={youtube} alt="YouTube" /></a>
              <a href="#"><img src={instagram} alt="Instagram" /></a>
              <a href="#"><img src={facebook} alt="Facebook" /></a>
            </div>
            <a href="mailto:connect@sacredgroves.earth" className={styles.mail}>
              connect@sacredgroves.earth
            </a>
            <h3 className={styles.downloadHeading}>Download our App</h3>
            <div className={styles.appButtons}>
              <a href="https://apps.apple.com/ae/app/sacred-groves/id1543864728" target="_blank" rel="noopener noreferrer">
                <img src={alogo} alt="App Store" className={styles.appStoreIcon} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.outshade.sacredgroves&hl=en_IN" target="_blank" rel="noopener noreferrer">
                <img src={PlayStoreLogo} alt="Play Store" className={styles.playStoreIcon} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <img src={footerlogo_1} alt="" className={styles.leftIcons} />
          <p>
            <span className={styles.copyrightFirst}>© 2020–2026 The Sacred Groves. All rights reserved.</span>
            <br />
            <span className={styles.copyrightSecond}>SACRED GROVES and the SG Sacred Groves Logo are registered trade mark belonging to The Sacred Groves C.I.C.</span>
          </p>
          <img src={footerlogo_2} alt="" className={styles.rightIcons} />
        </div>
      </div>
    </footer>
  )
}
