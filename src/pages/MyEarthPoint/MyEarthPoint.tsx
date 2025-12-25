import React from 'react'
import './MyEarthPoint.css'
import './MyEarthPointResponsive.css'
import styles from '../PartnershipForPlanet/PartnershipForPlanet.module.css'
import { SEO } from '@/components/common/SEO'
import { PAGE_SEO, BREADCRUMBS } from '@/constants'
import { AlignedWithUNSDGs } from '@/components/common/CommonSections/CommonSections'

// section 1 images
import backgroundimageearthpoint from '@/assets/backgroundimageearthpoint.png'
import leftbackgroundimagelogos from '@/assets/leftbackgroundimagelogos.png'
import rightsidelogosimage from '@/assets/rightsidelogosimage.png'
import Reimaginetopline from '@/assets/reimaging_top_line.svg'
import cornerLine from '@/assets/small_corner_line.svg'
// section 2 images
import tigerlogo from '@/assets/tigerlogo.svg'
import line from '@/assets/line.png'
import IntroducingmyEarthPoint from '@/assets/IntroducingmyEarthPoint.svg'
import Bill from '@/assets/Bill.png'

// section 3 images
import Partnerbackgroundline from '@/assets/Partnerbackgroundline.png'
import cow from '@/assets/cow.svg'
import cowroundimageGroup from '@/assets/cowroundimageGroup.svg'
import WomanShopper from '@/assets/WomanShopper.png'
import boy from '@/assets/boy.png'
import Coupleshopper from '@/assets/Coupleshopper.png'
import bander from '@/assets/bander.png'

// section 4 images
import Reimagineyourcustomerexperience_1 from '@/assets/Reimagineyourcustomerexperience_1.svg'
import Reimagineyourcustomerexperience_2 from '@/assets/Reimagineyourcustomerexperience_2.svg'
import Reimagineyourcustomerexperience_3 from '@/assets/Reimagineyourcustomerexperience_3.svg'
import angelaGif from '@/assets/angela.gif'
import maxGif from '@/assets/max.gif'
import jiaWillGif from '@/assets/Jia_will.gif'
import bag from '@/assets/bag.svg'
import jacket from '@/assets/jacket.svg'
import Plane from '@/assets/Plane.svg'
import Hotel from '@/assets/Hotel.svg'
import Reimagineline from '@/assets/Reimagineline.png'

// section 5 images
import YourClimateActlogo from '@/assets/YourClimateActlogo.png'
import earth_arrow from '@/assets/earth_arrow.svg'
import brace_left from '@/assets/brace_left.svg'
import brace_right from '@/assets/brace_right.svg'
import earth_bottom from '@/assets/earth_bottom.svg'
import right_arrow from '@/assets/right_arrow.svg'
import storyLeftLine from '@/assets/story_left_line.svg'
import storyLeftLogo from '@/assets/story_left_logo.svg'
import storyCenterImage from '@/assets/story_center_image.svg'
import storyRightArrow from '@/assets/story_right_arrow.svg'
import storyRightIcon from '@/assets/story_right_icon.svg'
import Usingtechnology from '@/assets/Usingtechnology.svg'
import coedwing from '@/assets/coedwing.svg'
import map from '@/assets/3_forest_image.png'
import forestArrow from '@/assets/forest_arrow.svg'

// section 6 images
import nude_bg from '@/assets/nude_bg.jpg'
import Expiringmiles from '@/assets/Expiringmiles.png'
import Highproductreturns from '@/assets/Highproductreturns.png'
import PostPurchaseGuilt from '@/assets/PostPurchaseGuilt.png'
import OffseasonVacancies from '@/assets/OffseasonVacancies.png'
import expiringMileIcon from '@/assets/expiring_mile.svg'
import highProductIcon from '@/assets/high_product.svg'
import offSeasonIcon from '@/assets/off_season.svg'
import postPurchaseIcon from '@/assets/post_purchase.svg'
import nude_arrow from '@/assets/nude_arrow.svg'

// Partnership Assets
import Alexandrelogo from '@/assets/Alexandrelogo_2.svg'
import CGC_1 from '@/assets/CGC_1.svg'
import CGC_2 from '@/assets/CGC_2.svg'
import CGC_3 from '@/assets/CGC_3.svg'
import canneslions from '@/assets/canneslions.svg'
import cop_28 from '@/assets/cop_28.svg'
import village_capital from '@/assets/village_capital.svg'
import rightarrow from '@/assets/right_arrow.svg'
import leftarrow from '@/assets/left_arrow.svg'
import TheSacredGrovesisa from '@/assets/TheSacredGrovesisa.svg'
import earth from '@/assets/earth.png'

