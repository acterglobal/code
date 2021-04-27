import React, { FC } from 'react'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Acter } from '@schema'
import { ActivityTile } from 'src/components/activity/tile'
import { ActerTile } from 'src/components/acter/tile'
import { ACTIVITIES, ACTERS } from 'src/constants'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: theme.spacing(5),
    },
    singleItem: {
      margin: theme.spacing(1),
      '&:hover': {
        cursor: 'pointer',
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
  const router = useRouter()

  return (
    <Box className={classes.root}>
      {acters.map((acter, i) => (
        <Box
          className={classes.singleItem}
          key={i}
          onClick={() => router.push(acterAsUrl(acter))}
        >
          {dataType === ACTERS && <ActerTile acter={acter} />}
          {dataType === ACTIVITIES && (
            <ActivityTile activity={acter.Activity} />
          )}
        </Box>
      ))}
    </Box>
  )
}
