import React, { FC } from 'react'

import { createStyles, makeStyles, Theme, Box } from '@material-ui/core'

import { Drawer } from '@acter/components/util/drawer'
import { useActer } from '@acter/lib/acter/use-acter'

interface ManageContentProps {
  openDrawer: boolean
  setDrawer: (open: boolean) => void
}
export const ManageContent: FC<ManageContentProps> = ({
  openDrawer,
  setDrawer,
}) => {
  const classes = useStyles()
  const { acter } = useActer()
  if (!acter) return null

  return (
    <Drawer
      heading={acter.name}
      open={openDrawer}
      handleClose={() => setDrawer(false)}
    >
      <Box className={classes.root}></Box>
    </Drawer>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 530,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      '& .MuiTab-wrapper': {
        textTransform: 'capitalize',
        fontWeight: theme.typography.fontWeightLight,
      },
      '& .Mui-selected': {
        color: theme.palette.secondary.dark,
        '& .MuiTab-wrapper': {
          fontWeight: theme.typography.fontWeightBold,
        },
      },
    },
  })
)
