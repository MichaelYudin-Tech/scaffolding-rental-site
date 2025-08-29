import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'fmlm6srn', // Replace with your Sanity project ID
  dataset: 'production',
  useCdn: true, // Enable for faster, cached responses
  apiVersion: '2025-02-06', // Use current date
})

// Helper function for generating image URLs
const builder = imageUrlBuilder(sanityClient)
export function urlFor(source) {
  return builder.image(source)
}