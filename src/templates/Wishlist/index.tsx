import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Card, { CardProps } from 'components/Card'
import { HighlightProps } from 'components/Highlight'
import { Grid } from 'components/Grid'
import Showcase from 'components/Showcase'

export type WishlistTemplateProps = {
  games?: CardProps[]
  recommendedGames: CardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
      <Grid>
        {games?.map((game, index) => (
          <Card key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>
      <Showcase
        title="You may like these games"
        Games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Container>
  </Base>
)

export default Wishlist
