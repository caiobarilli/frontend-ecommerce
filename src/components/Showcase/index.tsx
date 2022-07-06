import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import CardSlider from 'components/CardSlider'
import { CardProps } from 'components/Card'
import { Container } from 'components/Container'

import styled from 'styled-components'

export const HighlightWrapper = styled.section`
  margin: 2rem 0;
`

export type ShowcaseProps = {
  arrowColors: 'white' | 'black'
  titleColor: 'white' | 'black'
  lineColor: 'primary' | 'secondary'
  title: string
  freeGames: CardProps[]
  freeHighligth: HighlightProps
}

const Showcase = ({
  title,
  arrowColors,
  titleColor,
  lineColor,
  freeGames,
  freeHighligth
}: ShowcaseProps) => (
  <Container>
    <Heading lineLeft lineColor={lineColor} color={titleColor}>
      {title}
    </Heading>
    <HighlightWrapper>
      <Highlight {...freeHighligth} />
    </HighlightWrapper>
    <CardSlider items={freeGames} color={arrowColors} />
  </Container>
)

export default Showcase
