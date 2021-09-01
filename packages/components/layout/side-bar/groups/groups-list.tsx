import React, { FC } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  ListItem,
  Theme,
  Typography,
} from '@material-ui/core'
import { Acter } from '@acter/schema'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useRouter } from 'next/router'
import { justCapitalize } from '@acter/components/util/just-capitalize'
import clsx from 'clsx'

export interface GroupsList {
  acters: Acter[]
}

export const GroupsList: FC<GroupsList> = ({ acters }) => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <Box className={classes.container}>
      {acters.map((acter) => (
        <ListItem className={classes.item} key={acter.id}>
          <Link href={acterAsUrl({ acter })}>
            <Typography
              className={clsx({
                [classes.name]: true,
                [classes.active]: router.query.slug === acter.slug,
              })}
              variant="body2"
            >
              # {acter.name && justCapitalize(acter.name)}
            </Typography>
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
        '&:hover': {
          color: '#fff',
        },
      },
    },
    name: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: '0.8rem',
    },
    active: {
      color: theme.colors.white,
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
)
