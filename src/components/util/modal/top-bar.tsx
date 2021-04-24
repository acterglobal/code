import React, { FC } from 'react'
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Typography,
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { MoreVert as ThreeDotsIcon } from '@material-ui/icons'
import { grey } from '@material-ui/core/colors'
import { DropdownMenu } from 'src/components/util/dropdown-menu'
import Link from 'next/link'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { Acter, User } from '@schema'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: theme.spacing(5.5),
      padding: 5,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonsSection: {
      display: 'flex',
      alignItems: 'center',
    },
    button: {
      textTransform: 'none',
      height: 30,
      fontSize: '0.8rem',
      color: grey[700],
    },
    menuItem: {
      fontSize: '0.8rem',
      textTransform: 'capitalize',
      display: 'flex',
      justifyContent: 'center',
    },
  })
)

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
      <Typography variant="h6">{heading}</Typography>

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

        <Button
          className={classes.button}
          variant="outlined"
          onClick={handleClose}
        >
          Close
        </Button>
      </Box>
    </Box>
  )
}

const ThreeDots: FC = () => (
  <IconButton>
    <ThreeDotsIcon />
  </IconButton>
)
