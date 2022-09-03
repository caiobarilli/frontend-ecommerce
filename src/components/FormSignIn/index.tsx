import Button from 'components/Button'
import Input from 'components/Input'
import Form, { FormLoading } from 'components/Form'
import Link from 'next/link'

import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

import { Email, Lock } from '@styled-icons/material-outlined'

const FormSignIn = () => {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)

  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    // sign in
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result?.url)
    }

    setLoading(false)

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
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>
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
