/**
 * People For The Planet Page Component
 */
import { SEO } from '@/components/common/SEO'
import { PAGE_SEO, BREADCRUMBS } from '@/constants'
import styles from './PeopleForPlanet.module.css'

import PeopleforthePlanetlogo from '@/assets/PeopleforthePlanetlogo.png'
import { RecognizedGlobally } from '../RecognizedGlobally/RecognizedGlobally'


// Section 2
import BecomeaGuardian_1 from '@/assets/BecomeaGuardian_1.png'
import BecomeaGuardian_2 from '@/assets/BecomeaGuardian_2.png'
import BecomeaGuardianlogo from '@/assets/BecomeaGuardianlogo.svg'
import connection from '@/assets/connection.svg'
import frog from '@/assets/frog.svg'
import sun from '@/assets/sun.svg'
import butterfly from '@/assets/butterfly.svg'
import arrow from '@/assets/arrow.svg' // Used for active button

// Section 3
import Wesecurebiodi from '@/assets/Wesecurebiodi.svg'
import SacredGroglobalscale from '@/assets/SacredGroglobalscale.png'
import onesecurelogo from '@/assets/onesecurelogo.svg'
import twosecurelogo from '@/assets/twosecurelogo.svg'
import threesecurelogo from '@/assets/threesecurelogo.svg'
import foursecurelogo from '@/assets/foursecurelogo.svg'
import fivesecurelogo from '@/assets/fivesecurelogo.svg'
import playbutton from '@/assets/playbutton.svg'
import fiveCardPlayImage from '@/assets/5_card_play_image.png'
// 4 section
import ImpactCompass from '@/assets/ImpactCompass.mp4'
import ProtectaHabitat from '@/assets/ProtectaHabitat.svg'
import BritishPoundlogo from '@/assets/BritishPoundlogo.svg'
// import Arrow1 from '@/assets/Arrow1.svg' // Used for quantity arrows
// 5 section
import GiftaHabitatilogo from '@/assets/GiftaHabitatilogo.svg'
import dotdotbox from '@/assets/dotdotbox.png'
import giftBox from '@/assets/gift_box.gif'
import GiftaHabitat_1 from '@/assets/GiftaHabitat_1.svg'
import GiftaHabitat_2 from '@/assets/GiftaHabitat_2.svg'
import GiftaHabitat_3 from '@/assets/GiftaHabitat_3.svg'
import GiftaHabitat_4 from '@/assets/GiftaHabitat_4.svg'
import GiftaHabitat_5 from '@/assets/GiftaHabitat_5.svg'
import GiftaHabitat_6 from '@/assets/GiftaHabitat_6.svg'
import GiftaHabitat_7 from '@/assets/GiftaHabitat_7.svg'
// 6 section
import Sacreddeedsmust from '@/assets/Sacreddeedsmust.svg'
import Certificateimage from '@/assets/Certificateimage.svg'
import certificateimagelogo from '@/assets/certificateimagelogo.svg'
import VirtualBackground from '@/assets/VirtualBackground.svg'
// import virtualbacklogo from '@/assets/virtualbacklogo.png'
import bracit1 from '@/assets/bracit1.png'


