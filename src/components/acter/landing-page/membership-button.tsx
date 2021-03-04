import React, { FC } from 'react'
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core'
import { Acter, User } from '@generated/type-graphql'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 25,
      width: '100px',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      marginRight: theme.spacing(3),
      textTransform: 'none',
    },
  })
)

export interface MembershipButtonProps {
  /**
   * The Acter on which we are setting membership
   */
  acter: Acter

  /**
   * The currently logged in user
   */
  user: User

  /**
   * Callback for when "Join" is pressed
   */
  onJoin: (follower: Acter, following: Acter) => Promise<any>

  /**
   * Callback for when "Leave" is pressed
   */
  onLeave: (follower: Acter, following: Acter) => Promise<any>

  /**
   * When connection data is being written
   */
  loading: boolean
}

export const MembershipButton: FC<MembershipButtonProps> = ({
  acter,
  user,
  onJoin,
  onLeave,
}) => {
  const classes = useStyles()
  // If this is the UserActer for this User OR the Acter was created by this User, do nothing
  // TODO: change when we have the ability to transfer ownership or check for multiple admins
  if (acter.createdByUserId === user.id || user.Acter.id === acter.id) {
    return null
  }

  if (
    user.Acter.Following.map((connection) => connection.Following.id).includes(
      acter.id
    )
  ) {
    return (
      <Button
        className={classes.root}
        variant="contained"
        size="medium"
        disableElevation
        onClick={() => onLeave(user.Acter, acter)}
      >
        Leave
      </Button>
    )
  }

  return (
    <Button
      className={classes.root}
      variant="contained"
      size="medium"
      disableElevation
      onClick={() => onJoin(user.Acter, acter)}
    >
      Join
    </Button>
  )
}
