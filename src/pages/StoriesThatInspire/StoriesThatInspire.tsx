import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/common/SEO'
import { PAGE_SEO, BREADCRUMBS } from '@/constants'
import styles from './StoriesThatInspire.module.css'
import storyHeroBg from '@/assets/story_hero_bg.svg'
import heroCenterStory from '@/assets/hero_center_story.svg'
import storyHeroIcon from '@/assets/story_hero_icon.svg'
import rightarrow from '@/assets/right_arrow.svg'
import letsExploreArrow from '@/assets/lets_explore_arrow.svg'
import searchIcon from '@/assets/search.svg'
import storyIcon1 from '@/assets/story_icon_1.svg'
import storyIcon2 from '@/assets/story_icon_2.svg'
import storyIcon3 from '@/assets/story_icon_3.svg'
import storyIcon4 from '@/assets/story_icon_4.svg'
import storyIcon5 from '@/assets/story_icon_5.svg'
import storyIcon6 from '@/assets/story_icon_6.svg'
import storyIcon7 from '@/assets/story_icon_7.svg'
import storyLeftLine from '@/assets/story_left_line.svg'
import storyLeftLogo from '@/assets/story_left_logo.svg'
import storyCenterImage from '@/assets/story_center_image.svg'
import storyRightArrow from '@/assets/story_right_arrow.svg'
import storyRightIcon from '@/assets/story_right_icon.svg'
import { AlignedWithUNSDGs } from '@/components/common/CommonSections'

interface StoryCard {
    id: number
    title: string
    imageId: number
}

