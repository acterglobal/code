import React, { FC, useEffect } from 'react'
import { Container, createStyles, makeStyles } from '@material-ui/core'
import { ActerWithSlugAndType } from '@acter/lib/acter/acter-as-url'
import { TopBar } from '@acter/components/layout/top-bar'
import { Sidebar } from '@acter/components/layout/side-bar'
import { ActerType, User, Link as LinkType } from '@acter/schema'
import { SearchType } from '@acter/lib/constants'
import { useIntercom } from 'react-use-intercom'

export interface LayoutProps {
  acter?: ActerWithSlugAndType
  acterTypes?: ActerType[]
  children: React.ReactNode
  onGroupSubmit?: (groupData) => void
  searchType?: SearchType
  user?: User
  links?: LinkType[]
}

export const Layout: FC<LayoutProps> = ({
  acter,
  acterTypes,
  user,
  links,
  children,
  searchType,
  onGroupSubmit,
}) => {
  const classes = useStyles()
  const { boot } = useIntercom()

  useEffect(() => {
    boot()
  }, [])

  return (
    <div className={classes.root}>
      <Sidebar
        acter={acter}
        acterTypes={acterTypes}
        user={user}
        searchType={searchType}
        onGroupSubmit={onGroupSubmit}
        links={links}
      />
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
