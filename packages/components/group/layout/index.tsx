import React, { FC, ReactNode } from 'react'

import { Box, createStyles, makeStyles } from '@material-ui/core'

import { HeaderSection } from '@acter/components/group/layout/header-section'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'

interface LandingPageLayoutProps {
  children: ReactNode
}
export const LandingPageLayout: FC<LandingPageLayoutProps> = ({ children }) => {
  const classes = useStyles()

  const { acter, fetching: acterLoading } = useActer()

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  return (
    <Box className={classes.root}>
      <HeaderSection />
      {children}
    </Box>
  )
}

const useStyles = makeStyles(
  createStyles({
    root: {
      height: '100%',
    },
  })
)
