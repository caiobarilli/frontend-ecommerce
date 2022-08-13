import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Container } from 'components/Container'

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 26rem 1fr;
    gap: ${theme.grid.gutter};
    `}
  `}
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    > svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const ReloadSpin = styled.div`
  ${({ theme }) => css`
    svg {
      width: 6rem;
      margin: 4rem auto;
      display: table;
      color: ${theme.colors.primary};
      animation-name: spin;
      animation-duration: 500ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `}

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const FloatingButton = styled.div`
  svg {
    animation-name: float;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes float {
    0% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-1rem);
    }
    100% {
      transform: translatey(0);
    }
  }
`
