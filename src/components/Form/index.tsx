import styled, { css } from 'styled-components'

export const FormWrapper = styled.form`
  ${({ theme }) => css`
    a {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.small};
      display: table;
      margin-left: auto;
    }

    a:last-child {
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.medium};
      display: inline-block;
      margin-left: 0;
    }

    button {
      display: block;
      margin: ${theme.spacings.small} 0;
      width: 100%;
    }
  `}
`

export type FormProps = {
  children: React.ReactNode
}

const Form = ({ children }: FormProps) => <FormWrapper>{children}</FormWrapper>

export default Form
