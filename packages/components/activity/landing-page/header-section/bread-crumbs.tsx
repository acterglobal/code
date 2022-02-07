import React, { FC } from 'react'

import { Box, Breadcrumbs, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { NavigateNext as NavigateNextIcon } from '@material-ui/icons'

import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { capitalize } from '@acter/lib/string/capitalize'
import { Acter } from '@acter/schema'

interface ActivityBreadCrumbsProps {
  acter: Acter
  localRoute: string | string[]
}

export const ActivityBreadCrumbs: FC<ActivityBreadCrumbsProps> = ({
  acter,
  localRoute,
}) => {
  const classes = useStyles()

  if (acter && localRoute)
    return (
      <Box>
        <Breadcrumbs
          separator={
            <NavigateNextIcon fontSize="small" className={classes.root} />
          }
          aria-label="breadcrumb"
        >
          <Link href={`${acterAsUrl({ acter: acter?.Parent })}`}>
            <Typography className={classes.name}>
              {capitalize(acter?.Parent.name)}
            </Typography>
          </Link>

          <Link href={`${acterAsUrl({ acter: acter?.Parent })}/activities`}>
            <Typography className={classes.name}>Activities</Typography>
          </Link>

          <Link href={acter && acterAsUrl({ acter })}>
            <Typography className={classes.activity}>
              {capitalize(acter.name)}
            </Typography>
          </Link>
        </Breadcrumbs>
      </Box>
    )
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" className={classes.root} />}
      aria-label="breadcrumb"
    >
      {/** TO DO use nextjs router  */}
      <Link href="javascript:history.go(-1)">
        <Typography className={classes.name}># {'back'}</Typography>
      </Link>

      <Link href={acter && acterAsUrl({ acter })}>
        <Typography className={classes.activity}>
          {capitalize(acter.name)}
        </Typography>
      </Link>
    </Breadcrumbs>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.secondary.contrastText,
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
