import React, { FC } from 'react'

import { Box, Theme, Typography } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Acter } from '@acter/schema'

type GroupListProps = {
  groups: Acter[]
}
export const GroupsList: FC<GroupListProps> = ({ groups }) => {
  const classes = useStyles()
  if (groups.length === 0) {
    return <ZeroGroups />
  }
  return (
    <>
      {groups.map((group) => (
        <Link href={acterAsUrl({ acter: group })} key={group.id}>
          <Box className={classes.group}>
            <Box className={classes.icon}>
              <Typography className={classes.symbol}>#</Typography>
            </Box>
            <Box className={classes.info}>
              <Typography variant="body1" className={classes.title}>
                {group.name}
              </Typography>
              <Typography variant="caption" className={classes.acter}>
                {group.Parent.name}
              </Typography>
            </Box>
          </Box>
        </Link>
      ))}
    </>
  )
}

const ZeroGroups = () => {
  const classes = useStyles()
  return (
    <Typography variant="body2" className={classes.zeroMessage}>
      You are currently not part of any groups. As you join new groups they will
      show here.
    </Typography>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    group: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      color: theme.palette.secondary.main,
    },
    icon: {
      height: theme.spacing(8.5),
      width: theme.spacing(10),
      backgroundColor: theme.palette.background.default,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    symbol: {
      fontSize: theme.spacing(3),
      fontWeight: theme.typography.fontWeightMedium,
    },
    info: {
      width: 200,
      marginLeft: theme.spacing(2),
    },
    title: {
      fontSize: theme.spacing(2),
      fontWeight: theme.typography.fontWeightMedium,
      lineHeight: theme.spacing(0.15),
      display: '-webkit-box',
      boxOrient: 'vertical',
      lineClamp: 2,
      wordBreak: 'keep-all',
      overflow: 'hidden',
    },
    acter: {
      fontSize: theme.spacing(1.2),
      fontWeight: theme.typography.fontWeightMedium,
      display: '-webkit-box',
      boxOrient: 'vertical',
      lineClamp: 1,
      wordBreak: 'keep-all',
      overflow: 'hidden',
    },
    zeroMessage: {
      width: 250,
      fontStyle: 'italic',
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.main,
    },
  })
)
