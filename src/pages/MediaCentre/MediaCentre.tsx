import React, { useState, useRef } from 'react'
import { SEO } from '@/components/common/SEO'
import { AlignedWithUNSDGs } from '@/components/common/CommonSections'
import styles from './MediaCentre.module.css'
import searchIcon from '@/assets/search.svg'
import storyIcon1 from '@/assets/story_icon_1.svg'
import storyIcon2 from '@/assets/story_icon_2.svg'
import storyIcon3 from '@/assets/story_icon_3.svg'
import storyIcon4 from '@/assets/story_icon_4.svg'
import storyIcon5 from '@/assets/story_icon_5.svg'
import storyIcon6 from '@/assets/story_icon_6.svg'
import storyIcon7 from '@/assets/story_icon_7.svg'
import letsExploreArrow from '@/assets/lets_explore_arrow.svg'
import videCoedLeft from '@/assets/video_coed_left.svg'
import videCoedRight from '@/assets/vide_coed_right.svg'
import crVideo from '@/assets/OS.mov'
import playIcon from '@/assets/play.svg'

interface MediaCard {
  id: number
  title: string
  source: string
  date: string
  imageId: number
}

export const MediaCentre: React.FC = () => {
  const [visibleRows, setVisibleRows] = useState(1) // Start with 1 page (3 rows)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [selectedTag, setSelectedTag] = useState('All tags')
  const [selectedFilter, setSelectedFilter] = useState('Most recent')
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Array of story icons
  const storyIcons = [storyIcon1, storyIcon2, storyIcon3, storyIcon4, storyIcon5, storyIcon6, storyIcon7]

  // Function to get a random icon for each card based on its id
  const getStoryIcon = (cardId: number) => {
    return storyIcons[(cardId - 1) % 7]
  }

  // Mock data for media articles based on Figma screenshots
  const mockMediaCards: MediaCard[] = [
    { id: 1, title: 'Sacred Groves CIC in talks for 10-year investment for restoration of forest lands near Kaziranga', source: 'THE ECONOMIC TIMES', date: 'Aug 14 2021', imageId: 301 },
    { id: 2, title: 'What now for climate change?', source: 'DWF Group', date: 'Jul 17 2020', imageId: 302 },
    { id: 3, title: 'We are proud to officially be a part of the initiative as a guardian and support its innovative sustainability goals.', source: 'Revemax', date: 'Aug 14 2021', imageId: 303 },
    { id: 4, title: 'Dentsu MENA Partners with Sacred Groves to Turn E-waste into Flourishing Forests', source: 'NORTHLADDER Communicate', date: '16 Nov 2022', imageId: 304 },
    { id: 5, title: "Meet the Indian couple saving Wales' ancient woodlands", source: 'Nation Cymru', date: 'Mar 29 2022', imageId: 305 },
    { id: 6, title: "This Dubai couple is buying forests around the world. Here's why", source: 'Khaleej Times', date: 'Mar 13 2022', imageId: 306 },
    { id: 7, title: 'DSA is now officially a proud Guardian of many a Sacred Grove Cluster.', source: 'linkedin', date: 'Sep 7 2021', imageId: 307 },
    { id: 8, title: 'Sacred groves Appoints merkle for performance media Brief', source: 'Campaignme', date: 'Oct 3 2021', imageId: 308 },
    { id: 9, title: 'Movius Corp', source: 'Movius Corp', date: 'Feb 24 2022', imageId: 309 },
    { id: 10, title: "Save the planet on Valentine's Day with Eco-friendly gift Sacred Groves", source: 'THE UAE NEWS', date: 'Feb 13 2022', imageId: 310 },
    { id: 11, title: 'Sacred Groves Expands Conservation Efforts Across Three Continents', source: 'Environmental News Network', date: 'Jan 15 2023', imageId: 311 },
    { id: 12, title: 'New Technology Helps Track Forest Restoration Progress in Real-Time', source: 'Tech for Good', date: 'Dec 8 2022', imageId: 312 },
    { id: 13, title: 'Community-Led Conservation Model Gains International Recognition', source: 'Conservation Today', date: 'Nov 22 2022', imageId: 313 },
    { id: 14, title: 'Sacred Groves Partners with Universities for Research Initiatives', source: 'Academic Press', date: 'Oct 18 2022', imageId: 314 },
    { id: 15, title: 'Blockchain Technology Ensures Transparency in Conservation Funding', source: 'Crypto News', date: 'Sep 12 2022', imageId: 315 },
    { id: 16, title: 'Wildlife Corridors Restored Through Strategic Land Acquisition', source: 'Wildlife Conservation', date: 'Aug 5 2022', imageId: 316 },
    { id: 17, title: 'Indigenous Communities Collaborate on Habitat Protection', source: 'Indigenous Rights', date: 'Jul 20 2022', imageId: 317 },
    { id: 18, title: 'Carbon Sequestration Project Exceeds Targets in First Year', source: 'Climate Action', date: 'Jun 14 2022', imageId: 318 },
    { id: 19, title: 'Corporate Partnerships Drive Sustainable Business Practices', source: 'Business Green', date: 'May 9 2022', imageId: 319 },
    { id: 20, title: 'Youth Engagement Program Inspires Next Generation of Conservationists', source: 'Education Weekly', date: 'Apr 3 2022', imageId: 320 },
  ]

  // Filter media cards based on search query
  const filteredCards = mockMediaCards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.source.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Cards per page: 4 columns × 3 rows = 12 cards
  const cardsPerPage = 12
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage)
  const currentPage = visibleRows
  const visibleCards = filteredCards.slice(0, currentPage * cardsPerPage)

  const handleLoadMore = () => {
    if (visibleRows < totalPages) {
      setVisibleRows(prev => prev + 1)
    }
  }

  const handleFindOutMore = () => {
    // Show all remaining cards by setting to total pages
    if (visibleRows < totalPages) {
      setVisibleRows(totalPages)
    }
  }

  const hasMore = visibleRows < totalPages && visibleCards.length < filteredCards.length

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

  return (
    <>
      <SEO
        title="Media Centre - Sacred Groves"
        description="If you are a member of Media you may contact us at connect@sacredgroves.earth"
      />

      {/* Intro Text Section */}
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <p className={styles.introText}>
            If you are a member of Media you may contact us at{' '}
            <a href="mailto:connect@sacredgroves.earth" className={styles.introLink}>
              connect@sacredgroves.earth
            </a>
          </p>
        </div>
      </section>

      {/* Media Cards Section */}
      <section className={styles.mediaSection}>
        <div className={styles.mediaContainer}>
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

          <div className={styles.mediaGrid}>
            {visibleCards.map((card) => (
              <div key={card.id} className={styles.mediaCard}>
                <div className={styles.mediaCardImageWrapper}>
                  <img
                    src={`https://picsum.photos/204/257?random=${card.imageId}`}
                    alt={card.title}
                    className={styles.mediaCardImage}
                  />
                </div>
                <div className={styles.mediaCardContent}>
                  <div className={styles.mediaCardSource}>{card.source}</div>
                  <div className={styles.mediaCardTitleWrapper}>
                    <h3 className={styles.mediaCardTitle}>{card.title}</h3>
                    <div className={styles.mediaCardIcon}>
                      <img
                        src={getStoryIcon(card.id)}
                        alt="Media icon"
                        className={styles.mediaCardIconImage}
                      />
                    </div>
                  </div>
                  <div className={styles.mediaCardDate}>{card.date}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Find Out More Button - Show when there are more cards to load */}
          {hasMore && (
            <div className={styles.findOutMoreContainer}>
              <button
                className={styles.findOutMoreButton}
                onClick={handleLoadMore}
                aria-label="Find out more"
              >
                FIND OUT MORE
                <img
                  src={letsExploreArrow}
                  alt="Arrow"
                  className={styles.findOutMoreArrow}
                />
              </button>
            </div>
          )}

          {/* Find Out More Button - Show when there are more cards to load */}
          {!hasMore && visibleCards.length < filteredCards.length && (
            <div className={styles.findOutMoreContainer}>
              <button
                className={styles.findOutMoreButton}
                onClick={handleFindOutMore}
                aria-label="Find out more"
              >
                FIND OUT MORE
                <img
                  src={letsExploreArrow}
                  alt="Arrow"
                  className={styles.findOutMoreArrow}
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className={styles.videoSection}>
        <div className={styles.videoContainer}>
          <img src={videCoedLeft} alt="Video Icon Left" className={styles.videoIconLeft} />
          <div className={styles.videoCenter} onClick={handleToggleVideo}>
            <video
              ref={videoRef}
              className={styles.videoElement}
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
          <img src={videCoedRight} alt="Video Icon Right" className={styles.videoIconRight} />
        </div>
      </section>

      {/* Aligned with UN SDGs Section */}
      <AlignedWithUNSDGs hideLinkedInCarousel={true} />
    </>
  )
}

