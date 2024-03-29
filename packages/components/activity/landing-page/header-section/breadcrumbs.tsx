import React, { FC } from 'react'

import { Breadcrumbs, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { NavigateNext as NavigateNextIcon } from '@material-ui/icons'

import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'
import { Acter } from '@acter/schema'

interface ActivityBreadcrumbsProps {
  acter: Acter
}

/**
 * Creates an activity page's breadcrumbs in the header-section top-bar
 * @param acter activity whose page for which uses breadcrumbs
 * @returns returns an activity page's breadcrumbs as a component
 */

export const ActivityBreadcrumbs: FC<ActivityBreadcrumbsProps> = ({
  acter,
}) => {
  const classes = useStyles()
  const { t } = useTranslation('common')

  if (!acter) return null

  const parentActer = acter.Parent ? acter.Parent : acter.Activity.Organiser

  if (!parentActer) return null

  return (
    <Breadcrumbs
      separator={
        <NavigateNextIcon
          fontSize="small"
          className={classes.activityBreadcrumbs}
        />
      }
      aria-label="breadcrumbs"
    >
      <Link href={acterAsUrl({ acter: parentActer })}>
        <Typography className={classes.name}>{parentActer.name}</Typography>
      </Link>

      <Link href={`${acterAsUrl({ acter: parentActer })}/activities`}>
        <Typography className={classes.name}>
          {capitalize(t('activities'))}
        </Typography>
      </Link>

      <Link href={acterAsUrl({ acter })}>
        <Typography className={classes.activity}>{acter.name}</Typography>
      </Link>
    </Breadcrumbs>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activityBreadcrumbs: {
      color: theme.palette.secondary.contrastText,
      alignItems: 'center',
    },
    name: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: '0.9rem',
      color: theme.palette.secondary.contrastText,
    },
    activity: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: '0.9rem',
      color: theme.palette.secondary.contrastText,
    },
  })
)
