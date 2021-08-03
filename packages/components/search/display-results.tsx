import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Acter, InterestType } from '@acter/schema/types'
import { ActivityTile } from '@acter/components/activity/tile'
import { ActerTile } from '@acter/components/acter/tile'
import { SearchType } from '@acter/lib/constants'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Link } from '@acter/components/util/anchor-link'
import clsx from 'clsx'

const { ACTIVITIES, ACTERS } = SearchType
export interface DisplayResultsProps {
  searchType: string
  acters: Acter[]
  interestTypes: InterestType[]
}

export const DisplayResults: FC<DisplayResultsProps> = (props) => {
  const { searchType, acters, interestTypes } = props
  const classes = useStyles()

  return (
    <Box className={clsx(classes.root, classes[searchType])}>
      {acters.length !== 0 ? (
        acters.map((acter, index) => (
          <Box className={classes.singleItem} key={index} role="listitem">
            <Link href={acterAsUrl({ acter })} passHref>
              {searchType === ACTERS && (
                <ActerTile acter={acter} interestTypes={interestTypes} />
              )}
              {searchType === ACTIVITIES && (
                <ActivityTile activity={acter.Activity} />
              )}
            </Link>
          </Box>
        ))
      ) : (
        <Typography variant="body2" aria-label="zero-acters">
          Your search did not return any results. Try removing search terms
          and/or filters to see more.
        </Typography>
      )}
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
        color: theme.palette.text.primary,
      },
    },
  })
)
