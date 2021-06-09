import React, { FC, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Box, Divider, IconButton, Typography } from '@material-ui/core'
import { AddIcon } from 'src/components/icons'
import { LinkForm, LinkFormProps } from 'src/components/links/form/link'

// export interface LinkProps extends LinkFormProps {
//   link
// }

export const Links: FC = () => {
  const classes = useStyles()
  const [toggleForm, setToggleForm] = useState(false)

  const handleSubmit = (data) => {
    console.log('Form data', data)
    setToggleForm(!toggleForm)
  }

  const handleClick = () => {
    setToggleForm(!toggleForm)
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.heading}>
        <Typography variant="h6">Menu</Typography>
      </Box>
      <Box className={classes.subHeading}>
        <Typography variant="body2" className={classes.subHeadingText}>
          Here you can custom navigation links in your menu
        </Typography>
      </Box>
      <Divider variant="middle" />

      {toggleForm && (
        <Box className={classes.formContainer}>
          <LinkForm onSubmit={handleSubmit} />
        </Box>
      )}
      <Box className={classes.addLink}>
        <IconButton onClick={handleClick}>
          <AddIcon className={classes.addIcon} />
        </IconButton>
      </Box>
    </Box>
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
    formContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    divider: {
      backgroundColor: grey[900],
      marginTop: 8,
    },
    addLink: {},
    addIcon: {},
  })
)
