import React from 'react'
import { SEO } from '@/components/common/SEO'
import { PAGE_SEO, BREADCRUMBS } from '@/constants'
import styles from './OurSacredGroves.module.css'
import ourGrovesHeroBg from '@/assets/our_goves_hero_bg.svg'
import ourGrovesHero from '@/assets/our_groves_hero.svg'
import { FadeInSection } from '@/components/common/FadeInSection/FadeInSection'
import { RecognizedGlobally } from '@/pages/RecognizedGlobally/RecognizedGlobally'
import Usingtechnology from '@/assets/Usingtechnology.svg'
import coedwing from '@/assets/coedwing.svg'
import threeForestImage from '@/assets/3_forest_image.png'
import forestArrow from '@/assets/forest_arrow.svg'
import artScienceIconLeft from '@/assets/art_science_icon_left.svg'
import artScienceLeft from '@/assets/art_science_left.svg'
import artScienceRight from '@/assets/art_science_right.svg'
import unLeftImage from '@/assets/UN_left_image.svg'
import unRightIcon from '@/assets/UN_right_icon.svg'
import TheSacredGrovesisa from '@/assets/TheSacredGrovesisa.svg'
import earth from '@/assets/earth.png'
// import videCoedLeft from '@/assets/video_coed_left.svg'
// import videCoedRight from '@/assets/vide_coed_right.svg'
// import osVideo from '@/assets/OS.mov'
// import playIcon from '@/assets/play.svg'
import { AlignedWithUNSDGs } from '@/components/common/CommonSections/CommonSections'

