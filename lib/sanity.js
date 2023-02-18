import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'ka46ekxc',
  dataset: 'production',
  apiVersion: '2023-02-16', // use current UTC date - see "specifying API version"!
  token:
    'skRD9AIGEy1JLg63vpLotLBHsrczSwYdHrk5Hm51ZH3W2nNqu3wH38FccAyqAeFZlhS0hSKRgTtDfxl41L29e4n5JZBjZ5SsFslpocFmlsiXuRx5CgWTg40weZFDvJalKWTD0MB91LWPY0QyK4wKVsndJAniEBNkldJtEnyohtBQgp3g2eSe', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})