import React, { useState, useEffect } from 'react'
import { SEO } from '@/components/common/SEO'
import { PAGE_SEO, BREADCRUMBS } from '@/constants'
import { FadeInSection } from '@/components/common/FadeInSection/FadeInSection'
import styles from './CoedRhyal.module.css'
import coedBg from '@/assets/coed_bg.svg'
import coedSec2IconLeft from '@/assets/coed_sec_2_icon_left.svg'
// import coedSec2Right from '@/assets/coes_sec_2_right.svg' // Replaced with map iframe
import coedSection3Bg from '@/assets/coed_section_3_bg.svg'
import coedSec3Center from '@/assets/coed_sec_3_center.png'
import coedSec3Card from '@/assets/coed_sec_3_card.svg'
import gridLeft1 from '@/assets/grid_left_1.svg'
import gridLeft2 from '@/assets/grid_left_2.svg'
import gridRight1 from '@/assets/grid_right_1.svg'
import gridRight2 from '@/assets/grid_right_2.svg'
import sec5Left1 from '@/assets/sec_5_left_1.svg'
import sec5Left2 from '@/assets/sec_5_left_2.svg'
import sec5CarouselCard1 from '@/assets/sec_5_corousel_card_1.svg'
import sec5CarouselCard2 from '@/assets/sec_5_corousel_card_2.svg'
import sec5CarouselCard3 from '@/assets/sec_5_corousel_card_3.svg'
import sec5CarouselCard4 from '@/assets/sec_5_corousel_card_4.svg'
import sec5CarouselCard5 from '@/assets/sec_5_corousel_card_5.svg'
import sec5CarouselLeftArrow from '@/assets/sec_5_corousel_left_arrow.svg'
import sec5CarouselRightArrow from '@/assets/sec_5_corousel_right_arrow.svg'
import storyIcon1 from '@/assets/story_icon_1.svg'
import storyIcon2 from '@/assets/story_icon_2.svg'
import storyIcon3 from '@/assets/story_icon_3.svg'
import storyIcon4 from '@/assets/story_icon_4.svg'
import storyIcon5 from '@/assets/story_icon_5.svg'
import videCoedLeft from '@/assets/video_coed_left.svg'
import videCoedRight from '@/assets/vide_coed_right.svg'
import crVideo from '@/assets/OS.mov'
import playIcon from '@/assets/play.svg'
import { AlignedWithUNSDGs } from '@/components/common/CommonSections/CommonSections'
import { ImageModal } from '@/components/common/ImageModal'

// Slot widths based on Figma design - vertical stripes in gallery bar
const SLOT_WIDTHS = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42]

