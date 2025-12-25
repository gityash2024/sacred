import React, { useState, useEffect } from 'react'
import { SEO } from '@/components/common/SEO'
import { PAGE_SEO, BREADCRUMBS } from '@/constants'
import { AlignedWithUNSDGs } from '@/components/common/CommonSections/CommonSections'
import styles from './JunkToJungles.module.css'

// Import assets
import j2jBg from '@/assets/my_earth_point_bg.svg'
import j2jImage from '@/assets/j2j.svg'
import j2jRightIcon from '@/assets/J2J_right_icon.svg'

// Section 2 assets
import j2jSec2Bg from '@/assets/j2j_sec_2_bg.jpg'
import j2jSec2Icon1 from '@/assets/j2j_sec_2_icon_1.svg'
import j2jSec2Icon2 from '@/assets/j2j_sec_2_icon_2.svg'
import j2jSec2Icon3 from '@/assets/j2j_sec_2_icon_3.svg'
import j2jSec2Icon4 from '@/assets/j2j_sec_2_icon_4.svg'

// Section 3 assets
import cableTopImage from '@/assets/cable_top_image.svg'
import cableImageBottom from '@/assets/cable_image_bottom.svg'
import letsExploreArrow from '@/assets/lets_explore_arrow.svg'

// Section 4 assets
import storiesBg from '@/assets/storis_jtj_bg.jpg'
import j2jIconTop from '@/assets/j2j_icon_top.svg'
import dentsuLogo from '@/assets/dentsu.svg'
import akiLogo from '@/assets/aki.svg'
import leisungLogo from '@/assets/leisung.svg'

// Recognition section assets
import Alexandrelogo from '@/assets/Alexandrelogo_2.svg'
import CGC_1 from '@/assets/CGC_1.svg'
import CGC_2 from '@/assets/CGC_2.svg'
import CGC_3 from '@/assets/CGC_3.svg'
import canneslions from '@/assets/canneslions.svg'
import cop_28 from '@/assets/cop_28.svg'
import village_capital from '@/assets/village_capital.svg'
import rightarrow from '@/assets/right_arrow.svg'
import leftarrow from '@/assets/left_arrow.svg'

// Section 7 assets
import TheSacredGrovesisa from '@/assets/TheSacredGrovesisa.svg'
import earth from '@/assets/earth.png'

interface RecognitionCard {
  id: number
  logo: string
  description: string
  url: string
  logoAlignment: 'left' | 'center' | 'right'
}

