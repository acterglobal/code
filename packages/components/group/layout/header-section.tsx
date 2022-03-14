import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { Box, Breadcrumbs, Theme, Typography } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material'

import { Connect } from '@acter/components/acter/connect'
import { AddInviteSection } from '@acter/components/acter/landing-page/header-section/add-invite'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { blueGrey } from '@acter/components/themes/colors'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'

export const HeaderSection: FC = () => {
  const classes = useStyles()
  const { asPath: currentUrl } = useRouter()
  const { acter, fetching: acterLoading } = useActer()

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  const activitiesUrl = acterAsUrl({ acter, extraPath: 'activities' })

  return (
    <Box className={classes.heading}>
      <Box className={classes.titleSection}>
        {currentUrl === activitiesUrl ? (
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="small" className={classes.icon} />
            }
            aria-label="breadcrumb"
          >
            <Link href={acterAsUrl({ acter })}>
              <Typography className={classes.name}># {acter.name}</Typography>
            </Link>

            <Typography className={classes.activities}>
              Upcoming activities
            </Typography>
          </Breadcrumbs>
        ) : (
          <Link href={acterAsUrl({ acter })}>
            <Typography className={classes.name}># {acter.name}</Typography>
          </Link>
        )}
      </Box>

      <Box className={classes.buttonContainer}>
        <AddInviteSection />
        <Connect />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      height: theme.spacing(6),
      borderBottom: '1px solid white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: theme.spacing(6),
    },
    titleSection: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      color: blueGrey.A700,
    },
    name: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 14,
      color: blueGrey.A700,
    },
    activities: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: 14,
      color: theme.palette.secondary.dark,
    },
    buttonContainer: {
      display: 'flex',
      fontSize: '.8rem',
      marginRight: theme.spacing(3),
    },
    buttons: {
      display: 'flex',
      alignItems: 'center',
    },
  })
)
