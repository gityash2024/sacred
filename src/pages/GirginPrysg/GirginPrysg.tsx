import React, { useState, useEffect } from 'react'
import { SEO } from '@/components/common/SEO'
import { PAGE_SEO, BREADCRUMBS } from '@/constants'
import { FadeInSection } from '@/components/common/FadeInSection/FadeInSection'
import styles from './GirginPrysg.module.css'
import girginBg from '@/assets/girgin_bg.svg'
import coedSec2IconLeft from '@/assets/coed_sec_2_icon_left.svg'
// import coedSec2Right from '@/assets/coes_sec_2_right.svg' // Replaced with map iframe
import coedSection3Bg from '@/assets/coed_section_3_bg.svg'
import girginSec3Center from '@/assets/girgin_sec_3_center.png'
import coedSec3Card from '@/assets/coed_sec_3_card.svg'
import girginGridLeft1 from '@/assets/girgin_grid_left_1.svg'
import girginGridLeft2 from '@/assets/girgin_grid_left_2.svg'
import girginGridLeft3 from '@/assets/girgin_grid_left_3.svg'
import girginGridRight1 from '@/assets/girgin_grid_right_1.svg'
import girginGridRight2 from '@/assets/girgin_grid_right_2.svg'
import girginSec5Left1 from '@/assets/girgin_sec_5_left_1.svg'
import sec5CarouselCard1 from '@/assets/girgin_sec_5_corousel_card_1.svg'
import sec5CarouselCard2 from '@/assets/girgin_sec_5_corousel_card_2.svg'
import sec5CarouselCard3 from '@/assets/girgin_sec_5_corousel_card_3.svg'
import sec5CarouselCard4 from '@/assets/girgin_sec_5_corousel_card_4.svg'
import sec5CarouselCard5 from '@/assets/girgin_sec_5_corousel_card_5.svg'
import sec5CarouselLeftArrow from '@/assets/sec_5_corousel_left_arrow.svg'
import sec5CarouselRightArrow from '@/assets/sec_5_corousel_right_arrow.svg'
import storyIcon1 from '@/assets/story_icon_1.svg'
import storyIcon2 from '@/assets/story_icon_2.svg'
import storyIcon3 from '@/assets/story_icon_3.svg'
import storyIcon4 from '@/assets/story_icon_4.svg'
import storyIcon5 from '@/assets/story_icon_5.svg'
import videCoedLeft from '@/assets/video_coed_left.svg'
import videCoedRight from '@/assets/vide_coed_right.svg'
import gpVideo from '@/assets/GP.mov'
import playIcon from '@/assets/play.svg'
import { AlignedWithUNSDGs } from '@/components/common/CommonSections/CommonSections'
import { ImageModal } from '@/components/common/ImageModal'

// Slot widths based on Figma design - vertical stripes in gallery bar
const SLOT_WIDTHS = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42]

