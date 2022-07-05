import * as S from './styles'
import Logo from 'components/Logo'
import Heading from 'components/Heading'
import Link from 'next/link'

export type AuthProps = {
  title?: string
  formTitle?: string
  srcBackground?: string
  subtitle?: React.ReactNode
  children: React.ReactNode
}

function Auth({
  formTitle,
  title = 'All your favorite games in one place',
  srcBackground = 'img/dauntless-bg.jpg',
  subtitle = (
    <>
      <strong>Won</strong> is the best and most complete gaming platform.
    </>
  ),
  children
}: AuthProps) {
  return (
    <S.Wrapper>
      <S.SideContent src={srcBackground}>
        <Link href="/">
          <a>
            <Logo size="small" id="logo_left" />
          </a>
        </Link>
        <div>
          <Heading size="large">{title}</Heading>
          <S.SubTitle>{subtitle}</S.SubTitle>
        </div>
        <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
      </S.SideContent>

      <S.MainContent>
        <Link href="/">
          <a>
            <Logo color="black" id="logo" />
          </a>
        </Link>
        <S.FormContainer>
          <Heading lineLeft lineColor="secondary" color="black">
            {formTitle}
          </Heading>
          {children}
        </S.FormContainer>
      </S.MainContent>
    </S.Wrapper>
  )
}

export default Auth
