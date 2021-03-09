import { Story } from '@storybook/react'
import { Signin } from 'src/components/user/auth/signin'

export default {
  title: 'user/Login',
  component: Signin,
}

export const LoginPage: Story = () => <Signin providers={[]} variant="signin" />
