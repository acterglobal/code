import React, { FC } from 'react'

import { Box, styled } from '@material-ui/core'

import { ActerTile } from '@acter/components/acter/organisms/tile'
import { ActivityTile } from '@acter/components/activity/tile'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { SearchType } from '@acter/lib/constants'
import { useSearchType } from '@acter/lib/search/use-search-type'
import { Acter } from '@acter/schema'

const { ACTIVITIES, ACTERS } = SearchType

export interface SearchResultsListProps {
  acters: Acter[]
  collapsed?: boolean
  activeActerId?: string
}

export const SearchResultsList: FC<SearchResultsListProps> = ({
  acters,
  collapsed = false,
  activeActerId,
}) => {
  const searchType = useSearchType()

  const Container =
    searchType === ACTIVITIES
      ? ActivitiesSearchResultList
      : ActersSearchResultsList

  return (
    <Container>
      {acters?.map((acter, index) => (
        <Item key={index} role="listitem">
          {searchType === ACTERS && (
            <Link href={acterAsUrl({ acter })} passHref>
              <ActerTile
                acter={acter}
                collapsed={collapsed}
                active={acter.id === activeActerId}
              />
            </Link>
          )}
          {searchType === ACTIVITIES && (
            <Link href={acterAsUrl({ acter: acter })} passHref>
              <ActivityTile activity={acter.Activity} />
            </Link>
          )}
        </Item>
      ))}
    </Container>
  )
}

const ActersSearchResultsList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

const ActivitiesSearchResultList = styled(ActersSearchResultsList)({
  flexDirection: 'row',
  flexWrap: 'wrap',
})

const Item = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
  '& a': {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}))
