import Menu from 'components/Menu'
import Heading from 'components/Heading'
import Footer from 'components/Footer'

import { Container } from 'components/Container'

import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { CardProps } from 'components/Card'
import CardSlider from 'components/CardSlider'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

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
      <Container>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight
          {...mostPopularHighlight}
          imageUrl="img/red-dead-float.png"
        />
      </Container>
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <Container>
        <CardSlider items={mostPopularGames} color="white" />
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
        <CardSlider items={upcommingGames} color="white" />
        <Highlight
          {...upcommingHighligth}
          alignment="left"
          imageUrl="img/red-dead-float.png"
        />
        <CardSlider items={upcommingMoreGames} color="white" />
      </Container>
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
        <Highlight {...freeHighligth} />
        <CardSlider items={freeGames} color="white" />
      </Container>
    </S.SectionFreeGames>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
