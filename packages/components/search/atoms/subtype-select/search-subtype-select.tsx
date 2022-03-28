import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { Switch } from '@acter/components/atoms/fields/switch'
import { SearchType, Size } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useSearchType } from '@acter/lib/search/use-search-type'
import { capitalize } from '@acter/lib/string/capitalize'
import { pluralize } from '@acter/lib/string/pluralize'

export interface SearchSubtypeSelectProps {
  subTypeName: string
  checked: boolean
  showTypeIcon?: boolean
  onChange: (checked: boolean) => void
}

export const SearchSubtypeSelect: FC<SearchSubtypeSelectProps> = ({
  subTypeName,
  checked,
  showTypeIcon: useTypeColorDot = false,
  onChange,
}) => {
  const classes = useStyles({ type: subTypeName })
  const { t } = useTranslation('common')
  const searchType = useSearchType()
  const nestedKey =
    searchType === SearchType.ACTIVITIES ? 'activityTypes' : 'acterTypes'

  const capitalizeSubTypeNameText = (subTypeName: string): string =>
    subTypeName === 'NGO'
      ? t(`${nestedKey}.${pluralize(subTypeName)}`)
      : capitalize(t(`${nestedKey}.${pluralize(subTypeName)}`))

  return (
    <Box className={classes.root}>
      <Box className={classes.type}>
        {useTypeColorDot && <Box className={classes.icon}></Box>}
        <Typography className={classes.typeName} variant="body2">
          {capitalizeSubTypeNameText(subTypeName)}
        </Typography>
      </Box>
      <Switch
        name={subTypeName}
        size={Size.SMALL}
        checked={checked}
        color="primary"
        onChange={onChange}
      />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(1.5),
    },
    type: {
      display: 'flex',
      alignItems: 'center',
    },
    typeName: {
      marginLeft: theme.spacing(2),
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.spacing(1.5),
    },
    icon: {
      height: 12,
      width: 12,
      borderRadius: '50%',
      backgroundColor: ({ type }: { type: string }) =>
        type && theme.colors.activityTypes[type],
    },
  })
)
