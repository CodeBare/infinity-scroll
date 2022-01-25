export default interface IUnsplash {
    alt_description: null | string
    blur_hash: string
    categories: any[]
    color: string
    created_at: Date
    current_user_collections: any[]
    description: null | string
    downloads: number
    exif: {
        aperture: string | null
        exposure_time: string | null
        focal_length: string | null
        iso: number | null
        make: string | null
        model: string | null
        name: string | null
    }
    height: number
    id: string
    liked_by_user: boolean
    likes: number
    links: {
        download: string
        download_location: string
        html: string
        self: string
    }
    location: {
        city: string | null
        country: string | null
        name: string | null
        position: {
            latitude: number | null
            longitude: number | null
        }
        title: string | null
    }
    promoted_at: Date
    sponsorship: null | string
    topic_submissions: object
    urls: {
        full: string
        raw: string
        regular: string
        small: string
        thumb: string
    }
    user: {
        accepted_tos: boolean
        bio: string | null
        first_name: string
        for_hire: boolean
        id: string
        instagram_username: string | null
        last_name: string
        links: {
            followers: string
            following: string
            html: string
            likes: string
            photos: string
            portfolio: string
            self: string
        }
        location: null
        name: string
        portfolio_url: string | null
        profile_image: {
            small: string
            medium: string
            large: string
        }
        social: {
            instagram_username: string,
            portfolio_url: string | null
            paypal_email: string | null
            twitter_username: string | null
        }
        total_collections: number
        total_likes: number
        total_photos: number
        twitter_username: string | null
        updated_at: Date
        username: string
    }
    views: number
    width: number
}