import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'

import { QUERY_GAMES } from 'graphql/queries/games'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: QUERY_GAMES })

  return {
    props: {
      revalidate: 60,
      games: data.games.map(
        (game: {
          name: any
          cover: { url: any }
          developers: { name: any }[]
          price: number | bigint
        }) => ({
          title: game.name,
          image: game.cover
            ? game.cover.url
            : 'https://via.placeholder.com/150',
          developer: game.developers[0].name,
          price: new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD'
          }).format(game.price)
        })
      ),
      filterItems: filterItemsMock
    }
  }
}
