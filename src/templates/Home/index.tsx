import Heading from 'components/Heading'
import BannerSlider from 'components/BannerSlider'
import CardSlider from 'components/CardSlider'
import Showcase from 'components/Showcase'

import { CardProps } from 'components/Card'
import { BannerProps } from 'components/Banner'
import { HighlightProps } from 'components/Highlight'

import MediaMatch from 'components/MediaMatch'
import { Container } from 'components/Container'

import Base from 'templates/Base'

import * as S from './styles'

export type HomeProps = {
  banners: BannerProps[]
  newGames: CardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: CardProps[]
  upcommingGames: CardProps[]
  upcomminghighlight: HighlightProps
  upcommingMoreGames: CardProps[]
  freeGames: CardProps[]
  freehighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcomminghighlight,
  upcommingMoreGames,
  freeGames,
  freehighlight
}: HomeProps) => (
  <Base>
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
        title="Most Popular"
        Games={mostPopularGames}
        highlight={mostPopularHighlight}
      />
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <Showcase Games={upcommingMoreGames} highlight={upcomminghighlight}>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
        <CardSlider items={upcommingGames} color="white" />
      </Showcase>
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <Showcase
        title="Free Games"
        Games={freeGames}
        highlight={freehighlight}
      />
    </S.SectionFreeGames>
  </Base>
)

export default Home
