import Link from 'next/link'

import Input from 'components/Input'
import Button from 'components/Button'

import { Email } from '@styled-icons/material-outlined'

import Form from 'components/Form'

const FormRecovery = () => (
  <Form>
    <Input id="email" placeholder="Email" icon={<Email />} type="email" />
    <Button> Reset password </Button>
    <>
      Don’t have an account?{' '}
      <Link href="/sign-up">
        <a>Sign up</a>
      </Link>
    </>
  </Form>
)

export default FormRecovery