export const OurSacredGroves: React.FC = () => {
    // const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false)
    // const videoRef = React.useRef<HTMLVideoElement>(null)

    // Toggle video play/pause
    // const handleToggleVideo = () => {
    //     if (videoRef.current) {
    //         if (isVideoPlaying) {
    //             videoRef.current.pause()
    //         } else {
    //             videoRef.current.play()
    //         }
    //     }
    // }

    // Handle video events
    // const handleVideoPlay = () => {
    //     setIsVideoPlaying(true)
    // }

    // const handleVideoPause = () => {
    //     setIsVideoPlaying(false)
    // }
    return (
        <>
            <SEO
                title={PAGE_SEO.ourSacredGroves.title}
                description={PAGE_SEO.ourSacredGroves.description}
                keywords={PAGE_SEO.ourSacredGroves.keywords}
                ogImage={PAGE_SEO.ourSacredGroves.ogImage}
                breadcrumbs={BREADCRUMBS.ourSacredGroves}
            />

            <div className={styles.pageWrapper}>
                <section className={styles.heroSection} style={{ backgroundImage: `url(${ourGrovesHeroBg})` }}>
                    <div className={styles.heroContent}>
                        <img src={ourGrovesHero} alt="The habitats we protect" className={styles.heroImage} />
                        <p className={styles.heroBottomText}>Ocean Sanctuary, Nova Scotia, Canada | Location: 44.8033° N, 62.8877° W</p>
                    </div>
                </section>

                {/* Split Section - Using technology, economics, creativity, and science, to let forests grow wild */}
                <FadeInSection>
                    <section className={styles.splitSection}>
                        <div className={styles.splitContainer}>
                            {/* Left Side - Green Background */}
                            <div className={styles.greenSection}>
                                {/* Icons */}
                                <div className={styles.iconRow}>
                                    <img src={Usingtechnology} alt="Technology Icons" className={styles.technologyIcons} />
                                </div>

                                {/* Main Heading */}
                                <div className={styles.contentBlock}>
                                    <h2 className={styles.splitHeading}>
                                        Using technology, economics,<br />
                                        creativity, and science,<br />
                                        <span className={styles.boldText}>to let forests grow wild.</span>
                                    </h2>
                                </div>

                                {/* Description Text */}
                                <div className={styles.textBlock}>
                                    <p className={styles.paragraph}>
                                        Sacred Groves is a <strong>Community Interest Company</strong> <br /> incorporated in the United Kingdom, reimagining <br /> business in partnership with nature — our ultimate <br /> shareholder.
                                    </p>

                                    <p className={styles.paragraph}>
                                        With Guardians in over <strong>30 countries</strong>, we protect <br /> three biodiverse habitats in the UK and Canada.<br />
                                        By 2030, our goal is to safeguard a million acres of <br /> critical ecosystems across the planet.
                                    </p>
                                </div>
                            </div>

                            {/* Right Side - Dark Background */}
                            <div className={styles.darkSection}>
                                {/* DESKTOP CONTENT */}
                                <div className={styles.desktopContent}>
                                    {/* National Forest Logo with Text */}
                                    <div className={styles.forestLogoWrapper}>
                                        <img src={coedwing} alt="Coedwig Genedlaethol Cymru - National Forest for Wales" className={styles.forestLogo} />
                                        <div className={styles.forestLogoText}>
                                            <p className={styles.forestLogoTitle}>Coedwig<br />Genedlaethol Cymru</p>
                                            <p className={styles.forestLogoSubtitle}>National Forest<br />for Wales</p>
                                        </div>
                                    </div>

                                    {/* Bottom Description */}
                                    <div className={styles.forestDescription}>
                                        <p className={styles.forestText}>
                                            Once marked for private sale, these forests are now a part of the 'National Forest for Wales' network, helping build a contiguous green corridor across the Welsh country.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Single Image showing all 3 habitats - Positioned Absolute (DESKTOP ONLY) */}
                            <div className={styles.habitatMapContainer}>
                                <div className={styles.habitatMapWrapper}>
                                    <img src={threeForestImage} alt="Sacred Groves Habitats" className={styles.habitatMapFull} />
                                    {/* Arrows for each map section */}
                                    <a
                                        href="/ocean-sanctuary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.mapArrow}
                                        style={{ left: 'calc(33.33% - 27.26px - 10px)' }}
                                        aria-label="Visit Ocean Sanctuary page"
                                    >
                                        <img src={forestArrow} alt="Arrow" />
                                    </a>
                                    <a
                                        href="/coed-rhyal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.mapArrow}
                                        style={{ left: 'calc(66.66% - 27.26px - 10px)' }}
                                        aria-label="Visit Coed Rhyal page"
                                    >
                                        <img src={forestArrow} alt="Arrow" />
                                    </a>
                                    <a
                                        href="/girgin-prysg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.mapArrow}
                                        style={{ left: 'calc(100% - 27.26px - 10px)' }}
                                        aria-label="Visit Gigrin Prysg page"
                                    >
                                        <img src={forestArrow} alt="Arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeInSection>

                {/* Art and Science of Conservation Section */}
                <FadeInSection>
                    <section className={styles.artScienceSection}>
                        <div className={styles.artScienceContainer}>
                            {/* Left Column */}
                            <div className={styles.artScienceLeft}>
                                <img src={artScienceIconLeft} alt="Conservation Icon" className={styles.artScienceIcon} />
                                <h2 className={styles.artScienceHeading}>
                                    The Art and Science of<br />
                                    Conservation
                                </h2>
                                <div className={styles.artScienceTextBlock}>
                                    <p className={styles.artScienceParagraph}>
                                        Conservation blends art and science, ecological expertise with local wisdom, traditional knowledge with modern technology.
                                    </p>
                                    <p className={styles.artScienceParagraph}>
                                        At Sacred Groves, we bring these together to restore balance and let life flourish.
                                    </p>
                                    <p className={styles.artScienceParagraph}>
                                        Guided by Assisted Natural Regeneration, we help habitats regain their strength through tailored interventions for forests, wetlands, grasslands, and water bodies.
                                    </p>
                                </div>
                                <div className={styles.advisorSection}>
                                    <img src={artScienceLeft} alt="Dr. Arvind Kumar Jha" className={styles.advisorImage} />
                                    <p className={styles.advisorText}>
                                        Our Forest Management Plans are developed in consultation with our forestry advisor, Dr. Arvind Kumar Jha, outlining a long-term roadmap for recovery.
                                    </p>
                                </div>
                            </div>

                            {/* Middle Column - The Restorative Continuum List */}
                            <div className={styles.artScienceMiddle}>
                                <div className={styles.continuumList}>
                                    <div className={styles.continuumItem}>
                                        <span className={styles.continuumBold}>Reducing</span><br />
                                        Societal<br />
                                        Impacts
                                        <hr className={styles.continuumItemHr} />
                                    </div>
                                    <div className={styles.continuumItem}>
                                        <span className={styles.continuumBold}>Improving</span><br />
                                        Ecosystem<br />
                                        Management
                                        <hr className={styles.continuumItemHr} />
                                    </div>
                                    <div className={styles.continuumItem}>
                                        <span className={styles.continuumBold}>Repairing</span><br />
                                        Ecosystem<br />
                                        Function
                                        <hr className={styles.continuumItemHr} />
                                    </div>
                                    <div className={styles.continuumItem}>
                                        <span className={styles.continuumBold}>Initiating</span><br />
                                        Native<br />
                                        Recovery
                                        <hr className={styles.continuumItemHr} />
                                    </div>
                                    <div className={styles.continuumItem}>
                                        <span className={styles.continuumBold}>Partially</span><br />
                                        Recovering<br />
                                        Native<br />
                                        Ecosystems
                                        <hr className={styles.continuumItemHr} />
                                    </div>
                                    <div className={styles.continuumItem}>
                                        <span className={styles.continuumBold}>Fully</span><br />
                                        Recovering<br />
                                        Native<br />
                                        Ecosystems
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Heading and Image */}
                            <div className={styles.artScienceRight}>
                                <h2 className={styles.restorativeHeading}>
                                    The Restorative<br />
                                    Continuum
                                </h2>
                                <img src={artScienceRight} alt="Restorative Continuum" className={styles.continuumImage} />
                            </div>
                        </div>
                    </section>
                </FadeInSection>

                {/* UN Section */}
                <FadeInSection>
                    <section className={styles.unSection}>
                        <div className={styles.unContainer}>
                            {/* Left Section - Image */}
                            <div className={styles.unLeft}>
                                <img src={unLeftImage} alt="UN" className={styles.unLeftImage} />
                            </div>

                            {/* Right Section - Icon and Text */}
                            <div className={styles.unRight}>
                                <img src={unRightIcon} alt="UN Icon" className={styles.unRightIcon} />
                                <div className={styles.unTextBlock}>
                                    <h2 className={styles.unHeading}>
                                        UN SDG 15, Life on Land
                                    </h2>
                                    <p className={styles.unText}>
                                        Our approach is aligned with UN SDG 15 (Life on<br />
                                        Land) and the objectives of the United Nations<br />
                                        Decade on Ecosystem Restoration (2021–2030).<br />
                                        But our deeper ethos goes beyond frameworks: to<br />
                                        ensure that forests, rivers, and species remain part<br />
                                        of our living world - not just our history.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeInSection>

                {/* Built with Wild Tech Section */}
                <RecognizedGlobally
                    showWildTech={true}
                    hideLinkedInCarousel={true}
                    hideSealOfTrust={true}
                    hideYouCanDoSomething={true}
                    showRecognitionAfterWildTech={true}
                    hideAlignedWithUN={true}
                />

                {/* The Sacred Groves is a Community Interest Company Section */}
                <FadeInSection>
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
                </FadeInSection>

                {/* Section 6 - Video Icons Section */}
                {/* <FadeInSection>
                    <section className={styles.section6}>
                        <div className={styles.section6Container}>
                            <img src={videCoedLeft} alt="Video Icon Left" className={styles.section6IconLeft} />
                            <div className={styles.section6Center} onClick={handleToggleVideo}>
                                <video
                                    ref={videoRef}
                                    className={styles.section6Video}
                                    loop
                                    playsInline
                                    onPlay={handleVideoPlay}
                                    onPause={handleVideoPause}
                                >
                                    <source src={osVideo} type="video/quicktime" />
                                    <source src={osVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                {!isVideoPlaying && (
                                    <button
                                        className={styles.playButton}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleToggleVideo()
                                        }}
                                        aria-label="Play video"
                                    >
                                        <img src={playIcon} alt="Play" className={styles.playIcon} />
                                    </button>
                                )}
                            </div>
                            <img src={videCoedRight} alt="Video Icon Right" className={styles.section6IconRight} />
                        </div>
                    </section>
                </FadeInSection> */}

                {/* Aligned with UN SDGs Section */}
                <AlignedWithUNSDGs hideLinkedInCarousel={true} showMobileCarousel={true} />
            </div>
        </>
    )
}
