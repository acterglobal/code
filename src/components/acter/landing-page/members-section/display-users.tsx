import React, { FC } from 'react'
import {
  Box,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { ActerAvatar } from 'src/components/acter/avatar'
import { Acter } from '@schema'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    borderColor: theme.palette.divider,
    borderWidth: 'thin',
    borderStyle: 'solid',
    overflow: 'hidden',
  },
  heading: {
    fontSize: '0.9rem',
    fontWeight: theme.typography.fontWeightBold,
    color: grey[600],
    marginBottom: 20,
  },
  members: {
    height: '100%',
    overflowY: 'scroll',
    width: '100%',
  },
  memberInfo: {
    marginLeft: 30,
    fontWeight: theme.typography.fontWeightBold,
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
    color: grey[800],
  },
  acterType: {
    color: grey[700],
  },
  divider: {
    marginLeft: 100,
  },
}))

export interface DisplayUsersProps {
  /**
   * The acter on which we are viewing members
   */
  acter: Acter
  /**
   * The list of acters we are displaying
   */
  acters: Acter[]
}

export const DisplayUsers: FC<DisplayUsersProps> = ({ acters = [] }) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h5">
        {acters.length} Users
      </Typography>
      <Divider />

      <List className={classes.members}>
        {acters.map((acter) => (
          <>
            <ListItem>
              <ListItemAvatar>
                <ActerAvatar acter={acter} />
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.name,
                  secondary: classes.acterType,
                }}
                className={classes.memberInfo}
                primary={acter.name}
                secondary={acter.ActerType.name}
              />
            </ListItem>
            <Divider
              classes={{ root: classes.divider }}
              variant="inset"
              component="li"
            />
          </>
        ))}
      </List>
    </Box>
  )
}
