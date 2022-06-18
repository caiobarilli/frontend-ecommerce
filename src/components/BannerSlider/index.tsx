import Banner, { BannerProps } from 'components/Banner'
import Slider from 'components/Slider'

import * as S from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings = {
  dots: true,
  arrows: false,
  infinite: false,
  vertical: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false,
        horizontalSwiping: true
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <Banner key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
