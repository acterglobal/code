import React, { FC } from 'react'

import { useRouter } from 'next/router'

import {
  Box,
  createStyles,
  makeStyles,
  ListItem,
  Theme,
  Typography,
} from '@material-ui/core'

import clsx from 'clsx'

import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { capitalize } from '@acter/lib/string/capitalize'
import { Acter } from '@acter/schema'

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
              # {capitalize(acter.name)}
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
          color: theme.colors.white,
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
