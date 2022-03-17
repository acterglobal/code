import React, { FC } from 'react'

import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { ActivityTile } from '@acter/components/activity/tile'
import {
  ActerTile, // ProfileImageSizes,
} from '@acter/components/organisms/acter/tile'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { SearchType } from '@acter/lib/constants'
import { useSearchType } from '@acter/lib/search/use-search-type'
import { Acter } from '@acter/schema'

const { ACTIVITIES, ACTERS } = SearchType

export interface SearchResultsListProps {
  acters: Acter[]
  // profileImageSizes?: ProfileImageSizes
}

export const SearchResultsList: FC<SearchResultsListProps> = ({
  acters,
  // profileImageSizes,
}) => {
  const classes = useStyles()
  const searchType = useSearchType()

  return (
    <>
      {acters?.map((acter, index) => (
        <Box className={classes.singleItem} key={index} role="listitem">
          {searchType === ACTERS && (
            <Link href={acterAsUrl({ acter })} passHref>
              {/* <ActerTile acter={acter} profileImageSizes={profileImageSizes} /> */}
              <ActerTile acter={acter} />
            </Link>
          )}
          {searchType === ACTIVITIES && (
            <Link href={acterAsUrl({ acter: acter })} passHref>
              <ActivityTile activity={acter.Activity} />
            </Link>
          )}
        </Box>
      ))}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(5),
      width: '72%',
      height: '100%',
      [theme.breakpoints.down('xs')]: {
        marginTop: 0,
      },
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
