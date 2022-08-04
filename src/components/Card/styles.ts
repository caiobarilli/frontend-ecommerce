import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.white};
    width: 30rem;
  `}
`

export const ImageWrapper = styled.a`
  height: 14rem;
  overflow: hidden;
  img {
    width: 100%;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    grid-template-areas: 'infos' 'actions';
    padding: ${theme.spacings.xxsmall};
  `}
`

export const Infos = styled.a`
  ${({ theme }) => css`
    grid-area: infos;
    padding-right: ${theme.spacings.xsmall};
    text-decoration: none;
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    line-break: anywhere;
  `}
`

export const DeveloperTitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
  `}
`

export const ActionsWrapper = styled.div`
  ${({ theme }) => css`
    grid-area: actions;
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: calc(${theme.spacings.xxsmall} / 2);
    right: ${theme.spacings.xxsmall};
    svg {
      cursor: pointer;
      width: ${theme.spacings.small};
      color: ${theme.colors.primary};
    }
  `}
`

export const BuyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

type PriceProps = {
  hasDiscount?: boolean
}

const priceModifier = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    margin-right: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xxsmall};
  `,

  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xxsmall} 0;
  `
}

export const Price = styled.div<PriceProps>`
  ${({ theme, hasDiscount }) => css`
    line-height: ${theme.font.sizes.small};
    text-align: center;
    border-radius: ${theme.border.radius};

    ${!hasDiscount && priceModifier.default(theme)}
    ${hasDiscount && priceModifier.promotional(theme)}
  `}
`
