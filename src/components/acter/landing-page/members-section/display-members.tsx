import React, { FC } from 'react'
import pluralize from 'pluralize'
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
import { ExampleActer } from 'src/__fixtures__'
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
    color: grey[800],
  },
  acterType: {
    color: grey[700],
  },
  button: {
    height: 25,
    width: 140,
    borderRadius: 20,
    color: grey[700],
    fontSize: '0.8rem',
    textTransform: 'none',
  },
  divider: {
    marginLeft: 100,
  },
}))

export interface DisplayMembers {
  acters: Acter[]
  type: string
}

export const DisplayMembers: FC<DisplayMembers> = ({ acters = [], type }) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h5">
        {acters.length} {pluralize(type)}
      </Typography>
      <Divider />

      <List className={classes.members}>
        {acters.map((acter) => (
          <>
            <ListItem>
              <ListItemAvatar>
                <ActerAvatar acter={ExampleActer} />
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
