import React, { FC, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Box, Divider, IconButton, Typography } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { LinkForm, LinkFormProps } from 'src/components/links/form'
import { Link as LinkType } from '@schema'

export interface LinkProps extends LinkFormProps {
  links: LinkType[]
}

export const Links: FC<LinkProps> = ({ links, onLinkSubmit }) => {
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

      {links.map((link) => (
        <Box className={classes.formContainer}>
          <LinkForm key={link.id} link={link} onLinkSubmit={onLinkSubmit} />
        </Box>
      ))}

      <Divider variant="middle" />

      <Box>
        <IconButton onClick={handleClick}>
          <AddCircleIcon />
        </IconButton>
      </Box>

      {toggleForm && (
        <Box className={classes.formContainer}>
          <Box className={classes.inputContainer}>
            <LinkForm onLinkSubmit={onLinkSubmit} />
          </Box>
        </Box>
      )}
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
      marginLeft: 85,
    },
    inputContainer: {
      marginRight: 45,
    },
    divider: {
      backgroundColor: grey[900],
      marginTop: 8,
    },
  })
)
