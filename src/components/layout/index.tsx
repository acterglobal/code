import React, { FC } from 'react'

import { Container, createStyles, makeStyles } from '@material-ui/core'
import { TopBar } from 'src/components/layout/top-bar'
import { Sidebar } from 'src/components/layout/side-bar'

import { Acter, User } from '@schema'

export interface LayoutProps {
  acter?: Acter
  user?: User
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ acter, user, children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Sidebar acter={acter} user={user} />
      <Container maxWidth="xl" className={classes.container}>
        <TopBar user={user} />
        {children}
      </Container>
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
    },
    container: {
      flexGrow: 1,
      margin: '0 auto',
      padding: 0,
    },
  })
)