export const MyEarthPoint: React.FC = () => {
    const [currentCardPage, setCurrentCardPage] = React.useState(0)
    const [currentCardIndex, setCurrentCardIndex] = React.useState(0)
    const [isMobile, setIsMobile] = React.useState(false)

    // Recognition cards data
    const recognitionCards = [
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
    React.useEffect(() => {
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

    return (
        <>
            <SEO
                title={PAGE_SEO.myEarthPoint.title}
                description={PAGE_SEO.myEarthPoint.description}
                keywords={PAGE_SEO.myEarthPoint.keywords}
                ogImage={PAGE_SEO.myEarthPoint.ogImage}
                breadcrumbs={BREADCRUMBS.myEarthPoint}
            />

            {/* Section 1 - Hero Section */}
            <section className="card-box-container" style={{ backgroundImage: `url(${backgroundimageearthpoint})` }}>
                <div className="hero-content-wrapper">
                    <img
                        src={leftbackgroundimagelogos}
                        alt="Left side logos"
                        className="left-side-image"
                    />

                    <div className="right-side-content">
                        <h1 className="right-side-heading">
                            Introducing the<br />
                            <span className="highlight-text">World's First</span><br />
                            <span className="highlight-text">Loyalty Currency</span><br />
                            for the Climate<br />
                            Conscious.
                        </h1>
                    </div>

                    <img
                        src={rightsidelogosimage}
                        alt="Right side logos"
                        className="right-side-image"
                    />
                </div>
            </section>

            {/* Section 2 - Introducing myEarth Point */}
            <section className="section-two-container">
                <div className="section-two-content">
                    <img
                        src={line}
                        alt="Background line"
                        className="line-image"
                    />

                    <img
                        src={tigerlogo}
                        alt="Tiger logo"
                        className="tiger-logo"
                    />

                    <div className="left-content">
                        <img
                            src={IntroducingmyEarthPoint}
                            alt="Introducing myEarth Point"
                            className="left-side-logo"
                        />
                        <br />
                        <h2 className="introducing-title">
                            <span className="introducing-text">INTRODUCING</span>
                            <span className="myearth-point-text">myEarth Point</span>
                        </h2>
                        <br />


                        <p className="creating-text">
                            Creating endless<br />
                            <span className="happy-hours-text">happy hours.</span><br />
                            <span className="that-reward-text">That reward people,<br />
                                businesses, and the<br />
                                planet, with every tap,<br />
                                swipe, or checkout.</span>
                        </p>
                    </div>

                    <img
                        src={Bill}
                        alt="Bill"
                        className="bill-image"
                    />
                </div>
            </section>

            {/* Section 3 - Partner with the next-gen economy */}
            <section className="section-three-container">
                <div className="section-three-content">
                    <img
                        src={Partnerbackgroundline}
                        alt="Background line"
                        className="partner-line-image"
                    />
                    <img
                        src={cornerLine}
                        alt="Background line"
                        className="partner-line-image-2"
                    />

                    <div className="cow-container">
                        <img
                            src={cowroundimageGroup}
                            alt="Cow background"
                            className="cow-background"
                        />
                        <img
                            src={cow}
                            alt="Cow logo"
                            className="cow-logo"
                        />
                    </div>

                    <img
                        src={WomanShopper}
                        alt="Woman Shopper"
                        className="woman-shopper-image"
                    />

                    <img
                        src={boy}
                        alt="Boy"
                        className="boy-image"
                    />

                    <img
                        src={Coupleshopper}
                        alt="Couple Shopper"
                        className="couple-shopper-image"
                    />

                    <img
                        src={bander}
                        alt="Bander"
                        className="bander-image"
                    />

                    <div className="section-three-left-content">
                        <h2 className="section-three-heading">
                            Partner with the<br />
                            next-gen<br />
                            economy that<br />
                            puts nature first.
                        </h2>

                        <p className="section-three-text">
                            Half your points<br />
                            vanish each year?<br />
                            Give them a better<br />
                            job, like protecting<br />
                            habitats.
                        </p>
                    </div>

                    <div className="environmentally-conscious-text">
                        <p className="eco-text">
                            Environmentally<br />
                            Conscious<br />
                            She-conomy
                        </p>
                        <a href="https://www.bcg.com/publications/2024/trillion-dollar-opportunity-in-womens-products-and-services" target="_blank" rel="noopener noreferrer" className="eco-source">Boston Consulting Group ↗</a>
                    </div>

                    <div className="purposeful-text">
                        <p className="purpose-text">
                            Purposeful &<br />
                            Passionate<br />
                            Gen
                        </p>
                        <a href="https://www.thelancet.com/journals/lanplh/article/PIIS2542-5196(21)00278-3/fulltext" target="_blank" rel="noopener noreferrer" className="purpose-source">The Lancet ↗</a>
                    </div>

                    <div className="affluent-text">
                        <p className="affluent-main">
                            Affluent<br />
                            Sustainable<br />
                            Shopper
                        </p>
                        <a href="https://www.pwc.com/gx/en/news-room/press-releases/2024/pwc-2024-voice-of-consumer-survey.html" target="_blank" rel="noopener noreferrer" className="affluent-source">PwC ↗</a>
                    </div>
                </div>
            </section>

            {/* Section 4 - Reimagine Customer Experience */}
            <CustomerExperienceSection />

            {/* Section 5 - Customer Journey Model */}
            <section className="section-five-container">
                <div className="section-five-content">
                    <h2 className="section-five-heading">
                        Explore the myEarth Point<br />
                        customer journey model
                    </h2>

                    {/* Left Bracket */}
                    <img src={brace_left} alt="Left bracket" className="left-bracket" />

                    {/* Right Bracket */}
                    <img src={brace_right} alt="Right bracket" className="right-bracket" />

                    {/* Center Content */}
                    <div className="journey-center-content">
                        <h3 className="journey-section-title">Shop for the Planet</h3>

                        <div className="journey-steps">
                            <div className="journey-step">
                                <h4 className="step-title">Earn for<br />the Planet</h4>
                                <p className="step-description">
                                    Users can be<br />
                                    rewarded with<br />
                                    myEarth Point for<br />
                                    planet-friendly<br />
                                    choices. Works<br />
                                    with any rewards<br />
                                    system.
                                </p>
                            </div>

                            <div className="journey-step">
                                <h4 className="step-title">Reward<br />Climate<br />Action</h4>
                                <p className="step-description">
                                    You can offer two<br />
                                    layers of customer<br />
                                    rewards: instant<br />
                                    perks and points<br />
                                    that can be<br />
                                    accrued for loyalty<br />
                                    benefits.
                                </p>
                            </div>

                            <div className="journey-step">
                                <h4 className="step-title">Share the<br />Joy</h4>
                                <p className="step-description">
                                    Gamify experience<br />
                                    and improve<br />
                                    retention through<br />
                                    interactive app<br />
                                    features, badges,<br />
                                    collectibles, etc.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <img src={earth_arrow} alt="Arrow" className="journey-arrow" />

                    {/* Right Side Content */}
                    <div className="journey-right-content">
                        <img
                            src={YourClimateActlogo}
                            alt="Your Climate Act"
                            className="climate-act-logo"
                        />

                        <h3 className="climate-act-heading">
                            Your<br />
                            Climate Act
                        </h3>

                        <p className="climate-act-description">
                            Each myEarth Point<br />
                            protects a real piece<br />
                            of habitat, and<br />
                            customers can track<br />
                            their climate impact<br />
                            through interactive<br />
                            dashboards.
                        </p>
                    </div>

                    {/* Bottom Image */}
                    <img
                        src={earth_bottom}
                        alt="Earth bottom decoration"
                        className="earth-bottom-image"
                    />
                </div>
            </section>

            {/* Section 6 - Nudge Better Choices */}
            <NudgeSection />

            {/* Section 7 - People Planet Prosperity & Purpose */}
            <section className="section-seven-container">
                <div className="section-seven-about-container">
                    {/* Left Section - Text, Logo, and Line */}
                    <div className="section-seven-about-left">
                        <h2 className="section-seven-about-left-text">
                            for<br />
                            People<br />
                            Planet<br />
                            Prosperity<br />
                            & Purpose.
                        </h2>
                        <div className="section-seven-about-left-logo-wrapper">
                            <img
                                src={storyLeftLine}
                                alt="Decorative line"
                                className="section-seven-about-left-line"
                            />
                            <img
                                src={storyLeftLogo}
                                alt="Sacred Groves logo"
                                className="section-seven-about-left-logo"
                            />
                        </div>
                    </div>

                    {/* Center Section - Image */}
                    <div className="section-seven-about-center">
                        <img
                            src={storyCenterImage}
                            alt="Sacred Groves founders"
                            className="section-seven-about-center-image"
                        />
                    </div>

                    {/* Right Section - Icons, About Us Heading, and Text */}
                    <div className="section-seven-about-right">
                        <img
                            src={storyRightIcon}
                            alt="Decorative icons"
                            className="section-seven-about-right-icons"
                        />
                        <div className="section-seven-about-right-content">
                            <div className="section-seven-about-right-heading-wrapper">
                                <h3 className="section-seven-about-right-heading">About Us</h3>
                                <img
                                    src={storyRightArrow}
                                    alt="Arrow"
                                    className="section-seven-about-right-arrow"
                                />
                            </div>
                            <div className="section-seven-about-right-text">
                                <p>
                                    Sacred Groves is a <strong>Community Interest Company</strong> incorporated in the United Kingdom, reimagining business in partnership with nature — our ultimate shareholder.
                                </p>
                                <p>
                                    With Guardians in over <strong>30 countries</strong>, we protect three biodiverse habitats in the UK and Canada.
                                </p>
                                <p>
                                    By 2030, our goal is to safeguard a million acres of critical ecosystems across the planet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8 - Using technology, economics, creativity, and science, to let forests grow wild */}
            {/* Section 8 - Using technology, economics, creativity, and science, to let forests grow wild */}
            <section className="section-eight-split-section">
                <div className="section-eight-split-container">
                    {/* Left Side - Green Background */}
                    <div className="section-eight-green-section">
                        {/* Icons */}
                        <div className="section-eight-icon-row">
                            <img src={Usingtechnology} alt="Technology Icons" className="section-eight-technology-icons" />
                        </div>

                        {/* Main Heading */}
                        <div className="section-eight-content-block">
                            <h2 className="section-eight-split-heading">
                                Using technology, economics,<br />
                                creativity, and science,<br />
                                <span className="section-eight-bold-text">to let forests grow wild.</span>
                            </h2>
                        </div>

                        {/* Description Text */}
                        <div className="section-eight-text-block">
                            <p className="section-eight-paragraph">
                                Sacred Groves is a <strong>Community Interest Company</strong> <br /> incorporated in the United Kingdom, reimagining <br /> business in partnership with nature — our ultimate <br /> shareholder.
                            </p>

                            <p className="section-eight-paragraph">
                                With Guardians in over <strong>30 countries</strong>, we protect <br /> three biodiverse habitats in the UK and Canada.<br />
                                By 2030, our goal is to safeguard a million acres of <br /> critical ecosystems across the planet.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Dark Background */}
                    <div className="section-eight-dark-section">
                        {/* DESKTOP CONTENT */}
                        <div className="section-eight-desktop-content">
                            {/* National Forest Logo with Text */}
                            <div className="section-eight-forest-logo-wrapper">
                                <img src={coedwing} alt="Coedwig Genedlaethol Cymru - National Forest for Wales" className="section-eight-forest-logo" />
                                <div className="section-eight-forest-logo-text">
                                    <p className="section-eight-forest-logo-title">Coedwig<br />Genedlaethol Cymru</p>
                                    <p className="section-eight-forest-logo-subtitle">National Forest<br />for Wales</p>
                                </div>
                            </div>

                            {/* Bottom Description */}
                            <div className="section-eight-forest-description">
                                <p className="section-eight-forest-text">
                                    Once marked for private sale,<br />
                                    these forests are now a part of<br />
                                    the 'National Forest for Wales'<br />
                                    network, helping build a<br />
                                    contiguous green corridor<br />
                                    across the Welsh country.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Single Map Image Container - Absolute Positioned */}
                    <div className="section-eight-habitat-map-container">
                        <div className="section-eight-habitat-map-wrapper">
                            <img src={map} alt="Habitat Map" className="section-eight-habitat-map-full" />
                            {/* Arrows for each map section */}
                            <a
                                href="/ocean-sanctuary"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="section-eight-map-arrow"
                                style={{ left: 'calc(33.33% - 27.26px - 10px)' }}
                                aria-label="Visit Ocean Sanctuary page"
                            >
                                <img src={forestArrow} alt="Arrow" />
                            </a>
                            <a
                                href="/coed-rhyal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="section-eight-map-arrow"
                                style={{ left: 'calc(66.66% - 27.26px - 10px)' }}
                                aria-label="Visit Coed Rhyal page"
                            >
                                <img src={forestArrow} alt="Arrow" />
                            </a>
                            <a
                                href="/girgin-prysg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="section-eight-map-arrow"
                                style={{ left: 'calc(100% - 27.26px - 10px)' }}
                                aria-label="Visit Gigrin Prysg page"
                            >
                                <img src={forestArrow} alt="Arrow" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 9 - Our impact is being recognised globally */}

            {/* Section 9 - Our impact is being recognised globally (From PartnershipForPlanet) */}
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

            {/* Section 10 - The Sacred Groves is a Community Interest Company (From PartnershipForPlanet) */}
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

            {/* Section 10 - Aligned with the UN Sustainable Development Goals */}
            <div className="aligned-un-section-wrapper">
                <AlignedWithUNSDGs hideLinkedInCarousel={true} />
            </div>

        </>
    )
}

