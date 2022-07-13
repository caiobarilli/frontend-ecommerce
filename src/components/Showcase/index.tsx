import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import CardSlider from 'components/CardSlider'
import { CardProps } from 'components/Card'
import { Container } from 'components/Container'

import styled from 'styled-components'

export const HighlightWrapper = styled.div`
  margin: 4rem 0 0;
`
export type ShowcaseProps = {
  children?: React.ReactNode
  arrowColors?: 'white' | 'black'
  titleColor?: 'white' | 'black'
  lineColor?: 'primary' | 'secondary'
  title?: string
  lineLeft?: boolean
  Games: CardProps[]
  highlight?: HighlightProps
}

const Showcase = ({
  title,
  children,
  arrowColors = 'white',
  titleColor,
  lineColor = 'secondary',
  lineLeft = true,
  Games,
  highlight
}: ShowcaseProps) => (
  <Container>
    {children}
    {!!title && (
      <Heading lineLeft={lineLeft} lineColor={lineColor} color={titleColor}>
        {title}
      </Heading>
    )}
    {!!highlight && (
      <HighlightWrapper>
        <Highlight {...highlight} />
      </HighlightWrapper>
    )}
    <CardSlider items={Games} color={arrowColors} />
  </Container>
)

export default Showcase