export const StoriesThatInspire: React.FC = () => {
    const [visibleRows, setVisibleRows] = useState(1) // Start with 1 page (3 rows)
    const [searchQuery, setSearchQuery] = useState('')
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [selectedTag, setSelectedTag] = useState('All tags')
    const [selectedFilter, setSelectedFilter] = useState('Most recent')

    // Array of story icons
    const storyIcons = [storyIcon1, storyIcon2, storyIcon3, storyIcon4, storyIcon5, storyIcon6, storyIcon7]

    // Function to get a random icon for each card based on its id
    const getStoryIcon = (cardId: number) => {
        return storyIcons[(cardId - 1) % 7]
    }

    // Mock data for ~70 blogs
    const mockStories: StoryCard[] = [
        { id: 1, title: 'Local Efforts to Save Endangered Animals in UK: What Can You Learn From Them', imageId: 201 },
        { id: 2, title: 'Found in the Woods - short story inspired by Coed Rhyal', imageId: 202 },
        { id: 3, title: 'Basics of Environmental Volunteering: How Can You Get Started?', imageId: 203 },
        { id: 4, title: 'Efforts You Can Make to Help in Wildlife Protection in Your Area', imageId: 204 },
        { id: 5, title: '4 Changes You Can Make in Everyday Life to Save Forests in Canada', imageId: 205 },
        { id: 6, title: 'Why Planet-Positive Gifting Is The Future', imageId: 206 },
        { id: 7, title: '5 ways How Traditional Agroforestry Systems Help in Nature Conservation', imageId: 207 },
        { id: 8, title: '10 Tips About Environmental Volunteering to Teach Your Children', imageId: 208 },
        { id: 9, title: 'Here, Money Does Grow On Trees!', imageId: 209 },
        { id: 10, title: 'Forest Bathing at Coed Rhyal', imageId: 210 },
        { id: 11, title: 'The Return of the King', imageId: 211 },
        { id: 12, title: 'Community Radio to the Rescue!', imageId: 212 },
        { id: 13, title: 'Sustainable Living: A Guide to Reducing Your Carbon Footprint', imageId: 213 },
        { id: 14, title: 'Protecting Marine Life: Stories from Ocean Conservation', imageId: 214 },
        { id: 15, title: 'How Communities Are Restoring Degraded Landscapes', imageId: 215 },
        { id: 16, title: 'Youth-Led Climate Action: Inspiring the Next Generation', imageId: 216 },
        { id: 17, title: 'Indigenous Knowledge and Modern Conservation', imageId: 217 },
        { id: 18, title: 'Urban Forests: Bringing Nature Back to Cities', imageId: 218 },
        { id: 19, title: 'The Power of Collective Action in Environmental Protection', imageId: 219 },
        { id: 20, title: 'Renewable Energy and Habitat Conservation: A Perfect Match', imageId: 220 },
        { id: 21, title: 'Eco-Tourism: Balancing Travel and Conservation', imageId: 221 },
        { id: 22, title: 'The Role of Technology in Wildlife Monitoring', imageId: 222 },
        { id: 23, title: 'Seed Banks: Preserving Plant Diversity for Future Generations', imageId: 223 },
        { id: 24, title: 'Coral Reef Restoration: Success Stories from Around the World', imageId: 224 },
        { id: 25, title: 'Urban Beekeeping: Supporting Pollinators in Cities', imageId: 225 },
        { id: 26, title: 'Wetland Conservation: Why Every Acre Matters', imageId: 226 },
        { id: 27, title: 'The Hidden World of Soil Biodiversity', imageId: 227 },
        { id: 28, title: 'Rewilding Europe: Lessons from Large-Scale Restoration', imageId: 228 },
        { id: 29, title: 'Climate Refugees: Stories of Displacement and Hope', imageId: 229 },
        { id: 30, title: 'Green Architecture: Building with Nature in Mind', imageId: 230 },
        { id: 31, title: 'The Future of Sustainable Fashion', imageId: 231 },
        { id: 32, title: 'Ocean Plastic: Solutions from Communities Worldwide', imageId: 232 },
        { id: 33, title: 'Bird Migration Corridors: Protecting Sky Highways', imageId: 233 },
        { id: 34, title: 'Forest Firefighters: Heroes on the Front Lines', imageId: 234 },
        { id: 35, title: 'Children and Nature: Building Environmental Awareness Early', imageId: 235 },
        { id: 36, title: 'Sacred Groves Around the World: Cultural Conservation', imageId: 236 },
        { id: 37, title: 'The Economics of Ecosystem Services', imageId: 237 },
        { id: 38, title: 'Wildlife Corridors: Connecting Fragmented Habitats', imageId: 238 },
        { id: 39, title: 'Mangrove Forests: Coastal Guardians Under Threat', imageId: 239 },
        { id: 40, title: 'Zero Waste Communities: Inspiring Examples', imageId: 240 },
        { id: 41, title: 'The Science of Carbon Sequestration in Forests', imageId: 241 },
        { id: 42, title: 'Traditional Fishing Practices and Marine Conservation', imageId: 242 },
        { id: 43, title: 'Climate-Smart Agriculture: Feeding the World Sustainably', imageId: 243 },
        { id: 44, title: 'Invasive Species: Managing Ecological Threats', imageId: 244 },
        { id: 45, title: 'Water Conservation: Stories from Drought-Prone Regions', imageId: 245 },
        { id: 46, title: 'The Psychology of Environmental Action', imageId: 246 },
        { id: 47, title: 'Mushroom Networks: The Underground Internet of Forests', imageId: 247 },
        { id: 48, title: 'Solar-Powered Communities: Energy Independence Stories', imageId: 248 },
        { id: 49, title: 'Plastic-Free Living: Practical Tips and Inspiration', imageId: 249 },
        { id: 50, title: 'The Art of Environmental Storytelling', imageId: 250 },
        { id: 51, title: 'Mountain Ecosystems: Fragile Beauty Under Pressure', imageId: 251 },
        { id: 52, title: 'Community Gardens: Growing Food and Connection', imageId: 252 },
        { id: 53, title: 'The Role of Women in Conservation Leadership', imageId: 253 },
        { id: 54, title: 'Night Skies: Dark Sky Preservation Efforts', imageId: 254 },
        { id: 55, title: 'Electric Vehicles and Environmental Impact', imageId: 255 },
        { id: 56, title: 'River Restoration: Bringing Waterways Back to Life', imageId: 256 },
        { id: 57, title: 'Permaculture Principles for Sustainable Living', imageId: 257 },
        { id: 58, title: 'The Great Green Wall of Africa: Progress Report', imageId: 258 },
        { id: 59, title: 'Citizen Science: How You Can Contribute to Research', imageId: 259 },
        { id: 60, title: 'The Circular Economy: Redesigning How We Use Resources', imageId: 260 },
        { id: 61, title: 'Ancient Trees: Living Monuments of Natural History', imageId: 261 },
        { id: 62, title: 'Green Jobs: Career Paths in Environmental Sectors', imageId: 262 },
        { id: 63, title: 'The Philosophy of Deep Ecology', imageId: 263 },
        { id: 64, title: 'Butterfly Gardens: Creating Habitats for Pollinators', imageId: 264 },
        { id: 65, title: 'Environmental Law: Landmark Cases and Their Impact', imageId: 265 },
        { id: 66, title: 'The Healing Power of Nature: Ecotherapy Explained', imageId: 266 },
        { id: 67, title: 'Sustainable Transportation: Beyond Electric Cars', imageId: 267 },
        { id: 68, title: 'The Future of Food: Lab-Grown Meat and Plant-Based Diets', imageId: 268 },
        { id: 69, title: 'Environmental Refugees: A Growing Global Challenge', imageId: 269 },
        { id: 70, title: 'Hope for the Planet: Success Stories in Conservation', imageId: 270 }
    ]

    // Filter stories based on search query
    const filteredStories = mockStories.filter(story =>
        story.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Cards per page: 4 columns × 3 rows = 12 cards
    const cardsPerPage = 12
    const totalPages = Math.ceil(filteredStories.length / cardsPerPage)
    const currentPage = visibleRows
    const visibleCards = filteredStories.slice(0, currentPage * cardsPerPage)

    const handleLoadMore = () => {
        if (visibleRows < totalPages) {
            setVisibleRows(prev => prev + 1)
        }
    }

    const hasMore = visibleRows < totalPages

    return (
        <>
            <SEO
                title={PAGE_SEO.storiesThatInspire.title}
                description={PAGE_SEO.storiesThatInspire.description}
                keywords={PAGE_SEO.storiesThatInspire.keywords}
                ogImage={PAGE_SEO.storiesThatInspire.ogImage}
                breadcrumbs={BREADCRUMBS.storiesThatInspire}
            />

            {/* Hero Section */}
            <section className={styles.heroSection} style={{ backgroundImage: `url(${storyHeroBg})` }}>
                <div className={styles.heroContainer}>
                    {/* Left Section - Center Image and Icon */}
                    <div className={styles.heroLeft}>
                        <img
                            src={heroCenterStory}
                            alt="Hero center story"
                            className={styles.heroCenterImage}
                        />
                        <img
                            src={storyHeroIcon}
                            alt="Hero icon"
                            className={styles.heroIcon}
                        />
                    </div>

                    {/* Right Section - Text */}
                    <div className={styles.heroRight}>
                        <h1 className={styles.heroText}>
                            Timeless tales of
                            people and
                            communities who
                            are taking Climate
                            Action and
                            inspiring
                            meaningful
                            change.
                        </h1>
                    </div>
                </div>
            </section>

            {/* Stories Cards Section */}
            <section className={styles.storiesSection}>
                <div className={styles.storiesContainer}>
                    {/* Search Icon - Initially visible */}
                    {!isSearchOpen && (
                        <button
                            className={styles.searchIconButton}
                            onClick={() => setIsSearchOpen(true)}
                            aria-label="Open search"
                        >
                            <img src={searchIcon} alt="Search" className={styles.searchIconImg} />
                        </button>
                    )}

                    {/* Search Popup - Opens on click */}
                    {isSearchOpen && (
                        <div className={styles.searchBubble}>
                            <button
                                className={styles.searchCloseButton}
                                onClick={() => setIsSearchOpen(false)}
                                aria-label="Close search"
                            >
                                ×
                            </button>

                            {/* Search our journal */}
                            <div className={styles.searchColumn}>
                                <label className={styles.searchLabel}>Search our journal</label>
                                <div className={styles.searchInputWrapper}>
                                    <input
                                        type="text"
                                        placeholder="Search by keyword"
                                        value={searchQuery}
                                        onChange={(e) => {
                                            setSearchQuery(e.target.value)
                                            setVisibleRows(1)
                                        }}
                                        className={styles.searchInput}
                                    />
                                    <img src={searchIcon} alt="" className={styles.searchInputIcon} />
                                </div>
                            </div>

                            {/* Tags */}
                            <div className={styles.searchColumn}>
                                <label className={styles.searchLabel}>Tags</label>
                                <select
                                    className={styles.searchSelect}
                                    value={selectedTag}
                                    onChange={(e) => setSelectedTag(e.target.value)}
                                >
                                    <option value="All tags">All tags</option>
                                    <option value="Conservation">Conservation</option>
                                    <option value="Wildlife">Wildlife</option>
                                    <option value="Climate">Climate</option>
                                    <option value="Community">Community</option>
                                </select>
                            </div>

                            {/* Filter by */}
                            <div className={styles.searchColumn}>
                                <label className={styles.searchLabel}>Filter by</label>
                                <select
                                    className={styles.searchSelect}
                                    value={selectedFilter}
                                    onChange={(e) => setSelectedFilter(e.target.value)}
                                >
                                    <option value="Most recent">Most recent</option>
                                    <option value="Oldest first">Oldest first</option>
                                    <option value="A-Z">A-Z</option>
                                    <option value="Z-A">Z-A</option>
                                </select>
                            </div>

                            {/* Search Button */}
                            <button
                                className={styles.searchSubmitButton}
                                onClick={() => setIsSearchOpen(false)}
                                aria-label="Search"
                            >
                                <img src={searchIcon} alt="Search" className={styles.searchSubmitIcon} />
                            </button>
                        </div>
                    )}

                    <div className={styles.storiesGrid}>
                        {visibleCards.map((story) => (
                            <Link
                                key={story.id}
                                to={`/stories-that-inspire/${story.id}`}
                                className={styles.storyCard}
                            >
                                <div className={styles.storyCardImageWrapper}>
                                    <img
                                        src={`https://picsum.photos/204/257?random=${story.imageId}`}
                                        alt={story.title}
                                        className={styles.storyCardImage}
                                    />
                                </div>
                                <div className={styles.storyCardContent}>
                                    <div className={styles.storyCardTitleWrapper}>
                                        <h3 className={styles.storyCardTitle}>{story.title}</h3>
                                        <div className={styles.storyCardIcon}>
                                            <img
                                                src={getStoryIcon(story.id)}
                                                alt="Story icon"
                                                className={styles.storyCardIconImage}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Load More Arrow */}
                    {hasMore && (
                        <div className={styles.loadMoreContainer}>
                            <button
                                className={styles.loadMoreButton}
                                onClick={handleLoadMore}
                                aria-label="Load more stories"
                            >
                                <img
                                    src={rightarrow}
                                    alt="Load more"
                                    className={styles.loadMoreArrow}
                                />
                            </button>
                        </div>
                    )}

                    {/* Find Out More Button - Only show when all cards are loaded */}
                    {!hasMore && (
                        <div className={styles.findOutMoreContainer}>
                            <Link to="/" className={styles.findOutMoreButton}>
                                FIND OUT MORE
                                <img
                                    src={letsExploreArrow}
                                    alt="Arrow"
                                    className={styles.findOutMoreArrow}
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* About Us Section */}
            <section className={styles.aboutSection}>
                <div className={styles.aboutContainer}>
                    {/* Left Section - Text, Logo, and Line */}
                    <div className={styles.aboutLeft}>
                        <h2 className={styles.aboutLeftText}>
                            for<br />
                            People<br />
                            Planet<br />
                            Prosperity<br />
                            & Purpose.
                        </h2>
                        <img
                            src={storyRightIcon}
                            alt="Decorative icons"
                            className={styles.aboutLeftIcons}
                        />
                        <div className={styles.aboutLeftLogoWrapper}>
                            <div className={styles.aboutLeftLineWrapper}>
                                <img
                                    src={storyLeftLine}
                                    alt="Decorative line"
                                    className={styles.aboutLeftLine}
                                />
                            </div>
                            <img
                                src={storyLeftLogo}
                                alt="Sacred Groves logo"
                                className={styles.aboutLeftLogo}
                            />
                        </div>
                    </div>

                    {/* Center Section - Image */}
                    <div className={styles.aboutCenter}>
                        <img
                            src={storyCenterImage}
                            alt="Sacred Groves founders"
                            className={styles.aboutCenterImage}
                        />
                    </div>

                    {/* Right Section - Icons, About Us Heading, and Text */}
                    <div className={styles.aboutRight}>
                        <img
                            src={storyRightIcon}
                            alt="Decorative icons"
                            className={styles.aboutRightIcons}
                        />
                        <div className={styles.aboutRightContent}>
                            <div className={styles.aboutRightHeadingWrapper}>
                                <h3 className={styles.aboutRightHeading}>About Us</h3>
                                <img
                                    src={storyRightArrow}
                                    alt="Arrow"
                                    className={styles.aboutRightArrow}
                                />
                            </div>
                            <div className={styles.aboutRightText}>
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

            {/* Aligned with UN SDGs Section */}
            <AlignedWithUNSDGs hideLinkedInCarousel={true} />
        </>
    )
}
