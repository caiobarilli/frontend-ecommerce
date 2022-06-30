import styled, { css } from 'styled-components'

import { RadioProps } from '.'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 2rem;
    height: 2rem;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 1rem;
    transition: background border ${theme.transition.fast};
    position: relative;
    outline: none;
    &:before {
      content: '';
      width: 1rem;
      height: 1rem;
      background-color: ${theme.colors.primary};
      border-radius: 1rem;
      position: absolute;
      top: 0.3rem;
      opacity: 0;
      transition: opacity ${theme.transition.fast};
    }
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
    &:checked {
      border-color: ${theme.colors.primary};
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<RadioProps, 'color'>>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
    cursor: pointer;
  `}
`
