import React from 'react'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { TopBar } from 'src/components/layout/top-bar'
import { relative } from 'path'

const useStyles = makeStyles({
  container: {
    position: 'relative',
  },
})

export interface LayoutProps {
  children: any
}

export const Layout = (props: LayoutProps) => {
  const classes = useStyles()

  return (
    <>
      <TopBar />
      <Container>{props.children}</Container>
    </>
  )
}
