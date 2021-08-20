import React, { FC, useEffect } from 'react'
import { Container, createStyles, makeStyles } from '@material-ui/core'
import { TopBar } from '@acter/components/layout/top-bar'
import { Sidebar } from '@acter/components/layout/side-bar'
import { Acter, Link as LinkType } from '@acter/schema'
import { SearchType } from '@acter/lib/constants'
import { useIntercom } from 'react-use-intercom'

export interface LayoutProps {
  acter?: Acter
  children: React.ReactNode
  searchType?: SearchType
  links?: LinkType[]
  dashboard?: boolean
}

export const Layout: FC<LayoutProps> = ({
  dashboard,
  links,
  children,
  searchType,
}) => {
  const classes = useStyles()

  const { boot } = useIntercom()

  useEffect(() => {
    boot()
  }, [])

  return (
    <div className={classes.root}>
      <Sidebar dashboard={dashboard} searchType={searchType} links={links} />
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