export const CoedRhyal: React.FC = () => {
    // Story icons array
    const storyIcons = [storyIcon1, storyIcon2, storyIcon3, storyIcon4, storyIcon5]

    // Generate random icons for each card
    const getRandomIcon = () => storyIcons[Math.floor(Math.random() * 5)]

    // Carousel cards - only 5 cards, no repetition
    const carouselCards = [
        { image: sec5CarouselCard1, text: 'Acorns', icon: getRandomIcon() },
        { image: sec5CarouselCard2, text: 'Veteran Oak', icon: getRandomIcon() },
        { image: sec5CarouselCard3, text: 'Ferns growing on oak', icon: getRandomIcon() },
        { image: sec5CarouselCard4, text: 'National Forest for Wales Signboard', icon: getRandomIcon() },
        { image: sec5CarouselCard5, text: 'Yellow Fairy Cups fungus', icon: getRandomIcon() }
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
    const [currentSlide, setCurrentSlide] = useState(0) // Carousel state
    const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false)
    const videoRef = React.useRef<HTMLVideoElement>(null)
    const carouselContainerRef = React.useRef<HTMLDivElement>(null)
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)
    const [heroBackgroundImage, setHeroBackgroundImage] = useState<string>(coedBg) // Default to initial background

    const years = [2025, 2024, 2023, 2022, 2021]

    // Carousel navigation logic
    const nextCarousel = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselCards.length)
    }

    const prevCarousel = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselCards.length) % carouselCards.length)
    }

    // Reset slide on resize if needed (optional, but good practice to avoid stuck slides on desktop if switch)
    // For now, CSS handles desktop (no transform), so mobile transform won't affect desktop visual
    // unless the transform is applied inline always. We'll use a CSS variable or conditional style.

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

    // Reset carousel scroll position on mount (mobile fix)
    useEffect(() => {
        if (carouselContainerRef.current) {
            carouselContainerRef.current.scrollLeft = 0
        }
    }, [])

    return (
        <>
            <SEO
                title={PAGE_SEO.coedRhyal.title}
                description={PAGE_SEO.coedRhyal.description}
                keywords={PAGE_SEO.coedRhyal.keywords}
                ogImage={PAGE_SEO.coedRhyal.ogImage}
                breadcrumbs={BREADCRUMBS.coedRhyal}
            />

            <div className={styles.pageWrapper}>
                <section className={styles.heroSection} style={{ backgroundImage: `url(${heroBackgroundImage})` }}>
                    <div className={styles.heroContainer}>
                        {/* Motion Gallery Bar - Bottom aligned */}
                        <div className={styles.galleryBar}>
                            <div className={styles.galleryBarLeft}>
                                <span className={styles.galleryBarLabel}>Veteran Oak</span>
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
                                <span className={styles.galleryBarTitle}>Coed Rhyal</span>
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
                                    <img src={coedSec2IconLeft} alt="Coed Rhyal Icon" className={styles.section2Icon} />
                                </a>
                                <div className={styles.section2Text}>

                                    <p className={styles.section2Para}>
                                        Coed Rhyal rests on a quiet northwest slope overlooking Carmarthen Bay — 13.33 acres where time slows and nature finds its rhythm again. Just beyond Burry Port, this old oak woodland bursts into a bluebell sea each spring, a soft reminder of renewal.
                                    </p>
                                    <p className={styles.section2Para}>
                                        Holly and hazel form a gentle understory, and where the canopy parts, distant land and sea unfold in sweeping views. A seasonal stream murmurs along the northeast edge, slipping past mossy roots and quiet corners of the woodland.
                                    </p>
                                    <p className={styles.section2Para}>
                                        Once bordered by coal mines, Coed Rhyal now stands as an act of quiet restoration, an ecological gem — proof that when nature is allowed to breathe, she writes her own return.
                                    </p>
                                </div>
                            </div>

                            {/* Right Section - Map */}
                            <div className={styles.section2Right}>
                                <iframe
                                    src={`${(import.meta.env.VITE_API_URL || 'https://outshade.sacredgroves.earth').replace(/\/$/, '')}/api/sutra/map/forest?forest_id=UNI_COED_00002&iframe_height=820&iframe_width=708&zoom_start=3`}
                                    frameBorder="0"
                                    className={styles.section2Map}
                                    allowFullScreen
                                    title="Coed Rhyal Map"
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
                                        Listed for private sale, Coed Rhyal was acquired by Sacred Groves in April 2021, for conservation. In May 2024, Coed Rhyal became a part of the 'National Forest for Wales' network, as a recognition by the Government of Wales, UK, for the precious ecosystem services provided to the community.
                                    </p>
                                    <p className={styles.section3Text}>
                                        <span className={styles.section3TextBold}>Coed Rhyal is an ancient mature woodland.</span> The anthropogenic impact has been mitigated via a freehold purchase that protects it from any further commercial exploitation.
                                    </p>
                                </div>
                            </div>

                            {/* Center Image */}
                            <div className={styles.centerImageWrapper}>
                                <img src={coedSec3Center} alt="Coed Rhyal Center" className={styles.centerImage} />
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
                                    <div className={styles.gridImageWrapper}>
                                        <img src={gridLeft1} alt="Oak Tree" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>OAK TREE</div>
                                    </div>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={gridLeft2} alt="Bluebells" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>BLUEBELLS</div>
                                    </div>
                                </div>
                            </div>

                            {/* Top Right - Text */}
                            <div className={styles.gridItem}>
                                <p className={styles.gridTextRight}>
                                    Coed Rhyal, a 13.33 acre woodland of mature oak, occupies a north west facing slope that looks out over Carmarthen Bay. A stone's throw from Burry Port this delightful woodland is almost pure, old oak with a floor adorned with a carpet of bluebells in the spring and early summer months.
                                </p>
                            </div>

                            {/* Bottom Left - Text */}
                            <div className={styles.gridItem}>
                                <p className={styles.gridTextLeft}>
                                    The closed canopy of the oak casts a shadow on the characterful woodland habitat that lies beneath the leaf cover. With honeysuckle climbers, bilberry, primrose and ferns, Coed Rhyal is an ecological gem. The woodland contains extensive fallen and standing deadwood as well as mature trees with extensive cavities, which are also a valuable ecological resource.
                                </p>
                            </div>

                            {/* Bottom Right - Image with Text */}
                            <div className={styles.gridItem}>
                                <div className={styles.gridRightImages}>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={gridRight1} alt="Honeysuckle Climbers" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>HONEYSUCKLE CLIMBERS</div>
                                    </div>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={gridRight2} alt="Hard Shield Fern" className={styles.gridImage} />
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
                                    <div className={styles.section5ImageWrapper}>
                                        <img src={sec5Left1} alt="Peregrine Falcon" className={styles.section5LeftImage} />
                                        <div className={styles.section5Label}>Peregrine<br />Falcon</div>
                                    </div>
                                    <div className={styles.section5ImageWrapper}>
                                        <img src={sec5Left2} alt="Puffins" className={styles.section5LeftImageSmall} />
                                        <div className={styles.section5Label}>Puffins</div>
                                    </div>
                                </div>
                                <div className={styles.section5Right}>
                                    <p className={styles.section5RightText}>
                                        There is a patchy lower canopy of holly and hazel typical of oak woodlands. Where the canopy breaks, a stunning outlook offers a feast for the eyes with views of distant land and water. A seasonal stream trickles down the northeast boundary. This pristine woodland is in the midst of the coal mining industry that was once a thriving industry in the area.
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

                                    <div className={styles.carouselContainer} ref={carouselContainerRef}>
                                        <div
                                            className={styles.carouselTrack}
                                            style={{
                                                '--slide-offset': `-${currentSlide * 100}%`
                                            } as React.CSSProperties}
                                        >
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
                                    <source src={crVideo} type="video/quicktime" />
                                    <source src={crVideo} type="video/mp4" />
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