export const GirginPrysg: React.FC = () => {
    // Story icons array
    const storyIcons = [storyIcon1, storyIcon2, storyIcon3, storyIcon4, storyIcon5]

    // Generate random icons for each card
    const getRandomIcon = () => storyIcons[Math.floor(Math.random() * 5)]

    // Carousel cards - only 5 cards, no repetition
    const carouselCards = [
        { image: sec5CarouselCard1, text: 'Woodland overview', icon: getRandomIcon() },
        { image: sec5CarouselCard2, text: 'Heather', icon: getRandomIcon() },
        { image: sec5CarouselCard3, text: 'Dense foliage', icon: getRandomIcon() },
        { image: sec5CarouselCard4, text: 'Woodland stream', icon: getRandomIcon() },
        { image: sec5CarouselCard5, text: 'National Forest for Wales Signboard', icon: getRandomIcon() }
    ]

    // Use the same 5 carousel images for the gallery
    const GALLERY_IMAGES = carouselCards.map(card => card.image)

    // Initialize each slot with a different starting image index
    const initializeSlotImages = () => {
        const numSlots = 6
        const numImages = GALLERY_IMAGES.length
        return Array.from({ length: numSlots }, (_, index) => index % numImages)
    }

    const [slotImages, setSlotImages] = useState<number[]>(initializeSlotImages())
    const [activeYear, setActiveYear] = useState<number>(2025)
    const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false)
    const videoRef = React.useRef<HTMLVideoElement>(null)
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)
    const [heroBackgroundImage, setHeroBackgroundImage] = useState<string>(girginBg) // Default to initial background

    const years = [2025, 2024, 2023, 2022, 2021]

    // Since we only have 5 cards and want to show all 5, arrows can be disabled or do nothing
    const nextCarousel = () => {
        // All 5 cards are always visible, so no movement needed
    }

    const prevCarousel = () => {
        // All 5 cards are always visible, so no movement needed
    }

    // Toggle video play/pause
    const handleToggleVideo = () => {
        if (videoRef.current) {
            if (isVideoPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
        }
    }

    // Handle video events
    const handleVideoPlay = () => {
        setIsVideoPlaying(true)
    }

    const handleVideoPause = () => {
        setIsVideoPlaying(false)
    }

    // Handle fullscreen
    const handleFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen()
            } else if ((videoRef.current as any).webkitRequestFullscreen) {
                (videoRef.current as any).webkitRequestFullscreen()
            } else if ((videoRef.current as any).mozRequestFullScreen) {
                (videoRef.current as any).mozRequestFullScreen()
            } else if ((videoRef.current as any).msRequestFullscreen) {
                (videoRef.current as any).msRequestFullscreen()
            }
        }
    }

    // Handle slot click - set the clicked image as hero background
    const handleSlotClick = (imageIndex: number) => {
        setHeroBackgroundImage(GALLERY_IMAGES[imageIndex])
    }

    // Auto-cycle all slots together every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setSlotImages((prev) => {
                // Cycle all slots to the next image at the same time
                return prev.map((imageIndex) => (imageIndex + 1) % GALLERY_IMAGES.length)
            })
        }, 4000)

        return () => {
            clearInterval(interval)
        }
    }, [GALLERY_IMAGES.length])

    return (
        <>
            <SEO
                title={PAGE_SEO.girginPrysg.title}
                description={PAGE_SEO.girginPrysg.description}
                keywords={PAGE_SEO.girginPrysg.keywords}
                ogImage={PAGE_SEO.girginPrysg.ogImage}
                breadcrumbs={BREADCRUMBS.girginPrysg}
            />

            <div className={styles.pageWrapper}>
                <section className={styles.heroSection} style={{ backgroundImage: `url(${heroBackgroundImage})` }}>
                    <div className={styles.heroContainer}>
                        {/* Motion Gallery Bar - Bottom aligned */}
                        <div className={styles.galleryBar}>
                            <div className={styles.galleryBarLeft}>
                                <span className={styles.galleryBarLabel}>Woodland overview</span>
                            </div>
                            <div className={styles.galleryBarCenter}>
                                {slotImages.map((imageIndex, slotIndex) => (
                                    <div
                                        key={slotIndex}
                                        className={styles.gallerySlot}
                                        style={{
                                            width: `${SLOT_WIDTHS[slotIndex % SLOT_WIDTHS.length]}px`,
                                            backgroundImage: `url(${GALLERY_IMAGES[imageIndex]})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                        onClick={() => handleSlotClick(imageIndex)}
                                    />
                                ))}
                            </div>
                            <div className={styles.galleryBarRight}>
                                <span className={styles.galleryBarArrow}>→</span>
                                <span className={styles.galleryBarTitle}>Girgin Prysg</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
                <FadeInSection>
                    <section className={styles.section2}>
                        <div className={styles.section2Container}>
                            {/* Left Section - Text with Icon */}
                            <div className={styles.section2Left}>
                                <a
                                    href="https://www.gov.wales/visit-national-forest-wales#159116"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={coedSec2IconLeft} alt="Girgin Prysg Icon" className={styles.section2Icon} />
                                </a>
                                <div className={styles.section2Text}>
                                    <p className={styles.section2Para}>
                                        Just south of Rhayader, Gigrin Prysg stretches across a gentle mid-Wales slope where woodland meets open valley light. The land rises quietly toward Gwastedyn Hill, creating a natural shelter that softens wind and draws the afternoon sun across the trees. The ground is shaped by shallow dips, mossed banks, and fern-lined paths that follow the curve of the hillside.
                                    </p>
                                    <p className={styles.section2Para}>
                                        A clear stream moves through the lower edge, cutting a cool line between the woodland and the views that open toward the town and the surrounding valleys.
                                    </p>
                                    <p className={styles.section2Para}>
                                        Gigrin Prysg carries the calm, grounded feel of this region; a mix of upland openness and woodland depth, held together by the steady rhythm of the landscape. It is a place that feels both rooted and expansive, shaped by contour, light, and the quiet slopes of mid Wales.
                                    </p>
                                </div>
                            </div>

                            {/* Right Section - Map */}
                            <div className={styles.section2Right}>
                                <iframe
                                    src={`${(import.meta.env.VITE_API_URL || 'https://outshade.sacredgroves.earth').replace(/\/$/, '')}/api/sutra/map/forest?forest_id=UNI_GIGR_00001&iframe_height=820&iframe_width=708&zoom_start=3`}
                                    frameBorder="0"
                                    className={styles.section2Map}
                                    allowFullScreen
                                    title="Gigrin Prysg Map"
                                />
                            </div>
                        </div>
                    </section>
                </FadeInSection>

                {/* Section 3 */}
                <FadeInSection>
                    <section className={styles.section3} style={{ backgroundImage: `url(${coedSection3Bg})` }}>
                        <div className={styles.section3Container}>
                            {/* Top Section - Text */}
                            <div className={styles.section3Top}>
                                <div className={styles.section3TopText}>
                                    <p className={styles.section3Text}>
                                        Listed for private sale, Gigrin Prysg was acquired by Sacred Groves in February 2021, for conservation. In July 2024, Gigrin Prysg became a part of the 'National Forest for Wales' network, as a recognition by the Government of Wales, UK, for the precious ecosystem services provided to the community.
                                    </p>
                                    <p className={styles.section3Text}>
                                        <span className={styles.section3TextBold}>Gigrin Prysg is an ancient mature woodland.</span> The anthropogenic impact has been mitigated via a freehold purchase that protects it from any further commercial exploitation.
                                    </p>
                                </div>
                            </div>

                            {/* Center Image */}
                            <div className={styles.centerImageWrapper}>
                                <img src={girginSec3Center} alt="Girgin Prysg Center" className={styles.centerImage} />
                            </div>

                            {/* UN SDG Section */}
                            <div className={styles.section3Middle}>
                                <p className={styles.section3TextSmall}>
                                    The full recovery of this native ecosystem is being advanced through a natural regeneration approach.
                                </p>
                                <p className={styles.section3TextSmall}>
                                    This approach is in line with the ethos of (United Nations Sustainable Development Goals) UN SDG 15 and also serves the objectives of the United Nations Decade on Ecosystem Restoration (2021–2030).
                                </p>
                            </div>

                            {/* Bottom Section with Card */}
                            <div className={styles.section3Bottom}>
                                <img src={coedSec3Card} alt="15 LIFE ON LAND" className={styles.section3CardImage} />
                                <div className={styles.section3BottomTextWrapper}>
                                    <p className={styles.section3BottomText}>
                                        Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification and halt and reverse land degradation and halt biodiversity loss.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeInSection>

                {/* Section 4 - Grid Layout */}
                <FadeInSection>
                    <section className={styles.section4}>
                        <div className={styles.section4Container}>
                            {/* Top Left - Images with Text */}
                            <div className={styles.gridItem}>
                                <div className={styles.gridLeftImages}>
                                    {/* Top - RED KITE */}
                                    <div className={styles.gridLeftImagesTop}>
                                        <div className={styles.gridImageWrapper}>
                                            <img src={girginGridLeft2} alt="Red Kite" className={styles.gridImage} />
                                            <div className={styles.gridLabel}>RED KITE</div>
                                        </div>
                                    </div>
                                    {/* Bottom - OAK TREE and BADGER */}
                                    <div className={styles.gridLeftImagesBottom}>
                                        <div className={styles.gridImageWrapper}>
                                            <img src={girginGridLeft1} alt="Oak Tree" className={styles.gridImage} />
                                            <div className={styles.gridLabel}>OAK TREE</div>
                                        </div>
                                        <div className={styles.gridImageWrapper}>
                                            <img src={girginGridLeft3} alt="Badger" className={styles.gridImage} />
                                            <div className={styles.gridLabel}>BADGER</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Top Right - Text */}
                            <div className={styles.gridItem}>
                                <p className={styles.gridTextRight}>
                                    Gigrin Prysg is situated half-a-mile south of the busy market town of Rhayader, Powys. Many bird species frequent this lovely oak wood in a scenic region of mid Wales. Sightings include buzzard, sparrow hawk, cuckoo, tree creeper, lesser and greater spotted woodpecker and many others. The woodland has a sunny westerly aspect at the foot of Gwastedyn Hill.
                                </p>
                            </div>

                            {/* Bottom Left - Text */}
                            <div className={styles.gridItem}>
                                <p className={styles.gridTextLeft}>
                                    From the wood there are stunning far-reaching views across Rhayader and towards the nearby Elan Valley. There is a beautiful stream running through this woodland of predominantly sessile oak with occasional regeneration of holly, hazel, ash and rowan on the lower slopes and birch, sycamore, and ash on the upper slopes.
                                </p>
                            </div>

                            {/* Bottom Right - Image with Text */}
                            <div className={styles.gridItem}>
                                <div className={styles.gridRightImages}>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={girginGridRight1} alt="Honeysuckle Climbers" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>HONEYSUCKLE CLIMBERS</div>
                                    </div>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={girginGridRight2} alt="Hard Shield Fern" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>HARD SHIELD FERN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeInSection>

                {/* Section 5 */}
                <FadeInSection>
                    <section className={styles.section5}>
                        <div className={styles.section5Container}>
                            {/* First Half - Images and Text */}
                            <div className={styles.section5FirstHalf}>
                                <div className={styles.section5Left}>
                                    <div className={styles.section5LeftImageWrapper}>
                                        <img src={girginSec5Left1} alt="Peregrine Falcon" className={styles.section5LeftImage} />
                                        <div className={styles.section5LeftImageLabel}>PEREGRINE<br />FALCON</div>
                                    </div>
                                </div>
                                <div className={styles.section5Right}>
                                    <p className={styles.section5RightText}>
                                        The woodland flora community includes scaly male fern, hard shield fern, bilberry, heather and a rich diversity of mosses and lichens such as wood bristle-moss, rusty feather-moss, and old man's beard lichen. Over the years, many such ancient woodlands have been lost to commercial activities. We are privileged to support this beautiful natural habitat for the further benefit of the local community and environment.
                                    </p>
                                </div>
                            </div>

                            {/* Second Half - Year Tabs and Carousel */}
                            <div className={styles.section5SecondHalf}>
                                {/* Year Tabs */}
                                <div className={styles.yearTabs}>
                                    {years.map((year) => (
                                        <button
                                            key={year}
                                            className={`${styles.yearTab} ${activeYear === year ? styles.yearTabActive : ''}`}
                                            onClick={() => setActiveYear(year)}
                                        >
                                            {year}
                                        </button>
                                    ))}
                                </div>

                                {/* Carousel */}
                                <div className={styles.carouselWrapper}>
                                    <button className={styles.carouselArrow} onClick={prevCarousel}>
                                        <img src={sec5CarouselLeftArrow} alt="Previous" />
                                    </button>

                                    <div className={styles.carouselContainer}>
                                        <div className={styles.carouselTrack}>
                                            {carouselCards.map((card, index) => (
                                                <div key={index} className={styles.carouselCard}>
                                                    <img
                                                        src={card.image}
                                                        alt={card.text}
                                                        className={styles.carouselCardImage}
                                                        onClick={() => setSelectedImage({ src: card.image, title: card.text })}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                    <div className={styles.carouselCardContent}>
                                                        <p className={styles.carouselCardText}>{card.text}</p>
                                                        <img src={card.icon} alt="Icon" className={styles.carouselCardIcon} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button className={styles.carouselArrow} onClick={nextCarousel}>
                                        <img src={sec5CarouselRightArrow} alt="Next" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeInSection>

                {/* Section 6 - Video Icons Section */}
                <FadeInSection>
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
                                    <source src={gpVideo} type="video/quicktime" />
                                    <source src={gpVideo} type="video/mp4" />
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
                                <button
                                    className={styles.fullscreenButton}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleFullscreen()
                                    }}
                                    aria-label="Fullscreen"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <img src={videCoedRight} alt="Video Icon Right" className={styles.section6IconRight} />
                        </div>
                    </section>
                </FadeInSection>

                {/* Aligned with UN SDGs Section */}
                <AlignedWithUNSDGs hideLinkedInCarousel={true} />
            </div>

            {/* Image Modal */}
            <ImageModal
                isOpen={selectedImage !== null}
                onClose={() => setSelectedImage(null)}
                imageSrc={selectedImage?.src || ''}
                imageTitle={selectedImage?.title || ''}
            />
        </>
    )
}
