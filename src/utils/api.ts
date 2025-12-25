/**
 * API Utility Functions
 * Centralized service for making backend API calls
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

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
