import Home, { HomeProps } from 'templates/Home'

import Cards from 'components/CardSlider/mock'
import Highlight from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

const HighlightInverted = { ...Highlight, alignment: 'left' }

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  })

  return {
    props: {
      revalidate: 60, // 1 minute (in seconds)
      banners: data.banners.map((banner) => ({
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
      newGames: data.newGames.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        image: game.cover?.url,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price),
        slug: game.slug
      })),
      mostPopularHighlight: Highlight,
      mostPopularGames: Cards,
      upcommingGames: data.upcomingGames.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        image: game.cover?.url,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price),
        slug: game.slug
      })),
      upcomminghighlight: HighlightInverted,
      upcommingMoreGames: data.upcomingGames.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        image: game.cover?.url,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price),
        slug: game.slug
      })),
      freeGames: data.freeGames.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        image: game.cover?.url,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price),
        slug: game.slug
      })),
      freehighlight: Highlight
    }
  }
}
