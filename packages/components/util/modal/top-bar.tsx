import React, { FC } from 'react'
import { Box, IconButton, MenuItem, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  MoreVert as ThreeDotsIcon,
  Close as CloseIcon,
} from '@material-ui/icons'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Acter, User } from '@acter/schema/types'

export interface TopBarProps {
  heading?: string
  actionButtons?: string[] | null
  acter?: Acter
  user?: User
}
interface Props extends TopBarProps {
  handleClose: () => void
}

export const TopBar: FC<Props> = ({
  heading,
  actionButtons,
  acter,
  user,
  handleClose,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography variant="body1" className={classes.heading}>
        {heading}
      </Typography>

      <Box className={classes.buttonsSection}>
        {actionButtons && acter.createdByUserId === user?.id ? (
          <DropdownMenu anchorNode={<ThreeDots />}>
            {actionButtons.map((action) => (
              <Link href={`${acterAsUrl(acter)}/${action}`}>
                <MenuItem className={classes.menuItem}>{action}</MenuItem>
              </Link>
            ))}
          </DropdownMenu>
        ) : (
          <ThreeDots />
        )}

        <IconButton className={classes.button} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

const ThreeDots: FC = () => {
  const classes = useStyles()
  return (
    <IconButton>
      <ThreeDotsIcon className={classes.threeDots} />
    </IconButton>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: theme.spacing(5.5),
      padding: 5,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    heading: {
      marginLeft: theme.spacing(3),
      textTransform: 'capitalize',
    },
    buttonsSection: {
      display: 'flex',
      alignItems: 'center',
    },
    button: {
      textTransform: 'none',
      height: 30,
      fontSize: '0.8rem',
      color: theme.palette.secondary.contrastText,
      borderColor: theme.palette.secondary.contrastText,
    },
    menuItem: {
      fontSize: '0.8rem',
      textTransform: 'capitalize',
      display: 'flex',
      justifyContent: 'center',
    },
    threeDots: {
      color: theme.palette.secondary.contrastText,
    },
  })
)
