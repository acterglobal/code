import React, { FC } from 'react'
import { Container, createStyles, makeStyles } from '@material-ui/core'
import { TopBar } from 'src/components/layout/top-bar'
import { Sidebar, SidebarProps } from 'src/components/layout/side-bar'

export interface LayoutProps extends SidebarProps {
  children: React.ReactNode
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
