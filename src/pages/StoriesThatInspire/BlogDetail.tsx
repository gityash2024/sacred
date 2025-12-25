import React, { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '@/components/common/SEO'
import { AlignedWithUNSDGs } from '@/components/common/CommonSections'
import styles from './BlogDetail.module.css'
import storyLeftLine from '@/assets/story_left_line.svg'
import storyLeftLogo from '@/assets/story_left_logo.svg'
import storyCenterImage from '@/assets/story_center_image.svg'
import storyRightArrow from '@/assets/story_right_arrow.svg'
import storyRightIcon from '@/assets/story_right_icon.svg'
import playIcon from '@/assets/play_icon.svg'
import downloadIcon from '@/assets/download.svg'
import shareIcon from '@/assets/share.svg'

interface BlogPost {
  id: number
  title: string
  imageId: number
  views: number
  content: string[]
  tags: string[]
  date: string
}

// Mock data for blog posts
const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Local Efforts to Save Endangered Animals in UK: What Can You Learn From Them',
    imageId: 201,
    views: 1234,
    date: 'Jan 15, 2024',
    tags: ['Wildlife', 'Conservation', 'UK', 'Endangered Species', 'Community'],
    content: [
      'Every six seconds the world loses a soccer field equivalent (1.76 acres) of primary forests. This is no surprise since almost 50% of the world\'s economic activity is involved in natural destruction activities according to a study by the World Economic Forum. Direct causes of deforestation include unsustainable agricultural expansion, wood extraction (e.g., logging or wood harvest for domestic fuel or charcoal), and infrastructure expansion such as road building and urbanization.',
      'Rarely is there a single direct cause for deforestation. Most often, multiple processes work simultaneously or sequentially to cause deforestation. The impact of deforestation is now becoming widespread with a rise in global temperatures resulting in the accelerated change of weather patterns that are causing floods, droughts, storms, etc. all over the world.',
      'Agricultural reforms are a big part of the solution. It is estimated that we waste a third of the food that we produce. That\'s about 1.3 billion tons a year. In addition, a third of our agricultural land is used for animal feed. As the world gets more \'modernized\' the land devoted to animal feed is expected to rise to cater to the growing demand of the dairy and meat industry.',
      'The answers to resolve this complex issue are not straightforward and require a combination of public policy, awareness, capital, human behaviour change, etc. However, one of the important aspects for the policy makers to consider is our legislative reforms and furthering environmentally friendly agricultural practices such as agroforestry. Agroforestry is the intentional integration of trees and shrubs into crop and animal farming systems to create environmental, economic, and social benefits. There is a lot of work happening all over the world in advancing agroforestry-based solutions.',
      '1. Alley Cropping: Alley cropping involves planting crops between rows of trees. This system allows farmers to produce fruits, vegetables, grains, and other crops while also growing trees for timber, fruit, or nuts.',
      '2. Multi-story Cropping: This system creates a complementary ecosystem of trees and shrubs at different heights. The upper canopy might include tall trees, while lower levels could have smaller trees, shrubs, and ground-level crops. This approach maximizes the use of vertical space and can produce food, herbal, botanical, or decorative crops.',
      '3. Silvo Pasture: Silvo pasture combines trees with livestock and forage on one piece of land. The trees provide timber, fruit, fodder, or nuts as well as shade and shelter for livestock and their forages, reducing stress on the animals from the hot summer sun, cold winter winds, or a downpour.',
      '4. Riparian Forest Buffers: These are natural or re-established areas along streams, rivers, lakes and ponds to prevent erosion. These areas can also support wildlife and provide another source of income.',
      '5. Windbreaks: Windbreaks shelter crops, animals, buildings, and soil from wind, snow, dust, and odours. These areas can also support wildlife and provide another source of income. They are also called shelterbelts, hedgerows, vegetated environmental buffers, or living snow fences.',
      'So, if you are wondering how can you influence this change towards more widespread agroforestry practices, here are a few suggestions:',
      '1. Become a lot more aware and conscious of your consumption choices. Start reading food labels of the products that you buy and make a deliberate shift towards products that are more upfront about their production and sources of origin.',
      '2. Start asking your elected representatives about how agroforestry in your region is being encouraged. Often change begins when you ask for it!',
      '3. If you happen to be directly involved in agriculture and food production start developing and implementing agroforestry practices and set an example!'
    ]
  },
  {
    id: 7,
    title: '5 ways How Traditional Agroforestry Systems Help in Nature Conservation',
    imageId: 207,
    views: 2277,
    date: 'Mar 10, 2024',
    tags: ['Agroforestry', 'Conservation', 'Climate Change', 'Deforestation', 'India', 'Europe', 'Biodiversity'],
    content: [
      'Every six seconds the world loses a soccer field equivalent (1.76 acres) of primary forests. This is no surprise since almost 50% of the world\'s economic activity is involved in natural destruction activities according to a study by the World Economic Forum. Direct causes of deforestation include unsustainable agricultural expansion, wood extraction (e.g., logging or wood harvest for domestic fuel or charcoal), and infrastructure expansion such as road building and urbanization.',
      'Rarely is there a single direct cause for deforestation. Most often, multiple processes work simultaneously or sequentially to cause deforestation. The impact of deforestation is now becoming widespread with a rise in global temperatures resulting in the accelerated change of weather patterns that are causing floods, droughts, storms, etc. all over the world.',
      'Agricultural reforms are a big part of the solution. It is estimated that we waste a third of the food that we produce. That\'s about 1.3 billion tons a year. In addition, a third of our agricultural land is used for animal feed. As the world gets more \'modernized\' the land devoted to animal feed is expected to rise to cater to the growing demand of the dairy and meat industry.',
      'The answers to resolve this complex issue are not straightforward and require a combination of public policy, awareness, capital, human behaviour change, etc. However, one of the important aspects for the policy makers to consider is our legislative reforms and furthering environmentally friendly agricultural practices such as agroforestry. Agroforestry is the intentional integration of trees and shrubs into crop and animal farming systems to create environmental, economic, and social benefits. There is a lot of work happening all over the world in advancing agroforestry-based solutions.',
      '1. Alley Cropping: Alley cropping involves planting crops between rows of trees. The system can be designed to produce fruits, vegetables, grains, flowers, herbs, bioenergy feedstocks, and more.',
      '2. Multi-story Cropping: The practice of multi-story cropping is based on creating a complimentary ecosystem of trees and shrubs under a forest canopy at different heights to grow food, herbal, botanical, or decorative crops.',
      '3. Silvo Pasture: Silvo pasture combines trees with livestock and forage on one piece of land. The trees provide timber, fruit, fodder, or nuts as well as shade and shelter for livestock and their forages, reducing stress on the animals from the hot summer sun, cold winter winds, or a downpour.',
      '4. Riparian Forest Buffers: Riparian forest buffers are natural or re-established areas along streams, rivers, lakes and ponds with trees, shrubs, and grasses. These areas filter runoff, stabilize banks, prevent erosion, and support wildlife. They can also provide another source of income.',
      '5. Windbreaks: Windbreaks shelter crops, animals, buildings, and soil from wind, snow, dust, and odours. These areas can also support wildlife and provide another source of income. They are also called shelterbelts, hedgerows, vegetated environmental buffers, or living snow fences.',
      'So, if you are wondering how can you influence this change towards more widespread agroforestry practices, here are a few suggestions:',
      '1. Become a lot more aware and conscious of your consumption choices. Start reading food labels of the products that you buy and make a deliberate shift towards products that are more upfront about their production and sources of origin.',
      '2. Start asking your elected representatives about how agroforestry in your region is being encouraged. Often change begins when you ask for it!',
      '3. If you happen to be directly involved in agriculture and food production start developing and implementing agroforestry practices and set an example!'
    ]
  }
]


