import { FC } from 'react'

import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { SearchFilterButton } from '@acter/components/search/atoms/button'
import { SearchActivitiesDateFilter } from '@acter/lib/api/resolvers/date-filter'

const { ALL, UPCOMING, PAST } = SearchActivitiesDateFilter

export interface SearchActivitiesDateFilters {
  currentDateFilter: SearchActivitiesDateFilter
  onClick: (currentDateFilter: SearchActivitiesDateFilter) => void
}

export const SearchActivitiesDateFilters: FC<SearchActivitiesDateFilters> = ({
  currentDateFilter,
  onClick,
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.SearchActivitiesDateFilters}>
      <SearchFilterButton
        className={currentDateFilter === UPCOMING && classes.active}
        onClick={() => onClick(UPCOMING)}
      >
        Upcoming
      </SearchFilterButton>
      <SearchFilterButton
        className={currentDateFilter === PAST && classes.active}
        onClick={() => onClick(PAST)}
      >
        Past
      </SearchFilterButton>
      <SearchFilterButton
        className={currentDateFilter === ALL && classes.active}
        onClick={() => onClick(ALL)}
      >
        All
      </SearchFilterButton>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    SearchActivitiesDateFilters: {
      display: 'flex',
      flexDirection: 'row',
      flex: '1 1 auto',
      marginTop: theme.spacing(2),
    },
    controls: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
      flex: '0 1 auto',
    },
    active: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.colors.white,
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)
