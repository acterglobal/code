import { FC, useState } from 'react'

import {
  Button,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { AddCircleOutlineOutlined } from '@material-ui/icons'

import { AddActivity } from '@acter/components/activity/add-activity'
import { ManageContent } from '@acter/components/group/sections/manage-content'
import { useActer } from '@acter/lib/acter/use-acter'
import { ActerTypes } from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

interface ZeroMessageProps {
  addItem?: ActerTypes
  primaryText: string
  secondaryText: string
  buttonText: string
}
export const ZeroMessage: FC<ZeroMessageProps> = ({
  addItem,
  primaryText,
  secondaryText,
  buttonText,
}) => {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)

  const { user } = useUser()
  const { acter } = useActer()

  const isMember = userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)

  if (!acter) return null

  const handleClick = () => setOpenDrawer(true)

  return (
    <>
      <Typography className={classes.text}>{primaryText}</Typography>
      {isMember && (
        <>
          <Typography className={classes.text}>{secondaryText}</Typography>
          <Button className={classes.button} onClick={handleClick}>
            <AddCircleOutlineOutlined
              fontSize="small"
              className={classes.icon}
            />
            {buttonText}
          </Button>
        </>
      )}

      {addItem === ActerTypes.ACTIVITY ? (
        <AddActivity openDrawer={openDrawer} setDrawer={setOpenDrawer} />
      ) : (
        <ManageContent openDrawer={openDrawer} setDrawer={setOpenDrawer} />
      )}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      height: theme.spacing(14),
    },
    text: {
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(0.5),
      fontSize: '0.7rem',
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.main,
    },
    button: {
      color: theme.palette.secondary.main,
      textTransform: 'capitalize',
      fontSize: '0.88rem',
    },
    icon: {
      marginRight: theme.spacing(1.5),
    },
  })
)
