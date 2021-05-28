import React, { FC } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  MenuItem,
  Theme,
  Typography,
} from '@material-ui/core'
import { Acter } from '@schema'
import Link from 'next/link'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'

export interface GroupsList {
  acters: Acter[]
  handleChildAvatar?: (childActer: Acter) => void
}

export const GroupsList: FC<GroupsList> = ({ acters, handleChildAvatar }) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      {acters.map((acter) => (
        <MenuItem
          className={classes.item}
          onClick={() => handleChildAvatar(acter)}
        >
          <Box className={classes.icon}></Box>
          <Link href={acterAsUrl(acter)}>
            <a>
              <Typography variant="body2">{acter.name}</Typography>
            </a>
          </Link>
        </MenuItem>
      ))}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    item: {
      height: 25,
      '& a': {
        color: theme.palette.secondary.contrastText,
        textDecoration: 'none',
        textTransform: 'capitalize',
      },
    },
    icon: {
      backgroundColor: '#B28956',
      height: 10,
      width: 10,
      borderRadius: '50%',
      marginRight: 10,
    },
  })
)
