import Menu from 'components/Menu'
import Heading from 'components/Heading'
import Footer from 'components/Footer'

import MediaMatch from 'components/MediaMatch'
import { Container } from 'components/Container'

import BannerSlider from 'components/BannerSlider'
import CardSlider from 'components/CardSlider'
import Showcase from 'components/Showcase'

import { CardProps } from 'components/Card'
import { BannerProps } from 'components/Banner'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type HomeProps = {
  banners: BannerProps[]
  newGames: CardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: CardProps[]
  upcommingGames: CardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: CardProps[]
  freeGames: CardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeProps) => (
  <section>
    <Container larger>
      <Menu />
    </Container>

    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <MediaMatch greaterThan="large">
          <Heading lineLeft lineColor="secondary" color="black">
            News
          </Heading>
        </MediaMatch>
        <MediaMatch lessThan="large">
          <Heading lineLeft lineColor="secondary">
            News
          </Heading>
        </MediaMatch>
        <CardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <S.SectionMostPopular>
      <Showcase
        lineLeft
        title="Most Popular"
        Games={mostPopularGames}
        Highligth={mostPopularHighlight}
        arrowColors="white"
        titleColor="white"
        lineColor="primary"
      />
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <Showcase
        lineLeft
        Games={upcommingMoreGames}
        Highligth={upcommingHighligth}
        arrowColors="white"
        titleColor="white"
      >
        <Heading lineLeft lineColor="primary">
          Upcomming
        </Heading>
        <CardSlider items={upcommingGames} color="white" />
      </Showcase>
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <Showcase
        lineLeft
        title="Free Games"
        Games={freeGames}
        Highligth={freeHighligth}
        arrowColors="white"
        titleColor="white"
        lineColor="primary"
      />
    </S.SectionFreeGames>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
