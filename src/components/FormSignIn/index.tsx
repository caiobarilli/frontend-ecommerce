import Button from 'components/Button'
import Input from 'components/Input'
import Form from 'components/Form'
import Link from 'next/link'

import { Email, Lock } from '@styled-icons/material-outlined'

const FormSignIn = () => (
  <Form>
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
      autoComplete="current-password"
    />
    <Link href="/recovery">
      <a>Forgot your password?</a>
    </Link>
    <Button> Sign in now </Button>
    <>
      Don’t have an account?{' '}
      <Link href="/sign-up">
        <a>Sign up</a>
      </Link>
    </>
  </Form>
)

export default FormSignIn
