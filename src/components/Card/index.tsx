import * as S from './styles'
import { ShoppingCart as CartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Heart as HeartIcon } from '@styled-icons/boxicons-regular/Heart'
import { Heart as HeartSolidIcon } from '@styled-icons/boxicons-solid/Heart'
import Ribbon from 'components/Ribbon'
import Button from 'components/Button'

export type CardProps = {
  title: string
  developer: string
  image: string
  promotionPrice?: string
  price: string
  ribbon?: string
  favorite?: boolean
  onFavoriteHandler?: () => void
}

const Card = ({
  title,
  developer,
  image,
  promotionPrice,
  price,
  ribbon,
  onFavoriteHandler,
  favorite = false
}: CardProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <img src={image} alt={title} />
    </S.ImageWrapper>

    <S.Content>
      <S.Infos>
        <S.Title>{title}</S.Title>
        <S.DeveloperTitle>{developer}</S.DeveloperTitle>
      </S.Infos>

      <S.FavButton onClick={onFavoriteHandler} role="button">
        {favorite ? (
          <HeartSolidIcon aria-label="Remove from Wishlist" />
        ) : (
          <HeartIcon aria-label="Add to Wishlist" />
        )}
      </S.FavButton>

      <S.ActionsWrapper>
        <S.BuyWrapper>
          {!!promotionPrice && <S.Price hasDiscount>{price}</S.Price>}
          <S.Price>{promotionPrice || price}</S.Price>
          <Button size="small" icon={<CartIcon aria-label="Add to Cart" />} />
        </S.BuyWrapper>
      </S.ActionsWrapper>
    </S.Content>

    {!!ribbon && <Ribbon size="small">{ribbon}</Ribbon>}
  </S.Wrapper>
)

export default Card
