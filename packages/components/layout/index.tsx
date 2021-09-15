import React, { FC, useEffect } from 'react'
import { useIntercom } from 'react-use-intercom'

import { Container, createStyles, makeStyles } from '@material-ui/core'

import { Sidebar } from '@acter/components/layout/side-bar'
import { TopBar } from '@acter/components/layout/top-bar'
import { SearchType } from '@acter/lib/constants'

export interface LayoutProps {
  children: React.ReactNode
  searchType?: SearchType
  dashboard?: boolean
}

export const Layout: FC<LayoutProps> = ({ children, searchType }) => {
  const classes = useStyles()

  const { boot } = useIntercom()

  useEffect(() => {
    boot()
  }, [])

  return (
    <div className={classes.root}>
      <Sidebar searchType={searchType} />
      <Container maxWidth="xl" className={classes.container}>
        <TopBar />
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
