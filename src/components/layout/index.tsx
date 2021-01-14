import React from 'react'

import { Container } from '@material-ui/core'
import { TopBar } from 'src/components/layout/top-bar'

export interface LayoutProps {
  children: any
}

export const Layout = (props: LayoutProps) => (
  <>
    <TopBar />
    <Container>{props.children}</Container>
  </>
)
