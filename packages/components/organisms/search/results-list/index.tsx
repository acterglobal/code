import React, { FC } from 'react'

import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { ActerTile } from '@acter/components/acter/organisms/tile'
import { ActivityTile } from '@acter/components/activity/tile'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { SearchType } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useSearchType } from '@acter/lib/search/use-search-type'
import { Acter } from '@acter/schema'

const { ACTIVITIES, ACTERS } = SearchType

export interface SearchResultsListProps {
  acters: Acter[]
}

export const SearchResultsList: FC<SearchResultsListProps> = ({ acters }) => {
  const classes = useStyles()
  const { t } = useTranslation('search')
  const searchType = useSearchType()

  if (acters?.length === 0) {
    return (
      <Box className={classes.root}>
        <Typography variant="body2" aria-label="zero-acters">
          {t('zero-results')}
        </Typography>
      </Box>
    )
  }

  return (
    <>
      {acters.map((acter, index) => (
        <Box className={classes.singleItem} key={index} role="listitem">
          {searchType === ACTERS && (
            <Link href={acterAsUrl({ acter })} passHref>
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