export const PeopleForPlanet: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <SEO
        title={PAGE_SEO.peopleForPlanet.title}
        description={PAGE_SEO.peopleForPlanet.description}
        keywords={PAGE_SEO.peopleForPlanet.keywords}
        ogImage={PAGE_SEO.peopleForPlanet.ogImage}
        breadcrumbs={BREADCRUMBS.peopleForPlanet}
        includeOrganization={true}
      />

      <div className={styles.pageWrapper}>
        {/* SECTION 1 — HERO */}
        <section
          className={styles.heroSection}
          style={{ backgroundImage: `url(${PeopleforthePlanetlogo})` }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              What if protecting a habitat was as<br />
              easy as sending a text?
            </h1>
          </div>
        </section>

        {/* SECTION 2 — GUARDIAN */}
        <section className={styles.guardianSection}>
          <div className={styles.guardianGrid}>
            <div className={styles.guardianLeft}>
              <div className={styles.imgWrapper}>
                <img src={BecomeaGuardian_1} className={styles.mainImg} alt="Guardian 1" />
                <img src={connection} className={styles.iconTop} alt="Connection icon" />
                <img src={frog} className={styles.iconBottom} alt="Frog icon" />
              </div>

              <div className={styles.imgWrapper}>
                <img src={BecomeaGuardian_2} className={styles.mainImg} alt="Guardian 2" />
                <img src={sun} className={styles.iconTop} alt="Sun icon" />
                <img src={butterfly} className={styles.iconBottom} alt="Butterfly icon" />
              </div>
            </div>

            <div className={styles.guardianRight}>
              <img
                src={BecomeaGuardianlogo}
                className={styles.guardianLogo}
                alt="Become a Guardian logo"
              />

              <h2 className={styles.guardianTitle}>
                Become a Guardian<br />
                <span className={styles.guardianTitleItalic}>of the</span> Wild.
              </h2>

              <p className={styles.guardianText}>
                Doing something positive for nature is easier than we think. With a simple click, you can protect a habitat — or even gift one.
              </p>

              <p className={styles.guardianText}>
                With Guardians in over 30 countries, we're protecting biodiverse forests in the UK and Canada, proof that when people come together, the planet thrives.
              </p>

              <p className={styles.guardianText}>A small step can truly make a big difference.</p>

              <div className={styles.btnGroup}>
                <button
                  className={styles.guardianBtn}
                  onClick={() => scrollToSection('gift-a-habitat')}
                >
                  <span>GIFT A HABITAT</span>
                  <img src={arrow} alt="Arrow" />
                </button>

                <button
                  className={styles.guardianBtn}
                  onClick={() => scrollToSection('protect-a-habitat')}
                >
                  <span>PROTECT A HABITAT</span>
                  <img src={arrow} alt="Arrow" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WILD TECH */}
        <section className={styles.wildSection}>
          <div className={styles.wildWrapper}>
            {/* LEFT 2x2 GRID */}
            <div className={styles.leftGrid}>
              {/* CARD 01 */}
              <div className={styles.gridCard}>
                <img src={Wesecurebiodi} className={styles.cardBg} alt="Background" />
                <img src={onesecurelogo} className={`${styles.cardIcon} ${styles.cardIcon1}`} alt="Secure logo 1" />
                <div className={styles.cardNum}>01</div>
                <div className={styles.cardText}>
                  We secure biodiverse<br />
                  habitats and forests<br />
                  across the world.
                </div>
              </div>

              {/* CARD 02 */}
              <div className={styles.gridCard}>
                <img src={Wesecurebiodi} className={styles.cardBg} alt="Background" />
                <img src={twosecurelogo} className={`${styles.cardIcon} ${styles.cardIcon2}`} alt="Secure logo 2" />
                <div className={styles.cardNum}>02</div>
                <div className={styles.cardText}>
                  We virtually divide<br />
                  them into Sacred<br />
                  Groves Clusters (SGCs).
                </div>
              </div>

              {/* CARD 03 */}
              <div className={styles.gridCard}>
                <img src={Wesecurebiodi} className={styles.cardBg} alt="Background" />
                <img src={threesecurelogo} className={`${styles.cardIcon} ${styles.cardIcon3}`} alt="Secure logo 3" />
                <div className={styles.cardNum}>03</div>
                <div className={styles.cardText}>
                  Every Sacred Groves<br />
                  Cluster is assigned a<br />
                  unique ID.
                </div>
              </div>

              {/* CARD 04 */}
              <div className={styles.gridCard}>
                <img src={Wesecurebiodi} className={styles.cardBg} alt="Background" />
                <div className={styles.cardIconRow}>
                  <img src={foursecurelogo} className={`${styles.cardIcon} ${styles.cardIcon4}`} alt="Secure logo 4" />
                  <img src={BritishPoundlogo} className={styles.poundIcon} alt="Pound logo" />
                </div>
                <div className={styles.cardNum}>04</div>
                <div className={styles.cardText}>
                  Guardians can protect each<br />
                  Sacred Groves Cluster for a<br />
                  fee, for a period of 10 years.
                </div>
              </div>
            </div>

            {/* RIGHT SIDE BIG CARD */}
            <div className={styles.rightSection} style={{ backgroundImage: `url(${SacredGroglobalscale})` }}>
              <div className={styles.rightContent}>
                <div className={styles.wildTitleContainer}>
                  <h2 className={styles.wildTitle}>
                    Our Sacred<br />
                    Groves Clusters
                  </h2>
                  <h3 className={styles.wildSubtitle}>
                    <span className={styles.builtWith}>Built with</span>
                    <br />
                    <span className={styles.wildTech}>Wild Tech</span>
                  </h3>
                </div>

                <div className={styles.stepCard}>
                  <img src={fivesecurelogo} className={styles.stepIcon} alt="Secure logo 5" />
                  <div className={styles.stepNum}>05</div>

                  <div className={styles.stepDesc}>
                    Sacred Groves is a<br />
                    platform for sustainable<br />
                    impact at a global scale.
                  </div>

                  <div className={styles.videoBox}>
                    <img
                      src={fiveCardPlayImage}
                      className={styles.videoThumb}
                      alt="Video thumbnail"
                    />
                    <a
                      href="https://youtu.be/gpQL1bJURs0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.playBtn}
                    >
                      <img src={playbutton} alt="Play button" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — IMPACT COMPASS */}
        <section id="protect-a-habitat" className={styles.habitatSection}>
          <div className={styles.habitatWrapper}>
            {/* LEFT SIDE: Impact Graphic */}
            <div className={styles.habitatLeft}>
              <div className={styles.impactCompassContainer}>
                {/* Video running on left side */}
                <video
                  src={ImpactCompass}
                  className={styles.impactCompassGraphic}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            {/* RIGHT SIDE: Text and Button */}
            <div className={styles.habitatRight}>
              <div className={styles.habitatIconContainer}>
                <img
                  src={ProtectaHabitat}
                  className={styles.habitatIcon}
                  alt="Protect a Habitat Icon"
                />
              </div>

              <h2 className={styles.habitatTitle}>
                Protect
                <br />a Habitat
              </h2>

              <p className={styles.habitatText}>Imagine a forest in your name.</p>
              <p className={styles.habitatTextMultiLine}>
                With Sacred Groves Clusters,<br />
                your climate action protects<br />
                real acres of forest - a simple,<br />
                tangible step toward<br />
                regeneration.
              </p>

              {/* ACT NOW button matching Figma exactly */}
              <a
                href="https://application.sacredgroves.earth/signup"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actNowBtn}
              >
                <div className={styles.actNowInnerContent}>
                  <span>ACT NOW</span>
                  <div className={styles.actNowAvatars}></div>
                </div>
                <img src={arrow} className={styles.actNowArrow} alt="Act Now Arrow" />
              </a>
            </div>
          </div>

          {/* Arrow at bottom center */}

        </section>
      </div>
      {/* SECTION 5 — GIFT A HABITAT */}
      <section id="gift-a-habitat" className={styles.giftSection}>
        <div className={styles.giftWrapper}>
          <div className={styles.giftLeft}>
            <img src={GiftaHabitatilogo} className={styles.giftLogo} alt="Gift a Habitat logo" />
            <h2 className={styles.giftTitle}>Gift a Habitat</h2>
            <p className={styles.giftText}>
              Mark life's special moments with a<br />
              gift that lasts. A Sacred Groves<br />
              Cluster is a thoughtful, planet-<br />
              positive way to celebrate friends,<br />
              family, and colleagues.
            </p>
            <a
              href="https://application.sacredgroves.earth/signup"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.giftBtn}
            >
              <span>GIFT NOW</span>
              {/* Arrow logo added as requested */}
              <img src={arrow} className={styles.giftBtnArrow} alt="Arrow" />
            </a>
          </div>

          <div className={styles.giftRight}>
            <img src={dotdotbox} className={styles.dotGrid} alt="dot grid" />
            <div className={styles.giftImageContainer}>
              <img src={giftBox} className={styles.giftMainImage} alt="Gift image main" />
            </div>

            <div className={styles.sideIcons}>
              <img src={GiftaHabitat_1} alt="icon1" className={`${styles.iconItem} ${styles.icon1}`} />
              <img src={GiftaHabitat_2} alt="icon2" className={`${styles.iconItem} ${styles.icon2}`} />
              <img src={GiftaHabitat_3} alt="icon3" className={`${styles.iconItem} ${styles.icon3}`} />
              <img src={GiftaHabitat_4} alt="icon4" className={`${styles.iconItem} ${styles.icon4}`} />
              <img src={GiftaHabitat_5} alt="icon5" className={`${styles.iconItem} ${styles.icon5}`} />
              <img src={GiftaHabitat_6} alt="icon6" className={`${styles.iconItem} ${styles.icon6}`} />
              <img src={GiftaHabitat_7} alt="icon7" className={`${styles.iconItem} ${styles.icon7}`} />
              <img src={GiftaHabitat_2} alt="icon2" className={`${styles.iconItem} ${styles.icon8}`} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — SACRED DEEDS */}
      <section className={styles.sacredSection}>
        <div className={styles.sacredWrapper}>
          <img src={Sacreddeedsmust} className={styles.sacredLogo} alt="Sacred deeds logo" />

          <h2 className={styles.sacredTitle}>Sacred deeds must be shared with others.</h2>
          <p className={styles.sacredSubtitle}>
            You’ve taken real action for nature, let it speak for itself.
          </p>

          <div className={styles.sacredGrid}>
            {/* CERTIFICATE CARD (unchanged layout but corrected brace positioning) */}
            <div className={styles.sacredCard}>
              <div className={styles.sacredCardImageWrapper}>
                <img src={bracit1} className={styles.braceLeft} style={{ top: '63%' }} />
                <img src={bracit1} className={styles.braceRight} style={{ top: '63%' }} />
                <img src={Certificateimage} className={styles.sacredCardImage} />
              </div>
              <img src={certificateimagelogo} className={styles.sacredCardIcon} />
              <div className={styles.sacredCardLabel}>Certificate</div>
            </div>

            {/* VIRTUAL BACKGROUND CARD — FIXED EXACTLY LIKE THE SAMPLE */}
            <div className={styles.sacredCard}>
              <div className={styles.sacredCardImageWrapper}>
                <img src={bracit1} className={styles.braceLeft} />
                <img src={bracit1} className={styles.braceRight} />

                <img src={VirtualBackground} className={styles.virtualScreen} />


              </div>
              <div className={`${styles.sacredCardLabel} ${styles.virtualLabel}`}>Virtual Background</div>
            </div>
          </div>

          <div className={styles.sacredBtnWrapper}>
            <a
              href="http://application.sacredgroves.earth/user/collectibles"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sacredBtn}
            >
              <span>VIEW COLLECTIBLES</span>
              <img src={arrow} className={styles.sacredBtnArrow} alt="Arrow" />
            </a>
          </div>
        </div>
      </section>
      <RecognizedGlobally showWildTech={false} hideLinkedInCarousel={true} />
    </>
  )
}