export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null)

  const blogId = id ? parseInt(id, 10) : 1
  const blog = mockBlogPosts.find(b => b.id === blogId) || mockBlogPosts[0] || {
    id: 7,
    title: '5 ways How Traditional Agroforestry Systems Help in Nature Conservation',
    imageId: 207,
    views: 2277,
    date: 'Mar 10, 2024',
    tags: ['Agroforestry', 'Conservation', 'Climate Change', 'Deforestation', 'India', 'Europe', 'Biodiversity'],
    content: [
      'Every six seconds the world loses a soccer field equivalent (1.76 acres) of primary forests. This is no surprise since almost 50% of the world\'s economic activity is involved in natural destruction activities according to a study by the World Economic Forum. Direct causes of deforestation include unsustainable agricultural expansion, wood extraction (e.g., logging or wood harvest for domestic fuel or charcoal), and infrastructure expansion such as road building and urbanization.',
      'Rarely is there a single direct cause for deforestation. Most often, multiple processes work simultaneously or sequentially to cause deforestation. The impact of deforestation is now becoming widespread with a rise in global temperatures resulting in the accelerated change of weather patterns that are causing floods, droughts, storms, etc. all over the world.',
      'Agricultural reforms are a big part of the solution. It is estimated that we waste a third of the food that we produce. That\'s about 1.3 billion tons a year. In addition, a third of our agricultural land is used for animal feed. As the world gets more \'modernized\' the land devoted to animal feed is expected to rise to cater to the growing demand of the dairy and meat industry.',
      'The answers to resolve this complex issue are not straightforward and require a combination of public policy, awareness, capital, human behaviour change, etc. However, one of the important aspects for the policy makers to consider is our legislative reforms and furthering environmentally friendly agricultural practices such as agroforestry. Agroforestry is the intentional integration of trees and shrubs into crop and animal farming systems to create environmental, economic, and social benefits. There is a lot of work happening all over the world in advancing agroforestry-based solutions.',
      '1. Alley Cropping: Alley cropping involves planting crops between rows of trees. The system can be designed to produce fruits, vegetables, grains, flowers, herbs, bioenergy feedstocks, and more.',
      '2. Multi-story Cropping: The practice of multi-story cropping is based on creating a complimentary ecosystem of trees and shrubs under a forest canopy at different heights to grow food, herbal, botanical, or decorative crops.',
      '3. Silvo Pasture: Silvo pasture combines trees with livestock and forage on one piece of land. The trees provide timber, fruit, fodder, or nuts as well as shade and shelter for livestock and their forages, reducing stress on the animals from the hot summer sun, cold winter winds, or a downpour.',
      '4. Riparian Forest Buffers: Riparian forest buffers are natural or re-established areas along streams, rivers, lakes and ponds with trees, shrubs, and grasses. These areas filter runoff, stabilize banks, prevent erosion, and support wildlife. They can also provide another source of income.',
      '5. Windbreaks: Windbreaks shelter crops, animals, buildings, and soil from wind, snow, dust, and odours. These areas can also support wildlife and provide another source of income. They are also called shelterbelts, hedgerows, vegetated environmental buffers, or living snow fences.',
      'So, if you are wondering how can you influence this change towards more widespread agroforestry practices, here are a few suggestions:',
      '1. Become a lot more aware and conscious of your consumption choices. Start reading food labels of the products that you buy and make a deliberate shift towards products that are more upfront about their production and sources of origin.',
      '2. Start asking your elected representatives about how agroforestry in your region is being encouraged. Often change begins when you ask for it!',
      '3. If you happen to be directly involved in agriculture and food production start developing and implementing agroforestry practices and set an example!'
    ]
  }

  // Get all stories for navigation
  const allStories = [
    { id: 1, title: 'Local Efforts to Save Endangered Animals in UK: What Can You Learn From Them', imageId: 201 },
    { id: 2, title: 'Found in the Woods - short story inspired by Coed Rhyal', imageId: 202 },
    { id: 3, title: 'Basics of Environmental Volunteering: How Can You Get Started?', imageId: 203 },
    { id: 4, title: 'Efforts You Can Make to Help in Wildlife Protection in Your Area', imageId: 204 },
    { id: 5, title: '4 Changes You Can Make in Everyday Life to Save Forests in Canada', imageId: 205 },
    { id: 6, title: 'Why Planet-Positive Gifting Is The Future', imageId: 206 },
    { id: 7, title: '5 ways How Traditional Agroforestry Systems Help in Nature Conservation', imageId: 207 },
    { id: 8, title: '10 Tips About Environmental Volunteering to Teach Your Children', imageId: 208 },
    { id: 9, title: 'Here, Money Does Grow On Trees!', imageId: 209 },
    { id: 10, title: 'Forest Bathing at Coed Rhyal', imageId: 210 }
  ]

  const currentIndex = allStories.findIndex(s => s.id === blogId)
  const prevPost = currentIndex > 0 ? allStories[currentIndex - 1] : null
  const nextPost = currentIndex < allStories.length - 1 ? allStories[currentIndex + 1] : null

  // Cleanup speech synthesis on unmount or route change
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const handleListenToArticle = () => {
    if (isAudioPlaying) {
      // Stop speech synthesis
      if (speechSynthesisRef.current) {
        window.speechSynthesis.cancel()
        speechSynthesisRef.current = null
      }
      setIsAudioPlaying(false)
    } else {
      // Check if browser supports speech synthesis
      if ('speechSynthesis' in window) {
        // Get the full article text
        const articleText = `${blog.title}. ${blog.content.join('. ')}`
        
        // Create speech synthesis utterance
        const utterance = new SpeechSynthesisUtterance(articleText)
        utterance.lang = 'en-US'
        utterance.rate = 1.0
        utterance.pitch = 1.0
        utterance.volume = 1.0
        
        // Handle events
        utterance.onend = () => {
          setIsAudioPlaying(false)
          speechSynthesisRef.current = null
        }
        
        utterance.onerror = (event) => {
          console.error('Speech synthesis error:', event)
          setIsAudioPlaying(false)
          speechSynthesisRef.current = null
        }
        
        // Store reference and start speaking
        speechSynthesisRef.current = utterance
        window.speechSynthesis.speak(utterance)
        setIsAudioPlaying(true)
      } else {
        // Fallback: try audio element if speech synthesis is not available
        if (audioRef.current) {
          audioRef.current.play()
            .then(() => setIsAudioPlaying(true))
            .catch((error) => {
              console.error('Audio playback error:', error)
              alert('Audio playback is not supported in your browser. Please use a modern browser with text-to-speech support.')
            })
        } else {
          alert('Text-to-speech is not supported in your browser. Please use a modern browser.')
        }
      }
    }
  }

  const handleDownload = () => {
    // Create a simple text file with the article content
    const content = `${blog.title}\n\n${blog.content.join('\n\n')}`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${blog.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Get all tags from Figma for Tags Cloud
  const allTags = [
    { name: 'ancient woodland', count: 2 },
    { name: 'Asia', count: 21 },
    { name: 'biodiversity', count: 6 },
    { name: 'bird conservation', count: 2 },
    { name: 'Canada', count: 3 },
    { name: 'carbon emissions', count: 7 },
    { name: 'climate change', count: 15 },
    { name: 'conservationist', count: 6 },
    { name: 'deforestation', count: 5 },
    { name: 'Devendra Singh', count: 2 },
    { name: 'endangered species', count: 4 },
    { name: 'environmental conservation', count: 3 },
    { name: 'environmental protection', count: 4 },
    { name: 'Europe', count: 21 },
    { name: 'forest protection', count: 2 },
    { name: 'Germany', count: 2 },
    { name: 'global warming', count: 9 },
    { name: 'habitat protection', count: 2 },
    { name: 'India', count: 14 },
    { name: 'marine conservation', count: 6 },
    { name: 'marine habitat', count: 2 },
    { name: 'Middle East', count: 2 },
    { name: 'natural habitat', count: 6 },
    { name: 'nature conservation', count: 2 },
    { name: 'North America', count: 3 },
    { name: 'oak woodland', count: 2 },
    { name: 'plastic recycling', count: 2 },
    { name: 'protection of ecosystems', count: 2 },
    { name: 'recycling', count: 4 },
    { name: 'rewilding', count: 5 },
    { name: 'save environment', count: 4 },
    { name: 'save forests', count: 11 },
    { name: 'save species', count: 3 },
    { name: 'save the ocean', count: 2 },
    { name: 'sustainability', count: 4 },
    { name: 'The Nature Conservancy', count: 2 },
    { name: 'tree planting', count: 2 },
    { name: 'United Kingdom', count: 14 },
    { name: 'Wales', count: 3 },
    { name: 'wildlife photography', count: 2 },
    { name: 'wildlife protection', count: 4 },
    { name: 'women employment', count: 3 },
    { name: 'woodland', count: 2 }
  ]

  return (
    <>
      <SEO
        title={`${blog.title} - Stories that inspire us`}
        description={blog.content[0] || 'Read inspiring stories about conservation and environmental action.'}
      />

      {/* Hidden audio element for listen functionality */}
      <audio
        ref={audioRef}
        onEnded={() => setIsAudioPlaying(false)}
        onPlay={() => setIsAudioPlaying(true)}
        onPause={() => setIsAudioPlaying(false)}
        onError={(e) => {
          console.error('Audio playback error:', e)
          setIsAudioPlaying(false)
        }}
        style={{ display: 'none' }}
      >
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className={styles.blogDetailContainer}>
        {/* Hero Image Section */}
        <section className={styles.heroImageSection}>
          <img
            src={`https://picsum.photos/1440/600?random=${blog.imageId}`}
            alt={blog.title}
            className={styles.heroImage}
          />
        </section>

        {/* Article Header Section */}
        <section className={styles.articleHeaderSection}>
          <div className={styles.articleHeaderContainer}>
            <div className={styles.articleTitleRow}>
              <h1 className={styles.articleTitle}>{blog.title}</h1>
              <div className={styles.viewsCount}>
                <span className={styles.viewsIcon}>👁</span>
                <span>{blog.views} Views</span>
              </div>
            </div>

            <div className={styles.articleActionsRow}>
              <button
                className={styles.listenButton}
                onClick={handleListenToArticle}
                aria-label="Listen to this article"
              >
                <img src={playIcon} alt="Play" className={styles.listenButtonIcon} />
                LISTEN TO THIS ARTICLE
              </button>
              <button
                className={styles.downloadButton}
                onClick={handleDownload}
                aria-label="Download article"
              >
                DOWNLOAD
                <img src={downloadIcon} alt="Download" className={styles.downloadButtonIcon} />
              </button>
            </div>
          </div>
        </section>

        {/* Article Content Section */}
        <section className={styles.articleContentSection}>
          <div className={styles.articleContentContainer}>
            {/* Main Content */}
            <div className={styles.articleMainContent}>
              <div className={styles.articleText}>
                {blog.content.map((paragraph, index) => {
                  // Check if paragraph starts with a number (numbered list item)
                  const isNumbered = /^\d+\./.test(paragraph)
                  const isBoldHeading = isNumbered && paragraph.includes(':')
                  
                  if (isBoldHeading) {
                    const [heading, ...rest] = paragraph.split(':')
                    return (
                      <div key={index} className={styles.articleParagraph}>
                        <strong className={styles.numberedHeading}>{heading}:</strong>
                        <span>{rest.join(':')}</span>
                      </div>
                    )
                  }
                  
                  return (
                    <p key={index} className={styles.articleParagraph}>
                      {paragraph}
                    </p>
                  )
                })}
              </div>

              {/* Feedback Section */}
              <div className={styles.feedbackSection}>
                <div className={styles.feedbackBox}>
                  <div className={styles.feedbackIcon}>
                    <img src={shareIcon} alt="Share" className={styles.shareIconImage} />
                  </div>
                  <p className={styles.feedbackText}>
                    Did you enjoy this article? Share with friends to inspire positive action.
                  </p>
                  <div className={styles.feedbackAvatar}>
                    <img
                      src={`https://i.pravatar.cc/150?img=${blog.id}`}
                      alt="Author"
                      className={styles.avatarImage}
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Section */}
              <div className={styles.navigationSection}>
                {prevPost && (
                  <Link to={`/stories-that-inspire/${prevPost.id}`} className={styles.navLink}>
                    <div className={styles.navImageWrapper}>
                      <img
                        src={`https://picsum.photos/150/150?random=${prevPost.imageId}`}
                        alt={prevPost.title}
                        className={styles.navImage}
                      />
                    </div>
                    <div className={styles.navContent}>
                      <span className={styles.navLabel}>← Previous Post</span>
                      <span className={styles.navTitle}>{prevPost.title}</span>
                    </div>
                  </Link>
                )}
                {nextPost && (
                  <Link to={`/stories-that-inspire/${nextPost.id}`} className={`${styles.navLink} ${styles.navLinkRight}`}>
                    <div className={styles.navContent}>
                      <span className={styles.navLabel}>Next Post →</span>
                      <span className={styles.navTitle}>{nextPost.title}</span>
                    </div>
                    <div className={styles.navImageWrapper}>
                      <img
                        src={`https://picsum.photos/150/150?random=${nextPost.imageId}`}
                        alt={nextPost.title}
                        className={styles.navImage}
                      />
                    </div>
                  </Link>
                )}
              </div>
            </div>

            {/* Tags Cloud Sidebar - Right Side */}
            <aside className={styles.tagsSidebar}>
              <h2 className={styles.tagsHeading}>Tags Cloud</h2>
              <div className={styles.tagsList}>
                {allTags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/stories-that-inspire?tag=${tag.name}`}
                    className={styles.tagItem}
                  >
                    {tag.name} ({tag.count})
                  </Link>
                ))}
              </div>
            </aside>
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
      </div>
    </>
  )
}

