import Heading from 'components/Heading'
import Button from 'components/Button'
import Ribbon from 'components/Ribbon'
import CartButton from 'components/CartButton'

import * as S from './styles'

import { Heart as HeartIcon } from '@styled-icons/boxicons-regular/Heart'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: string
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <S.Description>{description}</S.Description>
    <Ribbon backgroundColor="secondary">{price}</Ribbon>
    <S.ButtonWrapper>
      <CartButton id={id} size="large" hasText />
      <Button icon={<HeartIcon />} minimal>
        Wishlist
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default GameInfo
