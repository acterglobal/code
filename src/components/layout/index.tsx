import React, { FC } from 'react'
import { Container, createStyles, makeStyles } from '@material-ui/core'
import { TopBar } from 'src/components/layout/top-bar'
import { Sidebar } from 'src/components/layout/side-bar'
import { Acter, ActerType, User } from '@schema'

export interface LayoutProps {
  acter?: Acter
  acterTypes?: ActerType[]
  children: React.ReactNode
  onCreateGroup?: (groupData: Acter) => void
  user?: User
}

export const Layout: FC<LayoutProps> = ({
  acter,
  acterTypes,
  user,
  children,
  onCreateGroup,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Sidebar
        acter={acter}
        acterTypes={acterTypes}
        user={user}
        onCreateGroup={onCreateGroup}
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
