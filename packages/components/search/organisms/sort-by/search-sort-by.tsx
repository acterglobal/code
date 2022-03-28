import React, { FC, useState } from 'react'

import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { DoneRounded as SelectedIcon } from '@material-ui/icons'

import { Popover } from '@acter/components/util/popover'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'

export type SortByProps = {
  sortBy: SearchActivitiesSortBy
  onChange: (sortBy: SearchActivitiesSortBy) => void
}

export const SortBy: FC<SortByProps> = ({ sortBy, onChange }) => {
  const { t } = useTranslation('search')
  const classes = useStyles()
  const [closePopover, setClosePopover] = useState<boolean | null>(null)

  const handleSelect = (sortBy: SearchActivitiesSortBy) => {
    onChange(sortBy)
    setClosePopover(!closePopover)
  }

  return (
    <Popover tabLabel={t('sortByTabLabel')} closePopover={closePopover}>
      <Box className={classes.popover}>
        <Box
          className={classes.item}
          onClick={() => handleSelect(SearchActivitiesSortBy.DATE)}
        >
          <Typography variant="caption">
            {capitalize(t('common:date'))}
          </Typography>
          {sortBy === SearchActivitiesSortBy.DATE && (
            <SelectedIcon className={classes.icon} />
          )}
        </Box>
        <Box
          className={classes.item}
          onClick={() => handleSelect(SearchActivitiesSortBy.NAME)}
        >
          <Typography variant="caption">
            {capitalize(t('common:name'))}
          </Typography>
          {sortBy === SearchActivitiesSortBy.NAME && (
            <SelectedIcon className={classes.icon} />
          )}
        </Box>
      </Box>
    </Popover>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      minWidth: theme.spacing(17.5),
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: theme.spacing(4),
      cursor: 'pointer',
    },
    icon: {
      fontSize: 20,
      color: theme.colors.grey.dark,
    },
  })
)
