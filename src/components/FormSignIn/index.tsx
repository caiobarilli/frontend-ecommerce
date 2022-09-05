import Button from 'components/Button'
import Input from 'components/Input'
import Form, { FormLoading, FormError } from 'components/Form'
import Link from 'next/link'

import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'

import { FieldErrors, signInValidate } from 'utils/validations'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

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

    setFormError('username or password is invalid')
  }

  return (
    <Form>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          placeholder="Email"
          icon={<Email />}
          type="email"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          autoComplete="username"
        />
        <Input
          id="password"
          name="password"
          placeholder="Password"
          icon={<Lock />}
          type="password"
          error={fieldError?.password}
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
