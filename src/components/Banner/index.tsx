import * as S from './styles'

import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import MediaMatch from 'components/MediaMatch'

export type BannerProps = {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  imageUrl: string
  ribbon?: string
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const Banner = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageUrl,
  ribbon,
  ribbonSize,
  ribbonColor
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <MediaMatch greaterThan="large">
        <Ribbon backgroundColor={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      </MediaMatch>
    )}

    <S.Image src={imageUrl} role="image" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonText}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