// Customer Experience Section Component
const CustomerExperienceSection: React.FC = () => {
    const [activePersona, setActivePersona] = React.useState<number>(0);

    const personas = [
        {
            id: 0,
            name: "Angela",
            title: "Luxury Shopper",
            age: "36",
            profession: "PR Consultant",
            description: "A conscious yet indecisive shopper. Loves exploring high fashion brands, seeks value and meaning, often returns purchases, and responds strongly to offers and rewards.",
            shopImage: bag,
            shopItem: "Shop",
            earnPoints: "30",
            earnLabel: "myEarth Points",
            earnIcon: "🛒",
            bonusPoints: "30",
            bonusLabel: "myEarth Points for no returns",
            bonusIcon: "+",
            redeemOffer: "10% off on the next purchase",
            redeemIcon: null,
            climateTitle: "Her Climate Act",
            temp: "6.6",
            humidity: "90",
            weather: "Partly Cloudy Weather",
            greenCover: "98.64",
            personImage: Reimagineyourcustomerexperience_1,
            centerImage: Reimagineyourcustomerexperience_1
        },
        {
            id: 1,
            name: "Max",
            title: "Deal Spotter",
            age: "26",
            profession: "Artist",
            description: "A value conscious young artist who is price-sensitive, and wants good-quality wearables without overspending. His goal is simple; make choices that align with his values. Max feels good when his everyday shopping also supports something bigger like; protecting the planet.",
            shopImage: jacket,
            shopItem: "Shop",
            earnPoints: "10",
            earnLabel: "myEarth Points",
            earnIcon: "🛒",
            bonusPoints: "5",
            bonusLabel: "myEarth Points for the next purchase",
            bonusIcon: "+",
            redeemOffer: "+5 myEarth Points for an add-on accessory",
            redeemIcon: null,
            climateTitle: "His Climate Act",
            temp: "3.7",
            humidity: "79",
            weather: "Clear Weather",
            greenCover: "80.0",
            personImage: Reimagineyourcustomerexperience_2,
            centerImage: Reimagineyourcustomerexperience_2
        },
        {
            id: 2,
            name: "Jia & Will",
            title: "Frequent Flyers",
            age: "45+",
            profession: "Bankers",
            description: "A globe trotting and impact-aware couple. Their travel begins with mindful selections. They choose low-impact conveniences like opting out of housekeeping, using shared transfers, and dining within the resort. They enjoy their journeys most when their decisions visibly reduce their footprint and contribute to conservation efforts.",
            shopImage: Plane,
            shopItem: "Shop",
            earnPoints: "100",
            earnLabel: "myEarth Points",
            earnIcon: "🛒",
            bonusPoints: "50",
            bonusLabel: "myEarth Points for the green hospitality like dining in-house, skipping house keeping etc",
            bonusIcon: "+",
            redeemOffer: "A 20% off on the next eco conscious resort booking",
            redeemIcon: Hotel,
            climateTitle: "Their Climate Act",
            temp: "9.2",
            humidity: "80",
            weather: "Cloudy Weather",
            greenCover: "99.25",
            personImage: Reimagineyourcustomerexperience_3,
            centerImage: Reimagineyourcustomerexperience_3
        }
    ];

    const currentPersona = personas[activePersona];

    // Map personas to their GIFs
    const personaGifs = [
        angelaGif,  // id: 0 - Angela
        maxGif,      // id: 1 - Max
        jiaWillGif   // id: 2 - Jia & Will
    ];

    const currentGif = personaGifs[activePersona];

    return (
        <section className="section-four-container">
            <div className="section-four-content">
                <img
                    src={Reimagineline}
                    alt="Background line"
                    className="reimagine-line-image"
                />
                <img
                    src={Reimaginetopline}
                    alt="Background line"
                    className="reimagine-line-image-2"
                />

                <h2 className="section-four-heading">
                    Reimagine your customer experience<br />
                    with myEarth Point
                </h2>

                {/* Right side persona icons */}
                <div className="persona-icons-container">
                    {personas.map((persona, index) => (
                        <div
                            key={persona.id}
                            className={`persona-icon ${activePersona === index ? 'active' : ''}`}
                            onClick={() => setActivePersona(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={persona.personImage}
                                alt={persona.name}
                                className="persona-icon-image"
                            />
                        </div>
                    ))}
                </div>

                {/* Persona GIF */}
                <img
                    src={currentGif}
                    alt={currentPersona.name}
                    className="persona-gif"
                />

                {/* Right side persona info */}
                {/* <div className="persona-info-container">
                    <h3 className="persona-info-title">{currentPersona.title}</h3>
                    <h2 className="persona-info-name">{currentPersona.name}</h2>
                    <p className="persona-info-age">Age: {currentPersona.age}</p>
                    <p className="persona-info-profession">{currentPersona.profession}</p>
                    <p className="persona-info-description">{currentPersona.description}</p>
                </div> */}
            </div>
        </section>
    );
}

// Nudge Section Component
const NudgeSection: React.FC = () => {
    const [hoveredItem, setHoveredItem] = React.useState<string | null>('expiring-miles');

    const nudgeItems = [
        {
            id: 'expiring-miles',
            title: 'Expiring Miles',
            image: Expiringmiles,
            icon: expiringMileIcon,
            description: 'Endless Rewards And Protected Habitats.',
            icons: []
        },
        {
            id: 'high-product-returns',
            title: 'High Product Returns',
            image: Highproductreturns,
            icon: highProductIcon,
            description: 'Fewer Returns And Happier Customers.',
            icons: []
        },
        {
            id: 'off-season-vacancies',
            title: 'Off-Season Vacancies',
            image: OffseasonVacancies,
            icon: offSeasonIcon,
            description: 'Filled Seasons, Fuller Forests, And Fulfilled Customers.',
            icons: []
        },
        {
            id: 'post-purchase-guilt',
            title: 'Post Purchase Guilt',
            image: PostPurchaseGuilt,
            icon: postPurchaseIcon,
            description: 'Guilt-Free Joy And Climate-Positive Action.',
            icons: []
        }
    ];

    return (
        <section
            className="section-six-container"
            style={{ backgroundImage: `url(${nude_bg})` }}
        >
            <div className="section-six-content">
                {/* Main Heading */}
                <h2 className="section-six-heading">
                    Nudge better choices<br />
                    <span className="heading-bold">for people, business, and planet</span>
                </h2>

                {/* Nudge Items List */}
                <div className="nudge-items-container">
                    {nudgeItems.map((item) => (
                        <div
                            key={item.id}
                            className={`nudge-item ${hoveredItem === item.id ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem('expiring-miles')}
                        >
                            {hoveredItem === item.id ? (
                                <div className="nudge-hover-banner">
                                    <div className="hover-banner-left">
                                        <span className="hover-banner-text">{item.title}</span>
                                    </div>
                                    <div className="hover-banner-arrow">
                                        <img src={nude_arrow} alt="Arrow" className="nude-arrow-icon" />
                                    </div>
                                    <div className="hover-banner-center">
                                        <span className="hover-banner-text">{item.description}</span>
                                    </div>
                                    <div className="hover-banner-right">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="hover-banner-image"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <span className="nudge-item-text">{item.title}</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Build Model Section */}
                <div className="section-six-bottom-content">
                    <h2 className="build-model-heading">
                        Build your myEarth Point Model
                    </h2>
                    <p className="impact-text">Impact starts at £0.03 per myEarth Point</p>
                    <a href="mailto:connect@sacredgroves.earth" className="contact-us-button">
                        CONTACT US
                        <img src={right_arrow} alt="Arrow" className="contact-us-arrow" />
                    </a>
                </div>
            </div>
        </section>
    );
}