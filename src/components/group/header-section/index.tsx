import React, { FC } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Acter } from '@schema'
import { Connect, ConnectProps } from 'src/components/acter/connect'
export interface HeaderSectionProps extends ConnectProps {
  acter: Acter
}

export const HeaderSection: FC<HeaderSectionProps> = ({
  acter,
  user,
  onJoin,
  onLeave,
  loading,
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.heading}>
      <Box>
        <Typography
          className={classes.name}
          variant="subtitle1"
        >{`# ${acter.name}`}</Typography>
      </Box>

      <Box>
        <Connect
          acter={acter}
          user={user}
          onJoin={onJoin}
          onLeave={onLeave}
          loading={loading}
        />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      height: theme.spacing(7),
      borderBottom: '1px solid white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    name: {
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)
