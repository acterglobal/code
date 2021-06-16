import React, { FC } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  ListItem,
  Theme,
  Typography,
} from '@material-ui/core'
import { Acter } from '@schema'
import { Link } from 'src/components/util/anchor-link'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'

export interface GroupsList {
  acters: Acter[]
}

export const GroupsList: FC<GroupsList> = ({ acters }) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      {acters.map((acter) => (
        <ListItem className={classes.item} key={acter.id}>
          <Link href={acterAsUrl(acter)}>
            <Typography variant="body2"># {acter.name}</Typography>
          </Link>
        </ListItem>
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
      '& a': {
        color: theme.palette.secondary.contrastText,
        textDecoration: 'none',
        textTransform: 'capitalize',
      },
    },
  })
)
