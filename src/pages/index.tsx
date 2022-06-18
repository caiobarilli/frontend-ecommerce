import Home, { HomeProps } from 'templates/Home'

import Banners from 'components/BannerSlider/mock'
import Cards from 'components/CardSlider/mock'
import Highlight from 'components/Highlight/mock'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: Banners,
      newGames: Cards,
      mostPopularHighlight: Highlight,
      mostPopularGames: Cards,
      upcommingGames: Cards,
      upcommingHighligth: Highlight,
      upcommingMoreGames: Cards,
      freeGames: Cards,
      freeHighligth: Highlight
    }
  }
}
