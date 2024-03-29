import Home, { HomeProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'

import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mapper'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { banners, upcomingGames, newGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY
    },
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 60,
    props: {
      banners: bannerMapper(banners),
      newGames: gamesMapper(newGames),
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections?.popularGames?.games),
      upcommingGames: gamesMapper(upcomingGames),
      upcomminghighlight: highlightMapper(sections?.upcomingGames?.highlight),
      upcommingMoreGames: gamesMapper(upcomingGames),
      freeGames: gamesMapper(freeGames),
      freehighlight: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}
