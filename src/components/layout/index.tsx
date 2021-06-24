import React, { FC } from 'react'
import { Container, createStyles, makeStyles } from '@material-ui/core'
import { TopBar } from 'src/components/layout/top-bar'
import { Sidebar } from 'src/components/layout/side-bar'
import { Acter, ActerType, User, Link as LinkType } from '@schema'
import { SearchType } from '@acter/lib/constants'

export interface LayoutProps {
  acter?: Acter
  acterTypes?: ActerType[]
  children: React.ReactNode
  onGroupSubmit?: (groupData: Acter) => void
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
