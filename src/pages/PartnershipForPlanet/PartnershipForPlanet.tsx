import React, { useState, useEffect } from 'react'
import { SEO } from '@/components/common/SEO'
import { PAGE_SEO, BREADCRUMBS } from '@/constants'
import { AlignedWithUNSDGs } from '@/components/common/CommonSections/CommonSections'
import styles from './PartnershipForPlanet.module.css'
// import imaginthepossibilities from '@/assets/imaginthepossibilities.png'
import TheFutureofBusinessisPoweredbyNature from '@/assets/TheFutureofBusinessisPoweredbyNature.svg'
import InvestforthePlanetFinancialPortfolioslog from '@/assets/InvestforthePlanetFinancialPortfolioslog.svg'
import InvestforthePlanetFinancialPortfoliosbackground from '@/assets/InvestforthePlanetFinancialPortfoliosbackground.png'
import ShopforthePlanetlogo from '@/assets/ShopforthePlanetlogo.svg'
import ShopforthePlanetbackgroundimage from '@/assets/ShopforthePlanetbackgroundimage.png'
import LearnforthePlanetlogo from '@/assets/LearnforthePlanetlogo.svg'
import LearnforthePlanetbackgroundimage from '@/assets/LearnforthePlanetbackgroundimage.png'
import JoyforthePlanetbackgroundimage from '@/assets/JoyforthePlanetbackgroundimage.png'
import follow_us_icon from '@/assets/follow_us_icon.svg'
import FoodBeverageimage from '@/assets/FoodBeverageimage.png'
import HealthWellness from '@/assets/HealthWellness.png'
import Hospitality from '@/assets/Hospitality.png'
import RealEstate from '@/assets/RealEstate.png'
import Retail from '@/assets/Retail.png'
import Sports from '@/assets/Sports.png'
import TravelTourism from '@/assets/TravelTourism.png'

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

