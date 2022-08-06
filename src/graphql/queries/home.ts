import { gql } from '@apollo/client'

import { BannerFragment } from 'graphql/fragments/banner'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_HOME = gql`
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

  fragment GameFragment on Game {
    name
    slug
    cover {
      url
    }
    developers {
      name
    }
    price
  }

  fragment HighlightFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      url
    }
    floatImage {
      url
    }
    buttonLabel
    buttonLink
    alignment
  }

  query QueryHome($date: Date!) {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: $date }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }

    upcomingGames: games(
      where: { release_date_gt: $date }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }

    freeGames: games(where: { price: 0 }, sort: "release_date:desc", limit: 8) {
      ...GameFragment
    }

    sections: home {
      newGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
      freeGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
      popularGames {
        title
        highlight {
          ...HighlightFragment
        }
        games {
          ...GameFragment
        }
      }
    }
  }
  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`
