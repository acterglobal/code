import React, { FC, useState } from 'react'

import { Box, Divider, Grid, IconButton, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CancelIcon from '@material-ui/icons/Cancel'

import { LinkForm } from '@acter/components/links/form'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useLinks } from '@acter/lib/links/use-links'

export const Links: FC = () => {
  const classes = useStyles()
  const [toggleForm, setToggleForm] = useState(false)
  const { links, fetching: linksLoading } = useLinks()

  if (linksLoading) return <LoadingSpinner />
  if (!links) return null

  const handleClick = () => setToggleForm(!toggleForm)

  return (
    <Grid item className={classes.root}>
      <Box className={classes.heading}>
        <Typography variant="h6">Menu</Typography>
      </Box>
      <Box className={classes.subHeading}>
        <Typography variant="body2" className={classes.subHeadingText}>
          Here you can custom navigation links in your menu
        </Typography>
      </Box>
      <Divider variant="middle" />

      <Box className={classes.content}>
        {links.map((link) => (
          <Box key={link.id} className={classes.formContainer}>
            <LinkForm link={link} />
          </Box>
        ))}

        <Divider variant="middle" />

        <Box className={classes.formItemsContainer}>
          {toggleForm && (
            <Box>
              <LinkForm />
            </Box>
          )}

          <Box className={classes.toggleContainer}>
            <IconButton onClick={handleClick}>
              {toggleForm ? <CancelIcon /> : <AddCircleIcon />}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    heading: {
      display: 'flex',
      justifyContent: 'center',
      fontWeight: theme.typography.fontWeightLight,
    },
    subHeading: {
      display: 'flex',
      justifyContent: 'center',
    },
    subHeadingText: {
      fontWeight: theme.typography.fontWeightLight,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    formItemsContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 3,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    toggleContainer: {
      marginTop: 8,
      marginRight: 8,
    },
  })
)
