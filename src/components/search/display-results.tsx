import React, { FC } from 'react'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Acter } from '@schema'
import { ActivityTile } from 'src/components/activity/tile'
import { ActerTile } from 'src/components/acter/tile'
import { ACTIVITIES, ACTERS } from 'src/constants'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import Link from 'next/link'
import clsx from 'clsx'

export interface DisplayResultsProps {
  dataType: string
  acters: Acter[]
}

export const DisplayResults: FC<DisplayResultsProps> = (props) => {
  const { dataType, acters } = props
  const classes = useStyles()

  return (
    <Box className={clsx(classes.root, classes[`${dataType}`])}>
      {acters?.map((acter, index) => (
        <Box className={classes.singleItem} key={index}>
          <Link href={acterAsUrl(acter)} passHref>
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(5),
    },
    activities: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    singleItem: {
      margin: theme.spacing(1),
      '& a': {
        textDecoration: 'none',
      },
    },
  })
)
