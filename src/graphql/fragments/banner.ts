import { gql } from '@apollo/client'

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
    image {
      url
    }
    title
    subtitle
    button {
      label
      link
    }
    ribbon {
      color
      size
      text
    }
  }
`
