import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_newGames,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import formatPrice from './format-price'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    imageUrl: banner.image?.url,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonText: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon,
      ribbonColor: banner.ribbon?.color,
      ribbonSize: banner.ribbon?.size
    })
  }))
}

export const gamesMapper = (games: QueryHome_newGames[] | null | undefined) => {
  return games?.map((game) => ({
    id: game.id,
    title: game.name,
    developer: game.developers[0].name,
    image: game.cover?.url,
    price: game.price,
    slug: '/game/' + game.slug
  }))
}

export const highlightMapper = (
  highlight: QueryHome_sections_freeGames_highlight | null | undefined
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight?.subtitle,
        buttonLabel: highlight?.buttonLabel,
        buttonUrl: highlight?.buttonLink,
        backgroundUrl: highlight?.background?.url,
        imageUrl: highlight?.floatImage?.url,
        alignment: highlight?.alignment
      }
    : {}
}

export const cartMapper = (games: QueryGames_games[] | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        img: game.cover ? game.cover.url : '',
        title: game.name,
        price: formatPrice(game.price)
      }))
    : []
}
