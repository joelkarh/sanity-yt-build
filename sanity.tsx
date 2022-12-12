import {
    //createCurrentUserHook,
    createClient
} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config ={
    
projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "production", // "pv8y60vp"
dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // "production"
apiVersion : process.env.NEXT_PUBLIC_SANITY_API_VERSION, // "2022-11-16"

useCdn: process.env.NODE_ENV === "production", // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
}

export const sanityClient =  createClient(config)
export const urlFor = (source) => imageUrlBuilder.image(source)