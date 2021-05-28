import React, { FC } from 'react'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import {
  HeaderSection,
  HeaderSectionProps,
} from 'src/components/group/header-section'

type GroupLandingProps = HeaderSectionProps

export const GroupLanding: FC<GroupLandingProps> = ({ acter }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <HeaderSection acter={acter} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  })
)
