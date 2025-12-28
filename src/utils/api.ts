/**
 * API Utility Functions
 * Centralized service for making backend API calls
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const BLOG_BASE_URL = 'https://www.sacredgroves.earth/blog'

export interface LinkedInPost {
    id: number | string
    title: string
    image: string
    likes: number
    comments: number
    url?: string
    timestamp?: number
}

export interface LinkedInPostsResponse {
    success: number
    data: LinkedInPost[]
    lastUpdated: string | null
    nextUpdate: string | null
    message?: string
}

/**
 * Fetch LinkedIn posts from backend API
 */
export async function fetchLinkedInPosts(): Promise<LinkedInPost[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/general/linkedin-posts`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result: LinkedInPostsResponse = await response.json()

        if (result.success === 1 && result.data) {
            console.log('✅ LinkedIn posts fetched successfully:', result.data.length, 'posts')
            console.log('Last updated:', result.lastUpdated)
            console.log('Next update:', result.nextUpdate)
            return result.data
        } else {
            console.warn('⚠️ LinkedIn API returned no data:', result.message)
            return []
        }
    } catch (error) {
        console.error('❌ Error fetching LinkedIn posts:', error)
        // Return empty array on error - component will use fallback
        return []
    }
}

/**
 * Forest Image from CMS
 */
export type ForestImage = {
    guid: string // Image URL
    post_content: string // Title/description
    post_excerpt: string // Alt text
    post_date: string // Date string (e.g., "2025-01-15 10:30:00")
}

export type ForestImagesResponse = {
    'coed-rhyal'?: ForestImage[]
    [key: string]: ForestImage[] | undefined
}

/**
 * Fetch forest images from CMS by category
 */
export async function fetchForestImages(category: string = 'coed-rhyal'): Promise<ForestImage[]> {
    try {
        const url = `${BLOG_BASE_URL}/journaldata/attachment/category`
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: ForestImagesResponse = await response.json()
        const images = data[category] || []

        console.log(`✅ Forest images fetched successfully for ${category}:`, images.length, 'images')
        return images
    } catch (error) {
        console.error(`❌ Error fetching forest images for ${category}:`, error)
        // Return empty array on error - component will use fallback
        return []
    }
}
