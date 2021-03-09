import { Story } from '@storybook/react'
import { Signin } from 'src/components/user/auth/signin'

export default {
  title: 'user/Signup',
  component: Signin,
}

export const SignupPage: Story = () => (
  <Signin providers={[]} variant="signup" />
)
