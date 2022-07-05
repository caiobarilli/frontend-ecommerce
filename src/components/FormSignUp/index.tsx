import Input from 'components/Input'
import Button from 'components/Button'

import { Email, Lock } from '@styled-icons/material-outlined'
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle'

import Form from 'components/Form'

const FormSignUp = () => (
  <Form>
    <Input id="name" placeholder="Name" icon={<UserCircle />} type="text" />
    <Input
      id="email"
      placeholder="Email"
      icon={<Email />}
      type="email"
      autoComplete="username"
    />
    <Input
      id="password"
      placeholder="Password"
      icon={<Lock />}
      type="password"
      autoComplete="new-password"
    />
    <Input
      id="cpassword"
      placeholder="Confirm password"
      icon={<Lock />}
      type="password"
      autoComplete="new-password"
    />
    <Button> Sign in now </Button>
  </Form>
)

export default FormSignUp
