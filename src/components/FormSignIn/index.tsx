import Button from 'components/Button'
import Input from 'components/Input'
import Form from 'components/Form'
import Link from 'next/link'

import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

import { Email, Lock } from '@styled-icons/material-outlined'

const FormSignIn = () => {
  const [values, setValues] = useState({})
  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    // sign in
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result?.url)
    }

    // jogar o erro
    console.error('email ou senha inválida')
  }

  return (
    <Form>
      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          placeholder="Email"
          icon={<Email />}
          type="email"
          onInputChange={(v) => handleInput('email', v)}
          autoComplete="username"
        />
        <Input
          id="password"
          placeholder="Password"
          icon={<Lock />}
          type="password"
          onInputChange={(v) => handleInput('password', v)}
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
      </form>
    </Form>
  )
}

export default FormSignIn
