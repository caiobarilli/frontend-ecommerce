import Base from 'templates/Base'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { CardProps } from 'components/Card'
import { HighlightProps } from 'components/Highlight'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import CartList, { CartListProps } from 'components/CartList'

import { Info } from '@styled-icons/material-outlined/Info'

import * as S from './styles'

export type CartProps = {
  recommendedGames: CardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({ recommendedGames, recommendedHighlight, cards }: CartProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        <S.Content>
          <CartList />

          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </S.Content>

        <S.Text>
          <Info size={18} /> Your purchase is protected by a secure connection
          from the WON platform. By purchasing from our store you agree and
          agree to our <a href="#">terms of use.</a> After making the purchase
          you are entitled to a refund within a maximum of 30 days, without any
          additional cost, as long as the download of the purchased game has not
          occurred after your purchase.
        </S.Text>

        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        Games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
