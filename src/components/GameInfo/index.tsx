import Heading from 'components/Heading'
import Button from 'components/Button'
import Ribbon from 'components/Ribbon'

import * as S from './styles'

import { ShoppingCart as CartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Heart as HeartIcon } from '@styled-icons/boxicons-regular/Heart'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <S.Description>{description}</S.Description>
    <Ribbon backgroundColor="secondary">{price}</Ribbon>
    <S.ButtonWrapper>
      <Button icon={<CartIcon />}>Add to cart</Button>
      <Button icon={<HeartIcon />} minimal>
        Wishlist
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default GameInfo
