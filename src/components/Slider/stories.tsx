import { Story, Meta } from '@storybook/react'
import { Settings } from 'react-slick'
import styled from 'styled-components'
import Slider from '.'

export default {
  title: 'Slider/Slider',
  component: Slider
} as Meta

const settingsHorizontal: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Slide = styled.div`
  background-color: red;
  height: 200px;
`

export const Horizontal: Story = () => (
  <Slider settings={settingsHorizontal}>
    <Slide>item 1</Slide>
    <Slide>item 2</Slide>
    <Slide>item 3</Slide>
    <Slide>item 4</Slide>
    <Slide>item 5</Slide>
  </Slider>
)

const settingsVertical: Settings = {
  dots: true,
  vertical: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const Vertical: Story = () => (
  <Slider settings={settingsVertical}>
    <Slide>item 1</Slide>
    <Slide>item 2</Slide>
    <Slide>item 3</Slide>
    <Slide>item 4</Slide>
    <Slide>item 5</Slide>
  </Slider>
)
