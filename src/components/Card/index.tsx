import Link from 'next/link'
import Ribbon from 'components/Ribbon'
import CartButton from 'components/CartButton'

import { Heart as HeartIcon } from '@styled-icons/boxicons-regular/Heart'
import { Heart as HeartSolidIcon } from '@styled-icons/boxicons-solid/Heart'

import formatPrice from 'utils/format-price'

import * as S from './styles'

export type CardProps = {
  id: string
  slug: string
  title: string
  developer: string
  image: string
  promotionPrice?: number
  price: number
  ribbon?: string
  favorite?: boolean
  onFavoriteHandler?: () => void
}

const Card = ({
  id,
  slug,
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
    <Link href={`${slug}`} passHref>
      <S.ImageWrapper>
        <img src={image} alt={title} />
      </S.ImageWrapper>
    </Link>

    <S.Content>
      <Link href={`${slug}`} passHref>
        <S.Infos>
          <S.Title>{title}</S.Title>
          <S.DeveloperTitle>{developer}</S.DeveloperTitle>
        </S.Infos>
      </Link>

      <S.FavButton onClick={onFavoriteHandler} role="button">
        {favorite ? (
          <HeartSolidIcon aria-label="Remove from Wishlist" />
        ) : (
          <HeartIcon aria-label="Add to Wishlist" />
        )}
      </S.FavButton>

      <S.ActionsWrapper>
        <S.BuyWrapper>
          {!!promotionPrice && (
            <S.Price hasDiscount>{formatPrice(price)}</S.Price>
          )}
          <S.Price>{formatPrice(promotionPrice || price)}</S.Price>
          <CartButton id={id} />
        </S.BuyWrapper>
      </S.ActionsWrapper>
    </S.Content>

    {!!ribbon && <Ribbon size="small">{ribbon}</Ribbon>}
  </S.Wrapper>
)

export default Card
