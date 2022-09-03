import Input from 'components/Input'
import Button from 'components/Button'

import { Email, Lock } from '@styled-icons/material-outlined'
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle'

import Form, { FormLoading } from 'components/Form'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { MUTATION_REGISTER } from 'graphql/mutations/register'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const [createUser, { loading }] = useMutation(MUTATION_REGISTER)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

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
      <form onSubmit={handleSubmit}>
        <Input
          id="username"
          placeholder="Username"
          icon={<UserCircle />}
          type="text"
          onInputChange={(v) => handleInput('username', v)}
        />
        <Input
          id="email"
          placeholder="Email"
          icon={<Email />}
          type="email"
          autoComplete="username"
          name="email"
          onInputChange={(v) => handleInput('email', v)}
        />
        <Input
          id="password"
          placeholder="Password"
          icon={<Lock />}
          type="password"
          autoComplete="password"
          name="password"
          onInputChange={(v) => handleInput('password', v)}
        />
        <Input
          id="confirm-password"
          placeholder="Confirm password"
          icon={<Lock />}
          type="password"
          autoComplete="cpassword"
          name="confirm-password"
          onInputChange={(v) => handleInput('confirm-password', v)}
        />
        <Button size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>
      </form>
    </Form>
  )
}

export default FormSignUp
