import styled, { css } from 'styled-components'

import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  position: relative;
`

type SideProps = {
  src: string
}

export const SideContent = styled.div<SideProps>`
  ${({ theme, src }) => css`
    display: none;
    ${media.greaterThan('medium')`
      height: 100vh;
      width: 74rem;
      position: relative;
      padding: ${theme.spacings.xsmall};
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      background-image: url(${src});
      background-size: cover;

      > * {
        position: relative;
        z-index: ${theme.layers.base};
      }

      &::before {
        content: '';
        height: 100vh;
        width: 100%;
        background-color: black;
        opacity: .74;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
      }
    `}
  `}
`

export const SubTitle = styled.h4`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-top: ${theme.spacings.medium};

    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }
  `}
`

export const MainContent = styled.section`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    ${media.greaterThan('medium')`
      width: calc(100% - 47rem);
    `}

    h2 {
      margin: ${theme.spacings.small} 0;
    }
  `}
`

export const FormContainer = styled.div`
  width: 35rem;
`

export const Footer = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    align-self: center;
  `}
`
