import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { darken } from 'polished'

import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'minimal'
>

const WrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 4.35rem;
    font-size: ${theme.font.sizes.medium};
    padding: 0 ${theme.spacings.medium};

    ${media.greaterThan('medium')`
    height: 5rem;
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    `}
  `,
  withIcons: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  minimal: (theme: DefaultTheme) => css`
    background: transparent;
    color: ${theme.colors.primary};

    &:hover {
      background: transparent;
      color: ${darken(0.2, theme.colors.primary)};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    text-decoration: none;
    cursor: pointer;

    font-family: ${theme.font.family};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};

    color: ${theme.colors.white};
    background: linear-gradient(
      178.59deg,
      #ff5f5f -14.51%,
      #f062c0 102.86%,
      #f23131 102.86%
    );

    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.secondary};
    }

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 100%),
        linear-gradient(
          178.59deg,
          #ff5f5f -14.51%,
          #f062c0 102.86%,
          #f23131 102.86%
        );
      border-radius: 4px;
    }

    ${!!size && WrapperModifiers[size](theme)}
    ${!!fullWidth && WrapperModifiers.fullWidth()}
    ${!!hasIcon && WrapperModifiers.withIcons(theme)}
    ${!!minimal && WrapperModifiers.minimal(theme)}
    ${disabled && WrapperModifiers.disabled()};
  `}
`
