import React, { FC, ReactNode } from 'react'

import { Box, createStyles, makeStyles } from '@material-ui/core'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { HeaderSection } from '@acter/components/group/layout/header-section'
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
