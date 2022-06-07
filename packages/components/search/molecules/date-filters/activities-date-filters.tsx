import { FC } from 'react'

import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { FilterButton } from '@acter/components/search/atoms/button'
import { ActivitiesDateFilter } from '@acter/lib/api/resolvers/date-filter'

const { ALL, UPCOMING, PAST } = ActivitiesDateFilter

export interface ActivitiesDateFilters {
  currentDateFilter: ActivitiesDateFilter
  onChange: (currentDateFilter: ActivitiesDateFilter) => void
}

export const ActivitiesDateFilters: FC<ActivitiesDateFilters> = ({
  currentDateFilter,
  onChange,
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.SearchActivitiesDateFilters}>
      <FilterButton
        className={currentDateFilter === UPCOMING && classes.active}
        onClick={() => onChange(UPCOMING)}
      >
        Upcoming
      </FilterButton>
      <FilterButton
        className={currentDateFilter === PAST && classes.active}
        onClick={() => onChange(PAST)}
      >
        Past
      </FilterButton>
      <FilterButton
        className={currentDateFilter === ALL && classes.active}
        onClick={() => onChange(ALL)}
      >
        All
      </FilterButton>
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
