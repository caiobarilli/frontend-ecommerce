import styled, { DefaultTheme, css } from 'styled-components'
import { darken } from 'polished'

import { RibbonProps, RibbonColors } from '.'

const wrapperModifiers = {
  backgroundColor: (theme: DefaultTheme, backgroundColor: RibbonColors) => css`
    background-color: ${theme.colors[backgroundColor]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[backgroundColor])};
      border-top-color: ${darken(0.2, theme.colors[backgroundColor])};
    }
  `
}

const wrapperSizeModifiers = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    height: 3.5rem;
    right: -2rem;
    &::before {
      top: 3.5rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    height: 2.6rem;
    right: -1.5rem;
    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, backgroundColor, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!size && wrapperSizeModifiers[size](theme)}
    ${!!backgroundColor &&
    wrapperModifiers.backgroundColor(theme, backgroundColor)};
  `};
`
