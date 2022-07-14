import styled, { css, DefaultTheme } from 'styled-components'

import { InputProps } from '.'

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `,
  hasError: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      color: ${theme.colors.red};
    }

    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
  `
}

type WrapperProps = Pick<InputProps, 'disabled' | 'hasError'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, hasError }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
    ${disabled && wrapperModifiers.disabled(theme)};
    ${hasError && wrapperModifiers.hasError(theme)};
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

type IconPositionProp = Pick<InputProps, 'iconPosition'>

export const Input = styled.input<IconPositionProp>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding${'-' + iconPosition}: calc( ${theme.spacings.xxsmall} / 2 );
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    height: 4.2rem;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.label<IconPositionProp>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.4rem;
    cursor: pointer;
    margin${'-' + iconPosition}: calc( ${theme.spacings.xxsmall} / 4 );
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};
    & > svg {
      width: 100%;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
