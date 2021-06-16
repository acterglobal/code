import React, { FC, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Box, Divider, IconButton, Typography } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CancelIcon from '@material-ui/icons/Cancel'
import { LinkForm, LinkFormProps } from 'src/components/links/form'
import { Link as LinkType } from '@schema'

export interface LinkProps extends LinkFormProps {
  links: LinkType[]
}

export const Links: FC<LinkProps> = ({ links, onLinkSubmit, onLinkDelete }) => {
  const classes = useStyles()
  const [toggleForm, setToggleForm] = useState(false)

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

      <Box className={classes.content}>
        {links.map((link) => (
          <Box key={link.id} className={classes.formContainer}>
            <LinkForm
              link={link}
              onLinkSubmit={onLinkSubmit}
              onLinkDelete={onLinkDelete}
            />
          </Box>
        ))}

        <Divider variant="middle" />

        <Box className={classes.formItemsContainer}>
          {toggleForm && (
            <Box>
              <LinkForm onLinkSubmit={onLinkSubmit} />
            </Box>
          )}

          <Box className={classes.toggleContainer}>
            <IconButton onClick={handleClick}>
              {toggleForm ? <CancelIcon /> : <AddCircleIcon />}
            </IconButton>
          </Box>
        </Box>
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
    divider: {
      backgroundColor: grey[900],
      marginTop: 8,
    },
    toggleContainer: {
      marginTop: 8,
      marginRight: 8,
    },
  })
)
