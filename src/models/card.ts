export interface Card {
  name: string
  cropName: string
  tags: string[]
  benifit: string[]
  promotion?: {
    title: string
    terms: string
  }
  payback?: string
}

export interface AdBanner {
  title: string
  description: string
  link: string
}
