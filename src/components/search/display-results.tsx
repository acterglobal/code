import React, { FC } from 'react'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Acter } from '@schema'
import Link from 'next/link'
import { ActivityTile } from 'src/components/activity/tile'
import { ActerTile } from 'src/components/acter/tile'
import { ACTIVITIES, ACTERS } from 'src/constants'

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
  acters: Acter[]
}

export const DisplayResults: FC<DisplayResultsProps> = (props) => {
  const { dataType, acters } = props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      {acters.map((acter, i) => (
        <Box className={classes.singleItem} key={i}>
          <Link href="">
            <a>
              {dataType === ACTERS && <ActerTile acter={acter} />}
              {dataType === ACTIVITIES && (
                <ActivityTile activity={acter.Activity} />
              )}
            </a>
          </Link>
        </Box>
      ))}
    </Box>
  )
}
