import React, { FC } from 'react'
import {
  Box,
  Button,
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
import { Acter } from '@generated/type-graphql'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    padding: 20,
  },
  heading: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: grey[600],
    marginBottom: 20,
  },
  members: {
    height: '100%',
    overflow: 'scroll',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
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
  members: Acter[]
  handleViewMember: (memeberId: string) => void
}

export const DisplayMembers: FC<DisplayMembers> = (props) => {
  const { members, handleViewMember } = props
  const classes = useStyles()

  const members1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h5">
        225 People
      </Typography>
      <Divider />

      <List className={classes.members}>
        {members1.map((member) => (
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
                primary={ExampleActer.name}
                secondary={ExampleActer.ActerType.name}
              />
              {/* <Button
                className={classes.button}
                variant="outlined"
                disableElevation
                onClick={() => handleViewMember(ExampleActer.id)}
              >
                View
              </Button> */}
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
