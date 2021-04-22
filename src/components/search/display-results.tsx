import React, { FC } from 'react'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Acter, Activity } from '@schema'
import Link from 'next/link'
import { ActivityTile } from 'src/components/activity/tile'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    singleItem: {
      margin: theme.spacing(1),
      '& a': {
        textDecoration: 'none',
        color: theme.palette.text.primary,
      },
    },
  })
)

export interface DisplayResultsProps {
  dataType: string
  data: Acter[] | Activity[]
}

export const DisplayResults: FC<DisplayResultsProps> = ({ dataType, data }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      {data.map((activity, i) => (
        <Box className={classes.singleItem} key={i}>
          <Link href="">
            <a>
              {dataType === 'activity' && <ActivityTile activity={activity} />}
            </a>
          </Link>
        </Box>
      ))}
    </Box>
  )
}
