import Button from 'components/Button'
import Heading from 'components/Heading'
import Input from 'components/Input'

import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <Input
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Doe"
      />

      <Input
        name="email"
        type="email"
        placeholder="E-mail"
        initialValue="johndoe@gmail.com"
        label="E-mail"
        disabled
      />

      <Input
        name="password"
        type="password"
        placeholder="Type your password"
        label="Password"
      />

      <Input
        name="new_password"
        type="password"
        placeholder="New password"
        label="New password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
