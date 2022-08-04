import { useRouter } from 'next/router'
import Game, { GameProps } from 'templates/Game'
import gamesMock from 'components/CardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import { GetStaticProps } from 'next'

const apolloClient = initializeApollo()

export default function Index(props: GameProps) {
  const router = useRouter()

  if (router.isFallback) return <div>Loading...</div>

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug: slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  return {
    props: {
      revalidate: 60,
      cover: game.cover?.src,
      gameInfo: {
        title: game.name,
        description: game.short_description,
        price: '$49.99'
      },
      gallery: game.gallery,
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((plataform) => plataform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((genre) => genre.name)
      },
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}
