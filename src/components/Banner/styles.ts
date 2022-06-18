import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  position: relative;
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 23rem;
    width: 100%;

    ${media.greaterThan('medium')`
      height: 58rem;
    `}
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkGray};
    padding: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      background-color: ${theme.colors.black + 'a8'};
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    margin: 0;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin: 0;
    margin-bottom: ${theme.spacings.xsmall};
    strong {
      color: ${theme.colors.primary};
    }
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.medium};
    `}
  `}
`
