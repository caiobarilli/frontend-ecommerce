import Base from 'templates/Base'
import Heading from 'components/Heading'
import Empty from 'components/Empty'
import Showcase from 'components/Showcase'
import Card, { CardProps } from 'components/Card'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'

export type WishlistTemplateProps = {
  games?: CardProps[]
  recommendedGames: CardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  games = [],
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <Card key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}
      <Divider />
      <Showcase
        title="You may like these games"
        Games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Container>
  </Base>
)

export default Wishlist
