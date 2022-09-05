import Input from 'components/Input'
import Button from 'components/Button'
import Form, { FormLoading, FormError } from 'components/Form'

import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { FieldErrors, signUpValidate } from 'utils/validations'
import { signIn } from 'next-auth/client'

import {
  AccountCircle,
  Email,
  ErrorOutline,
  Lock
} from '@styled-icons/material-outlined'

const FormSignUp = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) =>
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      ),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setFormError('')

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
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
          id="username"
          name="username"
          placeholder="Username"
          icon={<AccountCircle />}
          type="text"
          error={fieldError?.username}
          onInputChange={(v) => handleInput('username', v)}
        />
        <Input
          id="email"
          name="email"
          placeholder="Email"
          icon={<Email />}
          type="text"
          error={fieldError?.email}
          autoComplete="username"
          onInputChange={(v) => handleInput('email', v)}
        />
        <Input
          id="password"
          name="password"
          placeholder="Password"
          icon={<Lock />}
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
        />
        <Input
          id="confirm_password"
          name="confirm_password"
          placeholder="Confirm password"
          icon={<Lock />}
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput('confirm_password', v)}
        />
        <Button size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>
      </form>
    </Form>
  )
}

export default FormSignUp
