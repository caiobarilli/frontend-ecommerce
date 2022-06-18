import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'backgroundUrl' | 'alignment'>

const WrapperModifier = {
  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2fr 1.3fr;

    ${Content} {
      text-align: left;
    }

    ${Image} {
      margin-left: auto;
    }
  `,
  right: () => css`
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ backgroundUrl, alignment }) => css`
    position: relative;
    background-image: url(${backgroundUrl});
    background-position: center;
    background-size: cover;
    height: 23rem;
    display: grid;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.65);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    ${WrapperModifier[alignment!]}
  `}
`
export const Image = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    align-self: end;
    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) =>
    css`
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.white};
    `}
`

export const Subtitle = styled.h3`
  ${({ theme }) =>
    css`
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.light};
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.medium};
      color: ${theme.colors.white};
    `}
`