export const JunkToJungles: React.FC = () => {
  // Recognition cards data
  const recognitionCards: RecognitionCard[] = [
    {
      id: 1,
      logo: CGC_1,
      description: 'Gigrin Prysg and Coed Rhyal have been recognised by the Welsh Government for their rare temperate rainforests and vital role in local ecosystems.',
      url: 'https://www.gov.wales/visit-national-forest-wales',
      logoAlignment: 'left'
    },
    {
      id: 2,
      logo: CGC_2,
      description: 'Featured in PwC\'s Net Zero Future50 – Middle East report.',
      url: 'https://www.pwc.com/m1/en/esg/images/future50/docs/PwC-Net-Zero-Future50-Middle-East-Report.pdf',
      logoAlignment: 'center'
    },
    {
      id: 3,
      logo: CGC_3,
      description: 'Part of the Microsoft Entrepreneurship for Positive Impact Accelerator.',
      url: 'https://www.microsoft.com/socialentrepreneurship/portfolio.aspx',
      logoAlignment: 'right'
    },
    {
      id: 4,
      logo: canneslions,
      description: 'Honoured by the International Advertising Association at the Cannes Lions Festival of Creativity 2023.',
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:7080102554205921280/',
      logoAlignment: 'left'
    },
    {
      id: 5,
      logo: cop_28,
      description: 'Invited to the Business and Philanthropy Climate Forum at COP28 UAE.',
      url: 'https://bpcforum.org/about/',
      logoAlignment: 'center'
    },
    {
      id: 6,
      logo: village_capital,
      description: 'Selected for "Greentech Europe 2022 Emerging Futures Cohort".',
      url: 'https://vilcap.com/programs/greentech-europe-2022',
      logoAlignment: 'right'
    }
  ]

  const [currentCardPage, setCurrentCardPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else {
        setItemsPerPage(3)
      }
    }

    // Initial check
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Get visible cards for carousel
  const getVisibleCards = () => {
    const start = currentCardPage * itemsPerPage
    return recognitionCards.slice(start, start + itemsPerPage)
  }

  const totalPages = Math.ceil(recognitionCards.length / itemsPerPage)

  // Carousel navigation functions
  const nextCardPage = () => {
    if (currentCardPage < totalPages - 1) {
      setCurrentCardPage(prev => prev + 1)
    }
  }

  const prevCardPage = () => {
    if (currentCardPage > 0) {
      setCurrentCardPage(prev => prev - 1)
    }
  }
  return (
    <>
      <SEO
        title={PAGE_SEO.junkToJungles.title}
        description={PAGE_SEO.junkToJungles.description}
        keywords={PAGE_SEO.junkToJungles.keywords}
        ogImage={PAGE_SEO.junkToJungles.ogImage}
        breadcrumbs={BREADCRUMBS.junkToJungles}
      />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          {/* Left Section */}
          <div className={styles.heroLeft}>
            <div className={styles.heroLeftBg} style={{ backgroundImage: `url(${j2jBg})` }}>
              <img src={j2jImage} alt="Junk to Jungles" className={styles.heroLeftImage} />
            </div>
          </div>

          {/* Right Section */}
          <div className={styles.heroRight}>
            <img src={j2jRightIcon} alt="Junk to Jungles Icon" className={styles.heroRightIcon} />
            <h1 className={styles.heroHeading}>
              What if your waste could become your smartest investment?
            </h1>
            <p className={styles.heroText}>
              For People, Planet, Prosperity, and Purpose
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.section2} style={{ backgroundImage: `url(${j2jSec2Bg})` }}>
        <div className={styles.section2Container}>
          {/* Left Section */}
          <div className={styles.section2Left}>
            <h2 className={styles.section2Heading}>
              Junk to<br />Jungles
            </h2>
          </div>

          {/* Right Section */}
          <div className={styles.section2Right}>
            <div className={styles.section2RightContent}>
              <div className={styles.section2Icons}>
                <img src={j2jSec2Icon1} alt="Icon 1" className={styles.section2Icon} />
                <img src={j2jSec2Icon2} alt="Icon 2" className={styles.section2Icon} />
                <img src={j2jSec2Icon3} alt="Icon 3" className={styles.section2Icon} />
                <img src={j2jSec2Icon4} alt="Icon 4" className={styles.section2Icon} />
              </div>

              <div className={styles.section2TextWrapper}>
                <p className={styles.section2Text}>
                  Channel the residual value of<br />
                  discarded assets, especially<br />
                  e-waste, into protecting habitats. By<br />
                  recycling or reselling obsolete assets,<br />
                  convert what was once junk into<br />
                  living acres of nature under<br />
                  protection.<br />
                  <br />
                  It is a step towards the global vision<br />
                  of truly circular systems for our<br />
                  planet.
                </p>
              </div>
            </div>

            <p className={styles.section2Location}>
              Coed Rhyal, Wales, United Kingdom - Location: (51.70079, -4.274005)
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.section3}>
        <div className={styles.section3Container}>
          {/* Left Section */}
          <div className={styles.section3Left}>
            <div className={styles.section3Point}>
              <h3 className={styles.section3Heading}>Convert e-waste into forests</h3>
              <p className={styles.section3Text}>Old devices are recycled, and the residual value funds forest protection.</p>
            </div>

            <div className={styles.section3Point}>
              <h3 className={styles.section3Heading}>Zero cost to companies</h3>
              <p className={styles.section3Text}>No P&L impact; may even save storage/disposal costs.</p>
            </div>

            <div className={styles.section3Point}>
              <h3 className={styles.section3Heading}>End-to-end managed</h3>
              <p className={styles.section3Text}>Collection, recycling, dashboards, and impact certificates included.</p>
            </div>

            <div className={styles.section3Point}>
              <h3 className={styles.section3Heading}>Real impact</h3>
              <p className={styles.section3Text}>Each contribution protects forests, cuts CO₂ emissions, and reduces burden on landfills.</p>
            </div>

            <div className={styles.section3Point}>
              <h3 className={styles.section3Heading}>Proven model</h3>
              <p className={styles.section3Text}>Already adopted by progressive brands like Dentsu, AKI Group, Leisung Technologies LLC.</p>
            </div>

            <a href="mailto:connect@sacredgroves.earth" className={styles.contactUsButton}>
              CONTACT US
              <img src={letsExploreArrow} alt="Arrow" className={styles.contactUsArrow} />
            </a>
          </div>

          {/* Right Section */}
          <div className={styles.section3Right}>
            <img src={cableTopImage} alt="Cable Top" className={styles.cableTopImage} />
            <img src={cableImageBottom} alt="Cable Bottom" className={styles.cableBottomImage} />
          </div>
        </div>
      </section>

      {/* Section 4 - Three Stories of Junk to Jungles */}
      <section className={styles.section4} style={{ backgroundImage: `url(${storiesBg})` }}>
        <div className={styles.section4Container}>
          <img src={j2jIconTop} alt="Junk to Jungles Icon" className={styles.section4TopIcon} />

          <h2 className={styles.section4Heading}>
            Three Stories of Junk to Jungles
          </h2>

          <div className={styles.section4Cards}>
            {/* Dentsu Card */}
            <div className={styles.section4Card}>
              <a
                href="https://www.dentsu.com/ae/en/media-and-investors/sacred-groves"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.section4CardLink}
              >
                <div className={styles.section4CardLogoContainer}>
                  <img src={dentsuLogo} alt="Dentsu" className={styles.section4CardLogo} />
                </div>
                <div className={styles.section4CardTextWrapper}>
                  <p className={styles.section4CardText}>
                    Dentsu is a global marketing<br />
                    communications agency committed to<br />
                    sustainable climate action. In<br />
                    partnership with NorthLadder, a leading<br />
                    pre-owned device auction platform,<br />
                    Sacred Groves converted depreciated<br />
                    electronics of Dentsu MENA into<br />
                    protected natural habitats.
                  </p>
                </div>
              </a>
            </div>

            {/* AKI Card */}
            <div className={styles.section4Card}>
              <a
                href="https://akigroup.com/media/aki-and-sacred-groves-partner-for-a-sustainable-future/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.section4CardLink}
              >
                <div className={styles.section4CardLogoContainer}>
                  <img src={akiLogo} alt="AKI Group" className={styles.section4CardLogo} />
                </div>
                <div className={styles.section4CardTextWrapper}>
                  <p className={styles.section4CardText}>
                    In November 2023, AKI Group<br />
                    partnered with Sacred Groves to turn<br />
                    their 'Junk to Jungles'.
                  </p>
                  <p className={styles.section4CardText}>
                    Their devices re-entered circulation<br />
                    in emerging markets, promoting a<br />
                    circular economy and reducing<br />
                    e-waste in landfills.
                  </p>
                </div>
              </a>
            </div>

            {/* Leisung Card */}
            <div className={styles.section4Card}>
              <a
                href="https://www.linkedin.com/posts/leisung_climateaction-conservation-sacredgroves-activity-7119909904248664064-5pMH/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.section4CardLink}
              >
                <div className={styles.section4CardLogoContainer}>
                  <img src={leisungLogo} alt="Leisung Technologies" className={styles.section4CardLogo} />
                </div>
                <div className={styles.section4CardTextWrapper}>
                  <p className={styles.section4CardText}>
                    Leisung Technologies LLC is an<br />
                    innovative Audio Visual Solutions Company<br />
                    based in the Middle East, who have<br />
                    made a commitment to responsibly<br />
                    recycle all their electronic assets<br />
                    and commit to conservation with Sacred<br />
                    Groves.
                  </p>
                  <p className={styles.section4CardText}>
                    They have included the 'Junk<br />
                    to Junk' proposition in their new<br />
                    client acquisition strategy.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <p className={styles.section4Location}>
            Coed Rhyal, Wales, United Kingdom - Location: (51.70079, -4.274005)
          </p>
        </div>
      </section>

      {/* Our impact is being recognised globally section */}
      <section className={styles.recognizedSection}>
        <div className={styles.recognizedContainer}>
          <div className={styles.recognizedContent}>
            <div className={styles.recognizedTopDecoration}>
              <img src={Alexandrelogo} alt="Alexandrelogo" className={styles.recognizedTreeIcon} />
            </div>

            <h1 className={styles.recognizedHeading}>Our impact is being recognised globally.</h1>

            <div className={styles.recognizedCards}>
              {getVisibleCards().map((card) => (
                <a
                  key={card.id}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.recognizedCard}
                >
                  <div className={styles.recognizedCardHeader}>
                    <div className={`${styles.recognizedLogoContainer} ${card.logoAlignment === 'left' ? styles.recognizedLogoContainerLeft : card.logoAlignment === 'right' ? styles.recognizedLogoContainerRight : ''}`}>
                      <img src={card.logo} alt="Recognition Logo" className={styles.recognizedMainLogo} />
                    </div>
                  </div>
                  <p className={styles.recognizedCardDescription}>
                    {card.description}
                  </p>
                </a>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div className={styles.recognizedCarouselNavigation}>
              <button
                className={styles.recognizedPrevButton}
                onClick={prevCardPage}
                style={{ visibility: currentCardPage === 0 ? 'hidden' : 'visible' }}
                aria-label="Previous Slide"
              >
                <img src={leftarrow} alt="Previous" />
              </button>
              <button
                className={styles.recognizedNextButton}
                onClick={nextCardPage}
                style={{ visibility: currentCardPage >= totalPages - 1 ? 'hidden' : 'visible' }}
                aria-label="Next Slide"
              >
                <img src={rightarrow} alt="Next" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - The Sacred Groves */}
      <section className={styles.section7} style={{ backgroundImage: `url(${earth})` }}>
        <div className={styles.sec7Content}>
          <div className={styles.sec7Left}>
            <img src={TheSacredGrovesisa} className={styles.sec7Logo} alt="The Sacred Groves" />

            <h2 className={styles.sec7Heading}>
              The Sacred Groves is a<br />
              Community Interest<br />
              Company, incorporated<br />
              in the United Kingdom,<br />
              reimagining business in<br />
              partnership with<br />
              nature — our ultimate<br />
              shareholder.
            </h2>

            <p className={styles.sec7Para}>
              With Guardians in over <strong>30 countries</strong>, we protect<br />
              three biodiverse habitats in the UK and Canada.<br />
              By 2030, our goal is to safeguard a million acres of<br />
              critical ecosystems across the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Aligned with UN SDGs Section */}
      <AlignedWithUNSDGs hideLinkedInCarousel={true} />
    </>
  )
}
