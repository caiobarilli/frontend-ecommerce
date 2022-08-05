import Home, { HomeProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, upcomingGames, newGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  })

  console.log(sections?.popularGames?.highlight?.alignment)

  return {
    props: {
      // revalidate: 60, // 1 minute (in seconds)
      banners: banners.map((banner) => ({
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
      })),
      newGames: newGames.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        image: game.cover?.url,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price),
        slug: game.slug
      })),
      mostPopularHighlight: {
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        buttonUrl: sections?.popularGames?.highlight?.buttonLink,
        backgroundUrl: sections?.popularGames?.highlight?.background?.url,
        imageUrl: sections?.popularGames?.highlight?.floatImage?.url,
        alignment: sections?.popularGames?.highlight?.alignment
      },
      mostPopularGames: sections?.popularGames?.games?.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        image: game.cover?.url,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price),
        slug: game.slug
      })),
      upcommingGames: upcomingGames.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        image: game.cover?.url,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price),
        slug: game.slug
      })),
      upcomminghighlight: {
        title: sections?.upcomingGames?.highlight?.title,
        subtitle: sections?.upcomingGames?.highlight?.subtitle,
        buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
        buttonUrl: sections?.upcomingGames?.highlight?.buttonLink,
        backgroundUrl: sections?.upcomingGames?.highlight?.background?.url,
        imageUrl: sections?.upcomingGames?.highlight?.floatImage?.url,
        alignment: sections?.upcomingGames?.highlight?.alignment
      },
      upcommingMoreGames: upcomingGames.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        image: game.cover?.url,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price),
        slug: game.slug
      })),
      freeGames: freeGames.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        image: game.cover?.url,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price),
        slug: game.slug
      })),
      freehighlight: {
        title: sections?.freeGames?.highlight?.title,
        subtitle: sections?.freeGames?.highlight?.subtitle,
        buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
        buttonUrl: sections?.freeGames?.highlight?.buttonLink,
        backgroundUrl: sections?.freeGames?.highlight?.background?.url,
        imageUrl: sections?.freeGames?.highlight?.floatImage?.url,
        alignment: sections?.freeGames?.highlight?.alignment
      }
    }
  }
}
