import React from 'react'

import { Container } from '@material-ui/core'
import { TopBar } from 'src/components/layout/top-bar'

interface LayoutProps {
  children: any
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <TopBar />
    <Container>{children}</Container>
  </>
)
