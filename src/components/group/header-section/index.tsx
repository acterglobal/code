import React, { FC } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Acter } from '@schema'
// import { InfoOutlined as InfoIcon } from '@material-ui/icons'
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

  // const handleInfoIconClick = () => {
  //   console.log('Info clicked')
  // }

  return (
    <Box className={classes.heading}>
      <Box>
        <Typography
          className={classes.name}
          variant="subtitle1"
        >{`# ${acter.name}`}</Typography>
      </Box>

      <Box className={classes.buttons}>
        {/* <Box className={classes.info} onClick={handleInfoIconClick}>
          <InfoIcon />
        </Box> */}
        <Box className={classes.join}>
          <Connect
            acter={acter}
            user={user}
            onJoin={onJoin}
            onLeave={onLeave}
            loading={loading}
          />
        </Box>
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
    buttons: {
      display: 'flex',
    },
    info: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    join: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      width: theme.spacing(13),
      padding: theme.spacing(0.7),
      marginLeft: theme.spacing(3),
      borderRadius: theme.spacing(2),
      textAlign: 'center',
      fontSize: '0.8rem',
      cursor: 'pointer',
    },
  })
)
