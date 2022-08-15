import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'

import Game, { GameProps } from 'templates/Game'

import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_HOME } from 'graphql/queries/home'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'

import { gamesMapper, highlightMapper } from 'utils/mapper'

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
  const {
    data: { games }
  } = await apolloClient.query<QueryGameBySlug, QueryGameBySlugVariables>({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!games.length) {
    return { notFound: true }
  }

  const game = games[0]

  const TODAY = '2020-01-01'

  const {
    data: { sections, upcomingGames }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY
    }
  })

  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    revalidate: 60,
    props: {
      cover: game.cover?.src,
      gameInfo: {
        title: game.name,
        description: game.short_description,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price)
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
      upcommingGames: gamesMapper(upcomingGames),
      upcommingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      recommendedGames: gamesMapper(recommended?.section?.games)
    }
  }
}
