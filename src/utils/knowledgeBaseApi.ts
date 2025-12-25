/**
 * Knowledge Base API
 * Functions to interact with WordPress Knowledge Base API
 */

const KB_API_BASE = 'https://www.sacredgroves.earth/knowledgebase/wp-json/wp/v2'

// Types
export interface KnowledgeBaseDoc {
  id: number
  date: string
  date_gmt: string
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  doc_category?: number[]
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
  }
}

export interface KnowledgeBaseCategoryType {
  id: number
  count: number
  description: string
  link: string
  name: string
  slug: string
  taxonomy: string
  parent: number
}

export interface FetchDocsParams {
  search?: string
  doc_category?: number
  per_page?: number
  page?: number
  order?: 'asc' | 'desc'
  orderby?: 'date' | 'title' | 'relevance'
  slug?: string
}

interface FetchDocsByCategorySlugResult {
  category: KnowledgeBaseCategoryType
  docs: KnowledgeBaseDoc[]
}

/**
 * Fetch all documents with optional filters
 */
export async function fetchAllDocs(params: FetchDocsParams = {}): Promise<KnowledgeBaseDoc[]> {
  try {
    const queryParams = new URLSearchParams()
    
    if (params.search) {
      queryParams.append('search', params.search)
    }
    
    if (params.doc_category) {
      queryParams.append('doc_category', params.doc_category.toString())
    }
    
    if (params.per_page) {
      queryParams.append('per_page', params.per_page.toString())
    } else {
      queryParams.append('per_page', '100')
    }
    
    if (params.page) {
      queryParams.append('page', params.page.toString())
    }
    
    if (params.order) {
      queryParams.append('order', params.order)
    }
    
    if (params.orderby) {
      queryParams.append('orderby', params.orderby)
    }
    
    // Add _embed to get featured images
    queryParams.append('_embed', 'true')
    
    const url = `${KB_API_BASE}/docs?${queryParams.toString()}`
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error('Error fetching docs:', error)
    throw error
  }
}

/**
 * Fetch a single document by slug
 */
export async function fetchDocBySlug(slug: string): Promise<KnowledgeBaseDoc | null> {
  try {
    const queryParams = new URLSearchParams()
    queryParams.append('slug', slug)
    queryParams.append('_embed', 'true')
    
    const url = `${KB_API_BASE}/docs?${queryParams.toString()}`
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return Array.isArray(data) && data.length > 0 ? data[0] : null
  } catch (error) {
    console.error('Error fetching doc by slug:', error)
    throw error
  }
}

/**
 * Fetch all categories
 */
export async function fetchCategories(): Promise<KnowledgeBaseCategoryType[]> {
  try {
    const queryParams = new URLSearchParams()
    queryParams.append('per_page', '100')
    queryParams.append('hide_empty', 'false')
    
    const url = `${KB_API_BASE}/doc_category?${queryParams.toString()}`
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

/**
 * Fetch documents by category slug
 */
export async function fetchDocsByCategorySlug(slug: string): Promise<FetchDocsByCategorySlugResult> {
  try {
    // First, get the category by slug
    const categoryParams = new URLSearchParams()
    categoryParams.append('slug', slug)
    
    const categoryUrl = `${KB_API_BASE}/doc_category?${categoryParams.toString()}`
    const categoryResponse = await fetch(categoryUrl)
    
    if (!categoryResponse.ok) {
      throw new Error(`HTTP error! status: ${categoryResponse.status}`)
    }
    
    const categoryData = await categoryResponse.json()
    const category = Array.isArray(categoryData) && categoryData.length > 0 ? categoryData[0] : null
    
    if (!category) {
      throw new Error(`Category with slug "${slug}" not found`)
    }
    
    // Then, fetch docs for this category
    const docs = await fetchAllDocs({
      doc_category: category.id,
      per_page: 100,
      order: 'asc',
      orderby: 'date'
    })
    
    return {
      category,
      docs
    }
  } catch (error) {
    console.error('Error fetching docs by category slug:', error)
    throw error
  }
}