export const PartnershipForPlanet: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeButton, setActiveButton] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [currentCardPage, setCurrentCardPage] = useState(0)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

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

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Get visible cards based on current page (3 cards per page on desktop, 1 on mobile)
  const getVisibleCards = () => {
    if (isMobile) {
      // On mobile, show only the current card
      return [recognitionCards[currentCardIndex]]
    } else {
      // On desktop, show 3 cards per page
      const startIndex = currentCardPage * 3
      return recognitionCards.slice(startIndex, startIndex + 3)
    }
  }

  const nextCardPage = () => {
    if (isMobile) {
      // On mobile, move to next card (one at a time)
      if (currentCardIndex < recognitionCards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1)
      }
    } else {
      // On desktop, move to next page (3 cards at a time)
      if (currentCardPage < 1) {
        setCurrentCardPage(currentCardPage + 1)
      }
    }
  }

  const prevCardPage = () => {
    if (isMobile) {
      // On mobile, move to previous card (one at a time)
      if (currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1)
      }
    } else {
      // On desktop, move to previous page (3 cards at a time)
      if (currentCardPage > 0) {
        setCurrentCardPage(currentCardPage - 1)
      }
    }
  }

  const accordionItems = [
    {
      title: 'FOOD & BEVERAGE',
      description: 'Everyday products that return something to the Earth. Simple choices that help new life take root.',
      image: FoodBeverageimage
    },
    {
      title: 'HEALTH & WELLNESS',
      description: 'Restoration with a deeper purpose. Practices rooted in nature, returning strength to both body and land.',
      image: HealthWellness
    },
    {
      title: 'HOSPITALITY',
      description: 'Retreats rooted in the rhythms of nature. Where the quiet beauty outside is cared for with every visit.',
      image: Hospitality
    },
    {
      title: 'REAL ESTATE',
      description: 'Homes and communities designed to grow with nature. Places where living with the wild feels natural again.',
      image: RealEstate
    },
    {
      title: 'RETAIL',
      description: 'Wearable reminders of the wild. Pieces that keep you connected to the places worth caring for.',
      image: Retail
    },
    {
      title: 'SPORTS',
      description: 'Fandom that fuels restoration. Tickets and seasons that grow real habitat.',
      image: Sports
    },
    {
      title: 'TRAVEL & TOURISM',
      description: 'Travel that gives back to the places we fall in love with. Journeys that leave landscapes a little healthier.',
      image: TravelTourism
    }
  ]

  const slides = [
    {
      icon: InvestforthePlanetFinancialPortfolioslog,
      title: 'Invest for the Planet',
      subtitle: 'Financial Portfolios',
      text: 'Deposits, investments, even rewards can fund reforestation, restore wetlands, or protect species. Growth isn\'t extractive, it\'s regenerative.\n\nRuya Bank created NatureProtect, linking customers\' deposits to square feet of forests protected, growing both savings and ecosystems.',
      image: InvestforthePlanetFinancialPortfoliosbackground
    },
    {
      icon: ShopforthePlanetlogo,
      title: 'Shop for the Planet',
      subtitle: 'Product Design, Innovation & Curation',
      text: 'Good design and strategy can create value for markets, and for nature.\n\nThis principle guided K. Salamoon\'s Forest Splendors collection, launched at Paris Fashion Week 2024 in partnership with Sacred Groves. Each piece is inspired by the natural world, and directly contributes to protecting it.',
      image: ShopforthePlanetbackgroundimage
    },
    {
      icon: LearnforthePlanetlogo,
      title: 'Learn for the Planet',
      subtitle: 'Eco- Education Initiatives',
      text: 'Education and learning can help conserve habitats, protect species, and regenerate ecosystems. Growth isn\'t just academic, it\'s ecological.\n\nThrough Sacred Groves Clusters, Eaton Business School and Saatchi & Saatchi – Offset Boxset: in partnership with Kinokuniya have turned learning moments into real-world habitat protection.',
      image: LearnforthePlanetbackgroundimage
    },
    {
      icon: InvestforthePlanetFinancialPortfolioslog,
      title: 'Joy for the Planet',
      subtitle: 'Nature-Led Art',
      text: 'Nature can bring joy, your brand can capitalise on that.\n\nPyaarnation, an Instagram-based art collective, does this at its own scale: every square of art sold protects a square foot of forest through Sacred Groves. A simple model with traceable impact.',
      image: JoyforthePlanetbackgroundimage
    }
  ]

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleContactClick = (index: number) => {
    setActiveButton(index)
    console.log('Contact clicked for slide:', index)
  }

  return (
    <>
      <SEO
        title={PAGE_SEO.partnershipForPlanet.title}
        description={PAGE_SEO.partnershipForPlanet.description}
        keywords={PAGE_SEO.partnershipForPlanet.keywords}
        ogImage={PAGE_SEO.partnershipForPlanet.ogImage}
        breadcrumbs={BREADCRUMBS.partnershipForPlanet}
      />

      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.heading}>
              IMAGINE<br />
              The Possibilities
            </h1>
            <p className={styles.subtext}>
              Grow your business<br />
              in partnership<br />
              with nature.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.secondSection}>
        <div className={styles.secondSectionContainer}>
          <div className={styles.logoWrapper}>
            <img
              src={TheFutureofBusinessisPoweredbyNature}
              alt="Nature icons"
              className={styles.logoImage}
            />
          </div>

          <h2 className={styles.secondHeading}>
            The Future of Business is Powered by Nature
          </h2>

          <div className={styles.secondText}>
            <p>
              The green economy isn't a trend, it's the next frontier of business growth. Partnership for the Planet helps your brand lead this transition with ideas, models, and innovations that open new markets while restoring the natural world. Together, we build solutions that strengthen your business and regenerate the planet — creating value that lasts.
            </p>
            <p>
              We invite you to co-create, invest in a living future, and spark joy for the planet we call home.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.thirdSection}>
        <h2 className={styles.thirdSectionHeading}>
          Brands that have <span className={styles.reimaginedBold}>Reimagined</span><br />
          the possibilities with us
        </h2>

        <div className={styles.sliderContainer}>
          <div
            className={styles.sliderWrapper}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles.slideLeft}>
                  <div className={styles.slideIcon}>
                    <img src={slide.icon} alt={slide.title} />
                  </div>
                  <h3 className={styles.slideTitle}>{slide.title}</h3>
                  <p className={styles.slideSubtitle}>{slide.subtitle}</p>
                  <div className={styles.slideText}>
                    {slide.text.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  <a
                    href="mailto:connect@sacredgroves.earth"
                    className={`${styles.contactButton} ${activeButton === index ? styles.active : ''}`}
                    onClick={() => handleContactClick(index)}
                  >
                    <div className={styles.contactButtonContent}>
                      <span className={styles.contactButtonText}>CONTACT US</span>
                      <div className={styles.contactButtonIcon}>
                        <img src={follow_us_icon} alt="Arrow icon" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.slideRight}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={styles.slideImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sliderDots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.fourthSection}>
        <div className={styles.container}>
          <h2 className={styles.fourthHeading}>
            <span className={styles.imagineBold}>Imagine</span> <span className={styles.possibilitiesText}>the possibilities with us</span>
          </h2>

          <div className={styles.fourthContent}>
            <div className={styles.accordionWrapper}>
              <ul className={styles.accordionList}>
                {accordionItems.map((item, idx) => (
                  <li
                    key={item.title}
                    className={`${styles.accordionItem} ${activeIndex === idx ? styles.active : ''}`}
                    onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveIndex(activeIndex === idx ? -1 : idx)}
                  >
                    <div className={styles.itemLeft}>
                      <span className={styles.itemTitle}>{item.title}</span>
                      {activeIndex === idx ? <span className={styles.toggleIcon}>−</span> : <span className={styles.toggleIcon}>+</span>}
                    </div>

                    {activeIndex === idx && (
                      <p className={styles.itemDescription}>{item.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.cardWrapper}>
              <div className={styles.cardBox}>
                <img src={accordionItems[activeIndex].image} alt={accordionItems[activeIndex].title} className={styles.cardImage} />
              </div>
            </div>
          </div>
        </div>
      </div>

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
                style={{
                  visibility: isMobile
                    ? (currentCardIndex === 0 ? 'hidden' : 'visible')
                    : (currentCardPage === 0 ? 'hidden' : 'visible')
                }}
              >
                <img src={leftarrow} alt="Previous" />
              </button>
              <button
                className={styles.recognizedNextButton}
                onClick={nextCardPage}
                style={{
                  visibility: isMobile
                    ? (currentCardIndex === recognitionCards.length - 1 ? 'hidden' : 'visible')
                    : (currentCardPage === 1 ? 'hidden' : 'visible')
                }}
              >
                <img src={rightarrow} alt="Next" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Sacred Groves is a Community Interest Company section */}
      <section className={styles.section7} style={{ backgroundImage: `url(${earth})` }}>
        <div className={styles.sec7Content}>
          <div className={styles.sec7Left}>
            <img src={TheSacredGrovesisa} className={styles.sec7Logo} alt="Sacred Groves Logo" />

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

export default PartnershipForPlanet
