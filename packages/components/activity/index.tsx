import React, { FC, useState } from 'react'

import { Grid, Theme, Box, Button } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { LandingPageLayout } from '@acter/components/acter/landing-page/layout'
import { ActivityDetails } from '@acter/components/activity/activity-details'
import { ManageContent } from '@acter/components/activity/sections/manage-content'
import { SectionTabs as ActivitySectionTabs } from '@acter/lib/constants'
import { Acter } from '@acter/schema'

import { Connect } from '../acter/connect'
import { Organiser } from './organiser'

const { MEMBERS, INVITE } = ActivitySectionTabs

export interface ActivityProps {
  acter: Acter
}

export const Activity: FC<ActivityProps> = ({ acter }) => {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)
  const [contentTab, setContentTab] = useState(INVITE)

  const handleOnClick = () => {
    setContentTab(INVITE)
    setOpenDrawer(true)
  }

  const handleParticipantsOnClick = () => {
    setContentTab(MEMBERS)
    setOpenDrawer(true)
  }

  return (
    <LandingPageLayout>
      <Grid className={classes.activity} item xs={12} sm={12}>
        <Box className={classes.organiserContainer}>
          <Organiser acter={acter?.Activity?.Organiser} />
          <Box className={classes.connectButtonContainer}>
            <Button className={classes.button} onClick={handleOnClick}>
              Invite
            </Button>
            <Connect acterId={acter.id} />
          </Box>
        </Box>
      </Grid>
      <Grid className={classes.activity} item xs={12} sm={12}>
        <ActivityDetails
          acter={acter}
          handleOnClick={handleParticipantsOnClick}
        />
      </Grid>
      {openDrawer && (
        <ManageContent
          openDrawer={openDrawer}
          setDrawer={setOpenDrawer}
          contentTab={contentTab}
        />
      )}
    </LandingPageLayout>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activity: {
      backgroundColor: blueGrey.A100,
      '&.MuiGrid-item': {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
      },
      order: 1,
    },
    organiserContainer: {
      marginTop: theme.spacing(1),
      borderRadius: 5,
      borderBottom: '30px',
      height: '50px',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    connectButtonContainer: {
      display: 'flex',
      marginRight: theme.spacing(4),
    },
    button: {
      borderRadius: theme.spacing(3),
      marginRight: theme.spacing(1),
      minWidth: theme.spacing(14),
      height: theme.spacing(4.5),
      color: theme.palette.secondary.main,
      border: '1px solid',
      borderColor: theme.palette.secondary.main,
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '1rem',
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
      },
    },
  })
)
