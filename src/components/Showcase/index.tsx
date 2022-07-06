import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import CardSlider from 'components/CardSlider'
import { CardProps } from 'components/Card'
import { Container } from 'components/Container'

import styled from 'styled-components'

export const HighlightWrapper = styled.div`
  margin: 2rem 0;
`

export type ShowcaseProps = {
  children?: React.ReactNode
  alignment?: 'left' | 'right'
  arrowColors: 'white' | 'black'
  titleColor: 'white' | 'black'
  lineColor: 'primary' | 'secondary'
  title?: string
  lineLeft?: boolean
  Games: CardProps[]
  Highligth: HighlightProps
}

const Showcase = ({
  title,
  children,
  alignment,
  arrowColors,
  titleColor,
  lineColor,
  lineLeft,
  Games,
  Highligth
}: ShowcaseProps) => (
  <Container>
    {children}
    {!!title && (
      <Heading lineLeft={lineLeft} lineColor={lineColor} color={titleColor}>
        {title}
      </Heading>
    )}
    <HighlightWrapper>
      <Highlight {...Highligth} alignment={alignment} />
    </HighlightWrapper>
    <CardSlider items={Games} color={arrowColors} />
  </Container>
)

export default Showcase
