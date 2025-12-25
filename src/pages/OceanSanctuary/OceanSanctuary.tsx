import React, { useState, useEffect } from 'react'
import { SEO } from '@/components/common/SEO'
import { PAGE_SEO, BREADCRUMBS } from '@/constants'
import { FadeInSection } from '@/components/common/FadeInSection/FadeInSection'
import styles from './OceanSanctuary.module.css'
import oceanBg from '@/assets/ocean_bg.svg'
import coedSec2IconLeft from '@/assets/coed_sec_2_icon_left.svg'
// import oceanSec2Right from '@/assets/ocean_sec_2_right.svg' // Replaced with map iframe
import coedSection3Bg from '@/assets/coed_section_3_bg.svg'
import oceanSec3Center from '@/assets/ocean_sec_3_center.png'
import coedSec3Card from '@/assets/coed_sec_3_card.svg'
import oceanGridLeft1 from '@/assets/ocean_grid_left_1.svg'
import oceanGridLeft2 from '@/assets/ocean_grid_left_2.svg'
// import gridRight1 from '@/assets/grid_right_1.svg'
// import gridRight2 from '@/assets/grid_right_2.svg'
// import sec5Left1 from '@/assets/sec_5_left_1.svg'
// import sec5Left2 from '@/assets/sec_5_left_2.svg'
// Ocean Zone images
import oceanZone1_1 from '@/assets/ocean_zone_1_1.svg'
import oceanZone1_2 from '@/assets/ocean_zone_1_2.svg'
import oceanZone1_3 from '@/assets/ocean_zone_1_3.svg'
import oceanZone1_4 from '@/assets/ocean_zone_1_4.svg'
import oceanZone1_5 from '@/assets/ocean_zone_1_5.svg'

import oceanZone2_1 from '@/assets/ocean_zone_2_1.svg'
import oceanZone2_2 from '@/assets/ocean_zone_2_2.svg'
import oceanZone2_3 from '@/assets/ocean_zone_2_3.svg'
import oceanZone2_4 from '@/assets/ocean_zone_2_4.svg'
import oceanZone2_5 from '@/assets/ocean_zone_2_5.svg'

import oceanZone3_1 from '@/assets/ocean_zone_3_1.svg'
import oceanZone3_2 from '@/assets/ocean_zone_3_2.svg'
import oceanZone3_3 from '@/assets/ocean_zone_3_3.svg'
import oceanZone3_4 from '@/assets/ocean_zone_3_4.svg'
import oceanZone3_5 from '@/assets/ocean_zone_3_5.svg'

import oceanZone4_1 from '@/assets/ocean_zone_4_1.svg'
import oceanZone4_2 from '@/assets/ocean_zone_4_2.svg'
import oceanZone4_3 from '@/assets/ocean_zone_4_3.svg'
import oceanZone4_4 from '@/assets/ocean_zone_4_4.svg'
import oceanZone4_5 from '@/assets/ocean_zone_4_5.svg'

import oceanZone5_1 from '@/assets/ocean_zone_5_1.svg'
import oceanZone5_2 from '@/assets/ocean_zone_5_2.svg'
import oceanZone5_3 from '@/assets/ocean_zone_5_3.svg'
import oceanZone5_4 from '@/assets/ocean_zone_5_4.svg'
import oceanZone5_5 from '@/assets/ocean_zone_5_5.svg'
import sec5CarouselLeftArrow from '@/assets/sec_5_corousel_left_arrow.svg'
import sec5CarouselRightArrow from '@/assets/sec_5_corousel_right_arrow.svg'
import storyIcon1 from '@/assets/story_icon_1.svg'
import storyIcon2 from '@/assets/story_icon_2.svg'
import storyIcon3 from '@/assets/story_icon_3.svg'
import storyIcon4 from '@/assets/story_icon_4.svg'
import storyIcon5 from '@/assets/story_icon_5.svg'
import videCoedLeft from '@/assets/video_coed_left.svg'
import videCoedRight from '@/assets/vide_coed_right.svg'
import osVideo from '@/assets/OS.mov'
import playIcon from '@/assets/play.svg'
import mooseIcon from '@/assets/moose.svg'
import mayflowerIcon from '@/assets/mayflower.svg'
import blackSpruceIcon from '@/assets/black_spruce.svg'
import mushroomIcon from '@/assets/mushroom.svg'
import turtleIcon from '@/assets/turtle.svg'
import eelgrassIcon from '@/assets/eelgrass.svg'
import whelksIcon from '@/assets/whelks.svg'
import ecologicalIcon from '@/assets/ecological.svg'
import { AlignedWithUNSDGs } from '@/components/common/CommonSections/CommonSections'
import { ImageModal } from '@/components/common/ImageModal'

