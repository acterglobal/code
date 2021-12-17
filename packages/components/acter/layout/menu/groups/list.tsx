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
import { Tooltip } from '@acter/components/util/tool-tip'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Acter } from '@acter/schema'

export interface GroupsList {
  acters: Acter[]
}

export const GroupsList: FC<GroupsList> = ({ acters }) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      {acters.map((acter) => (
        <ListItem className={classes.item} key={acter.id}>
          <Link href={acterAsUrl({ acter })}>
            {acter.name.length > 15 ? (
              <Tooltip title={acter.name}>
                {/* Tooltip needs to hold ref for custom components so need to wrap in div which holds ref */}
                <div>
                  <GroupName acter={acter} />
                </div>
              </Tooltip>
            ) : (
              <GroupName acter={acter} />
            )}
          </Link>
        </ListItem>
      ))}
    </Box>
  )
}

type GroupNameProps = { acter: Acter }
const GroupName: FC<GroupNameProps> = ({ acter }) => {
  const classes = useStyles()
  const router = useRouter()
  return (
    <Typography
      className={clsx({
        [classes.name]: true,
        [classes.active]: router.query.slug === acter.slug,
      })}
      variant="body2"
      noWrap={acter.name.length > 15}
    >
      # {acter.name}
    </Typography>
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
      marginBottom: theme.spacing(0.8),
    },
    name: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: '0.8rem',
      width: 140,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    active: {
      color: theme.colors.white,
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
)
