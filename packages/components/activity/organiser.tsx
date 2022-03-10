import React, { FC } from 'react'

import { Box, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { ActerAvatar } from '@acter/components/acter/avatar'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Size } from '@acter/lib/constants'
import { Acter } from '@acter/schema'

const { SMALL } = Size

interface OrganiserProps {
  acter: Acter
  size?: Size
}

export const Organiser: FC<OrganiserProps> = ({ acter, size }) => {
  const classes = useStyles({ size })

  if (!acter) return null

  return (
    <Box className={classes.organiser}>
      <ActerAvatar acter={acter} size={size === SMALL ? 2 : 4} />

      <Box>
        <Typography className={classes.heading} noWrap>
          Hosted by
        </Typography>
      </Box>

      <Box className={classes.organiserContainer}>
        <Link href={acterAsUrl({ acter })}>
          <Typography className={classes.name}>{acter.name}</Typography>
        </Link>
      </Box>
    </Box>
  )
}

type StyleProps = {
  size: Size
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    organiser: ({ size }: StyleProps) => ({
      alignItems: 'center',
      height: 'inherit',
      padding: size !== SMALL && theme.spacing(2),
      backgroundColor: 'white',
      borderRadius: theme.spacing(1),
      display: 'flex',
      [theme.breakpoints.down('sm')]: {},
      marginTop: size === SMALL && 5,
      marginBottom: size === SMALL && 5,
    }),
    heading: ({ size }: StyleProps) => ({
      display: 'flex',
      alignItems: 'center',
      marginLeft: size === SMALL ? 3 : 10,
      color: theme.palette.secondary.main,
      fontSize: size === SMALL ? '0.7rem' : '0.9rem',
      lineHeight: 1.3,
      marginRight: 5,
    }),
    organiserContainer: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    name: ({ size }: StyleProps) => ({
      color: theme.palette.secondary.main,
      fontSize: size === SMALL ? '0.7rem' : '0.9rem',
      fontWeight: theme.typography.fontWeightBold,
      display: '-webkit-box',
      boxOrient: 'vertical',
      lineClamp: 1,
      wordBreak: 'keep-all',
      overflow: 'hidden',
      lineHeight: 1.3,
    }),
  });
})