// Slot widths based on Figma design - vertical stripes in gallery bar
const SLOT_WIDTHS = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42]

export const OceanSanctuary: React.FC = () => {
    // Story icons array
    const storyIcons = [storyIcon1, storyIcon2, storyIcon3, storyIcon4, storyIcon5]

    // Generate random icons for each card
    const getRandomIcon = () => storyIcons[Math.floor(Math.random() * 5)]

    // Carousel cards for each zone
    const zone1Cards = [
        { image: oceanZone1_1, text: 'Our neighbourhood', icon: getRandomIcon() },
        { image: oceanZone1_2, text: 'Aerial overview', icon: getRandomIcon() },
        { image: oceanZone1_3, text: 'Bear pug marks', icon: getRandomIcon() },
        { image: oceanZone1_4, text: 'Lakeside vegetation', icon: getRandomIcon() },
        { image: oceanZone1_5, text: 'Aerial overview', icon: getRandomIcon() }
    ]

    const zone2Cards = [
        { image: oceanZone2_1, text: 'Standing deadwood', icon: getRandomIcon() },
        { image: oceanZone2_2, text: 'Eastern White Pine', icon: getRandomIcon() },
        { image: oceanZone2_3, text: 'Dense Foliage', icon: getRandomIcon() },
        { image: oceanZone2_4, text: 'Creeping dogwood & Sphagnum Moss', icon: getRandomIcon() },
        { image: oceanZone2_5, text: 'Aerial overview', icon: getRandomIcon() }
    ]

    const zone3Cards = [
        { image: oceanZone3_1, text: 'Standing deadwood hollows', icon: getRandomIcon() },
        { image: oceanZone3_2, text: "Pink Lady's Slipper Orchid", icon: getRandomIcon() },
        { image: oceanZone3_3, text: 'Dense foliage', icon: getRandomIcon() },
        { image: oceanZone3_4, text: 'Aerial overview', icon: getRandomIcon() },
        { image: oceanZone3_5, text: 'Wrinkle mushroom', icon: getRandomIcon() }
    ]

    const zone4Cards = [
        { image: oceanZone4_1, text: 'Wetland stream', icon: getRandomIcon() },
        { image: oceanZone4_2, text: 'Aerial overview', icon: getRandomIcon() },
        { image: oceanZone4_3, text: 'Aerial overview', icon: getRandomIcon() },
        { image: oceanZone4_4, text: 'White fringed orchid', icon: getRandomIcon() },
        { image: oceanZone4_5, text: 'Wetland vegetation', icon: getRandomIcon() }
    ]

    const zone5Cards = [
        { image: oceanZone5_1, text: 'Aerial overview', icon: getRandomIcon() },
        { image: oceanZone5_2, text: 'Aerial overview', icon: getRandomIcon() },
        { image: oceanZone5_3, text: 'Aerial overview', icon: getRandomIcon() },
        { image: oceanZone5_4, text: 'Wedge leaved Rose', icon: getRandomIcon() },
        { image: oceanZone5_5, text: 'Rocky shore', icon: getRandomIcon() }
    ]

    // Collect all 25 images from all 5 zones for the gallery
    const GALLERY_IMAGES = [
        ...zone1Cards.map(card => card.image),
        ...zone2Cards.map(card => card.image),
        ...zone3Cards.map(card => card.image),
        ...zone4Cards.map(card => card.image),
        ...zone5Cards.map(card => card.image)
    ]

    // Initialize each slot with a different starting image index
    const initializeSlotImages = () => {
        const numSlots = 6
        const numImages = GALLERY_IMAGES.length
        return Array.from({ length: numSlots }, (_, index) => index % numImages)
    }

    const [slotImages, setSlotImages] = useState<number[]>(initializeSlotImages())
    const [activeYear, setActiveYear] = useState<number>(2025)
    const [activeYearZone2, setActiveYearZone2] = useState<number>(2025)
    const [activeYearZone3, setActiveYearZone3] = useState<number>(2025)
    const [activeYearZone4, setActiveYearZone4] = useState<number>(2025)
    const [activeYearZone5, setActiveYearZone5] = useState<number>(2025)
    const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false)
    const videoRef = React.useRef<HTMLVideoElement>(null)
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)
    const [heroBackgroundImage, setHeroBackgroundImage] = useState<string>(oceanBg) // Default to initial background

    const years = [2025, 2024, 2023, 2022, 2021]

    // Since we only have 5 cards and want to show all 5, arrows can be disabled or do nothing
    const nextCarousel = () => {
        // All 5 cards are always visible, so no movement needed
    }

    const prevCarousel = () => {
        // All 5 cards are always visible, so no movement needed
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

    return (
        <>
            <SEO
                title={PAGE_SEO.oceanSanctuary.title}
                description={PAGE_SEO.oceanSanctuary.description}
                keywords={PAGE_SEO.oceanSanctuary.keywords}
                ogImage={PAGE_SEO.oceanSanctuary.ogImage}
                breadcrumbs={BREADCRUMBS.oceanSanctuary}
            />

            <div className={styles.pageWrapper}>
                <section className={styles.heroSection} style={{ backgroundImage: `url(${heroBackgroundImage})` }}>
                    <div className={styles.heroContainer}>
                        {/* Motion Gallery Bar - Bottom aligned */}
                        <div className={styles.galleryBar}>
                            <div className={styles.galleryBarLeft}>
                                <span className={styles.galleryBarLabel}>Our neighbourhood</span>
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
                                <span className={styles.galleryBarTitle}>Ocean Sanctuary</span>
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
                                    <img src={coedSec2IconLeft} alt="Ocean Sanctuary Icon" className={styles.section2Icon} />
                                </a>
                                <div className={styles.section2Text}>
                                    <p className={styles.section2Para}>
                                        Along Nova Scotia's South Shore lies Ocean Sanctuary, an 83-acre forest corridor connecting the Atlantic's saltwater with the freshwater of Haley Lake to create a rare, living harmony.
                                    </p>
                                    <p className={styles.section2Para}>
                                        A landscape of contrast granite shores, salt-marsh meadows, and quiet forests shape this place. The Big Meadow Creek shelters migratory birds, wild roses, white pines, and coastal shrubs stitch resilience into the land.
                                    </p>
                                    <p className={styles.section2Para}>
                                        A haven for life on the wing bordered by two historic bird sanctuaries — Port L'Hebert (1941) and Haley Lake (1980), the skies here are alive with geese, harlequin ducks, ospreys, goldeneyes, and eagles.
                                    </p>
                                    <p className={styles.section2Para}>
                                        Five habitats, one sanctuary. From rocky coasts and salt marsh to an inland lake, old forest, and freshwater edges, different worlds united by one enduring rhythm: renewal.
                                    </p>
                                </div>
                            </div>

                            {/* Right Section - Map */}
                            <div className={styles.section2Right}>
                                <iframe
                                    src={`${(import.meta.env.VITE_API_URL || 'https://outshade.sacredgroves.earth').replace(/\/$/, '')}/api/sutra/map/forest?forest_id=CAN_OCEA_00003&iframe_height=820&iframe_width=708&zoom_start=3`}
                                    frameBorder="0"
                                    className={styles.section2Map}
                                    allowFullScreen
                                    title="Ocean Sanctuary Map"
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
                                        Ocean Sanctuary is a biodiverse natural habitat. The anthropogenic impact has been mitigated via a freehold purchase that protects it from commercial timber exploitation and hunting.
                                    </p>
                                </div>
                            </div>

                            {/* Center Image */}
                            <div className={styles.centerImageWrapper}>
                                <img src={oceanSec3Center} alt="Ocean Sanctuary Center" className={styles.centerImage} />
                            </div>

                            {/* UN SDG Section */}
                            <div className={styles.section3Middle}>
                                <p className={styles.section3TextSmall}>
                                    Being a mature natural habitat with multiple sub-habitats in a UNESCO Biosphere Reserve, the natural regeneration approach is being adopted.
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
                            {/* Heading - Centered Above */}
                            <div className={styles.gridItem}>
                                <h2 className={styles.gridHeading}>
                                    <span className={styles.gridHeadingBold}>Zone 01</span> - Rocky Lakeshore (Haley Lake)
                                </h2>
                            </div>

                            {/* Top Left - Images with Text */}
                            <div className={styles.gridItem}>
                                <div className={styles.gridLeftImages}>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={oceanGridLeft1} alt="Pine Tree" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>PINE TREE</div>
                                    </div>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={oceanGridLeft2} alt="Blueberry" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>BLUEBERRY</div>
                                    </div>
                                </div>
                            </div>

                            {/* Top Right - Text */}
                            <div className={styles.gridItem}>
                                <p className={styles.gridTextRight}>
                                    The main species in the canopy are Balsam Fir and Red Maple as well as some scattered old White Pine trees. Due to the short lifespan of the Balsam Fir, there are lots of dead and fallen trees that offer a habitat for an abundance of insects and fungi. This Zone is located right on the shore of Haley Lake and winds have further opened up the canopy. Many red maple and white pine trees offer with their cavities, seams and broken branches nesting opportunities for multiple species of birds. The multi-storied canopy is well structured and in the open areas lots of regeneration (fir, spruce, pine, some larch) has been established. Aside from the different types of shrubs and herbs (e.g. blueberry, huckleberry, lambkill etc.) many different types of moss and lichen have been found. What makes this zone special is the high abundance of old man's beard lichen.
                                </p>
                            </div>

                            {/* Year Tabs and Carousel Grouped for 25px gap */}
                            <div className={styles.gridItem} style={{ gap: '30px' }}>
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

                                <div className={styles.carouselWrapper}>
                                    <button className={styles.carouselArrow} onClick={prevCarousel}>
                                        <img src={sec5CarouselLeftArrow} alt="Previous" />
                                    </button>

                                    <div className={styles.carouselContainer}>
                                        <div className={styles.carouselTrack}>
                                            {zone1Cards.map((card, index) => (
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

                {/* Zone 02 - Rich Hardwood Upland */}
                <FadeInSection>
                    <section className={styles.section4} style={{ backgroundColor: '#DAF6EC' }}>
                        <div className={styles.section4Container}>
                            {/* Heading - Centered Above */}
                            <div className={styles.gridItem}>
                                <h2 className={styles.gridHeading}>
                                    <span className={styles.gridHeadingBold}>Zone 02</span> - Rich Hardwood Upland
                                </h2>
                            </div>

                            {/* Top Left - Text */}
                            <div className={styles.gridItem}>
                                <p className={styles.gridTextRight}>
                                    This zone covers the entire hill and slope section of the area, which is most likely of glacial deposition. Although the soil is on the poorer end, hardwood trees like red oak, white birch and red maple dominate. The Red oak tree offers valuable support for wildlife species including small mammals, bear, ruffed grouse and deer. Red maple regenerates quickly as coppice and is a favored browse by deer and moose. Mature red maple flowers provide one of the most important early and abundant pollen and nectar sources for a wide range of insects. Oak is the preferred host of maitake mushroom. Ericaceous shrubs, as well as mayflower, teaberry, round leaf pyrola, bracken fern, pink lady's slipper and princes'-pine are abundant in the area.
                                </p>
                            </div>

                            {/* Top Right - Images with Text */}
                            <div className={styles.gridItem}>
                                <div className={styles.gridRightImages}>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={mooseIcon} alt="Moose" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>MOOSE</div>
                                    </div>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={mayflowerIcon} alt="Mayflower" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>MAYFLOWER</div>
                                    </div>
                                </div>
                            </div>

                            {/* Year Tabs and Carousel Grouped for 25px gap */}
                            <div className={styles.gridItem} style={{ gap: '30px' }}>
                                <div className={styles.yearTabs}>
                                    {years.map((year) => (
                                        <button
                                            key={year}
                                            className={`${styles.yearTab} ${activeYearZone2 === year ? styles.yearTabActive : ''}`}
                                            onClick={() => setActiveYearZone2(year)}
                                        >
                                            {year}
                                        </button>
                                    ))}
                                </div>

                                <div className={styles.carouselWrapper}>
                                    <button className={styles.carouselArrow} onClick={prevCarousel}>
                                        <img src={sec5CarouselLeftArrow} alt="Previous" />
                                    </button>

                                    <div className={styles.carouselContainer}>
                                        <div className={styles.carouselTrack}>
                                            {zone2Cards.map((card, index) => (
                                                <div key={index} className={`${styles.carouselCard} ${styles.carouselCardWhite}`}>
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

                {/* Zone 03 - Shrub-Dominated Open Forest */}
                <FadeInSection>
                    <section className={styles.section4}>
                        <div className={styles.section4Container}>
                            {/* Heading - Centered Above */}
                            <div className={styles.gridItem}>
                                <h2 className={styles.gridHeading}>
                                    <span className={styles.gridHeadingBold}>Zone 03</span> - Shrub-Dominated Open Forest
                                </h2>
                            </div>

                            {/* Top Left - Images with Text */}
                            <div className={styles.gridItem}>
                                <div className={styles.gridLeftImages}>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={blackSpruceIcon} alt="Black Spruce" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>BLACK SPRUCE</div>
                                    </div>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={mushroomIcon} alt="Mushroom" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>MUSHROOM</div>
                                    </div>
                                </div>
                            </div>

                            {/* Top Right - Text */}
                            <div className={styles.gridItem}>
                                <p className={styles.gridTextRight}>
                                    This woodland is at the bottom of the slope and is characterized by scattered black spruce, white and red pine, exposed bedrock, stony and shallow soils and prominent reindeer lichen. The Black spruce / Lambkill / Reindeer lichen ecosystem  is unique to the east coast and is relatively rare in Nova Scotia.
                                </p>
                            </div>

                            {/* Year Tabs and Carousel Grouped for 25px gap */}
                            <div className={styles.gridItem} style={{ gap: '30px' }}>
                                <div className={styles.yearTabs}>
                                    {years.map((year) => (
                                        <button
                                            key={year}
                                            className={`${styles.yearTab} ${activeYearZone3 === year ? styles.yearTabActive : ''}`}
                                            onClick={() => setActiveYearZone3(year)}
                                        >
                                            {year}
                                        </button>
                                    ))}
                                </div>

                                <div className={styles.carouselWrapper}>
                                    <button className={styles.carouselArrow} onClick={prevCarousel}>
                                        <img src={sec5CarouselLeftArrow} alt="Previous" />
                                    </button>

                                    <div className={styles.carouselContainer}>
                                        <div className={styles.carouselTrack}>
                                            {zone3Cards.map((card, index) => (
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

                {/* Zone 04 - Stillwater, Brook, and Riparian Area */}
                <FadeInSection>
                    <section className={styles.section4} style={{ backgroundColor: '#DAF6EC' }}>
                        <div className={styles.section4Container}>
                            {/* Heading - Centered Above */}
                            <div className={styles.gridItem}>
                                <h2 className={styles.gridHeading}>
                                    <span className={styles.gridHeadingBold}>Zone 04</span> - Stillwater, Brook, and Riparian Area
                                </h2>
                            </div>

                            {/* Top Left - Text (Swapped) */}
                            <div className={styles.gridItem}>
                                <p className={styles.gridTextRight}>
                                    This zone covers several micro ecosystems that are all influenced by one common feature: water. Due to the topography, a swamp/ wetland has formed in the western side of this area that drains via a brook eastwards. The swamp is surrounded by several different vegetation types flourishing with the abundance of fresh water supply. These types of forests make important contributions to landscape diversity, carbon and water budgets. This area provides habitat for numerous plants, lichens, invertebrates and vertebrates (including moose, spruce grouse, rusty blackbird, swamp and Lincoln's sparrows, wood turtle and several amphibians).
                                </p>
                            </div>

                            {/* Top Right - Images with Text (Swapped) */}
                            <div className={styles.gridItem}>
                                <div className={styles.gridLeftImages}>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={mooseIcon} alt="Moose" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>MOOSE</div>
                                    </div>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={turtleIcon} alt="Wood Turtle" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>WOODTURTLE</div>
                                    </div>
                                </div>
                            </div>

                            {/* Year Tabs and Carousel Grouped for 25px gap */}
                            <div className={styles.gridItem} style={{ gap: '30px' }}>
                                <div className={styles.yearTabs}>
                                    {years.map((year) => (
                                        <button
                                            key={year}
                                            className={`${styles.yearTab} ${activeYearZone4 === year ? styles.yearTabActive : ''}`}
                                            onClick={() => setActiveYearZone4(year)}
                                        >
                                            {year}
                                        </button>
                                    ))}
                                </div>

                                <div className={styles.carouselWrapper}>
                                    <button className={styles.carouselArrow} onClick={prevCarousel}>
                                        <img src={sec5CarouselLeftArrow} alt="Previous" />
                                    </button>

                                    <div className={styles.carouselContainer}>
                                        <div className={styles.carouselTrack}>
                                            {zone4Cards.map((card, index) => (
                                                <div key={index} className={`${styles.carouselCard} ${styles.carouselCardWhite}`}>
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

                {/* Zone 05 - Shoreline and Intertidal Zone */}
                <FadeInSection>
                    <section className={styles.section4}>
                        <div className={styles.section4Container}>
                            {/* Heading - Centered Above */}
                            <div className={styles.gridItem}>
                                <h2 className={styles.gridHeading}>
                                    <span className={styles.gridHeadingBold}>Zone 05</span> - Shoreline and Intertidal Zone
                                </h2>
                            </div>

                            {/* Top Left - Images with Text */}
                            <div className={styles.gridItem}>
                                <div className={styles.gridLeftImages}>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={eelgrassIcon} alt="Eelgrass" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>EELGRASS</div>
                                    </div>
                                    <div className={styles.gridImageWrapper}>
                                        <img src={whelksIcon} alt="Whelks" className={styles.gridImage} />
                                        <div className={styles.gridLabel}>WHELKS</div>
                                    </div>
                                </div>
                            </div>

                            {/* Top Right - Text */}
                            <div className={styles.gridItem}>
                                <p className={styles.gridTextRight}>
                                    This rocky shore is home to a great diversity of plants and animals. The plants that are most common on the rocky shore are the macroscopic (visible with the eye) algae or seaweed. These are classified according to their colour - brown, green, or red - and the specific locations in which they are found. Vascular plants such as Seaside-Plantain are found at the sea/ land interface. One such plant, Eelgrass, may be found inter-tidally in tide pools if the pools have accumulated enough sediments for the plants to take root. Other plants of the rocky shore are the attached micro-algae. The most common animals include snails like the periwinkles, whelks, nudibranchs (naked molluscs), limpets, and chitons.
                                </p>
                            </div>

                            {/* Year Tabs and Carousel Grouped for 25px gap */}
                            <div className={styles.gridItem} style={{ gap: '30px' }}>
                                <div className={styles.yearTabs}>
                                    {years.map((year) => (
                                        <button
                                            key={year}
                                            className={`${styles.yearTab} ${activeYearZone5 === year ? styles.yearTabActive : ''}`}
                                            onClick={() => setActiveYearZone5(year)}
                                        >
                                            {year}
                                        </button>
                                    ))}
                                </div>

                                <div className={styles.carouselWrapper}>
                                    <button className={styles.carouselArrow} onClick={prevCarousel}>
                                        <img src={sec5CarouselLeftArrow} alt="Previous" />
                                    </button>

                                    <div className={styles.carouselContainer}>
                                        <div className={styles.carouselTrack}>
                                            {zone5Cards.map((card, index) => (
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

                {/* Ecological Importance of the area */}
                <FadeInSection>
                    <section className={styles.ecologicalSection} style={{ backgroundColor: '#DAF6EC' }}>
                        <div className={styles.ecologicalContainer}>
                            {/* Icons Row */}
                            <div className={styles.ecologicalIconsRow}>
                                <img src={ecologicalIcon} alt="Ecological Icons" className={styles.ecologicalIconImage} />
                            </div>

                            {/* Main Heading */}
                            <h2 className={styles.ecologicalHeading}>Ecological Importance of the area</h2>

                            {/* Text Content */}
                            <div className={styles.ecologicalTextContent}>
                                <p className={styles.ecologicalText}>
                                    Ocean Sanctuary is Sacred Groves' contribution to the Southwestern region of Nova Scotia that was designated as a UNESCO Biosphere Reserve in 2001. It is one of only 18 ecosystems in Canada with this special designation.
                                </p>
                                <p className={styles.ecologicalText}>
                                    The broad category of forests in Ocean Sanctuary is Acadian Group of Forests existing at different stages of succession. Zone 1 has mid to late successional softwood Vegetation Types, Zone 2 has early to mid successional hardwood Vegetation Types, and zone 3 has mainly edaphic climax associations with less than 30% tree coverage. Zones 4 and 5 are wetland and intertidal habitats respectively.
                                </p>
                                <p className={styles.ecologicalText}>
                                    In the habitat, the occurance of Balsam Fir species is of special significance as it is reported to support boreal felt lichen, listed as endangered under the Nova Scotia Endangered Species Act and also under the Species at Risk Act (SARA).
                                </p>
                                <p className={styles.ecologicalText}>
                                    The habitat neighbours two Migratory Bird Sanctuaries The Port L'Hebert MBS and the Haley Lake. Port L'Hebert Migratory Bird Sanctuary is located in a shallow coastal inlet on the southeast shore of Nova Scotia. Two other Migratory Bird Sanctuaries, Port Joli and Sable River, are situated near Port L'Hebert and, together, these three sanctuaries support over 4,000 to 5,000 Canada geese each year. Along with these nearby protected areas, the Port L'Hebert Sanctuary supports over 40% of the wintering Canada geese in the Atlantic Provinces. Geese tend to arrive in the Port L'Hebert sanctuary in late September and remain until mid-March, with peak numbers occurring in late October to early November. Occasionally, during particularly cold winters, the waters in the sanctuary's inlet freeze, causing the waterfowl using it to move to the nearby Sable River sanctuary.
                                </p>
                                <p className={styles.ecologicalText}>
                                    The Port L'Hebert Migratory Bird Sanctuary is also an important resting, feeding and wintering area for American black ducks. Migrating birds of this species begin to gather in the sanctuary as early as late August with numbers exceeding 1,000 birds in late January to early February. Significant numbers of these migrants remain until early April. Other dabbling ducks (ducks that feed near the surface of the water) that can be found in the sanctuary, though in smaller numbers, include green-winged teal and northern pintail, which use the sanctuary during early fall. Diving ducks (ducks that dive below the surface of the water to feed) can also be seen in the sanctuary including common goldeneye, bufflehead, scaups, scoters and mergansers. These birds arrive in late fall and several hundred tend to remain throughout the winter.
                                </p>
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
