import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Box, Typography } from '@material-ui/core'
import Image from 'next/image'
import { getImageUrl } from 'src/lib/images/get-image-url'
import { getActerTypeIcon } from 'src/lib/images/get-icons'
import { Acter } from '@schema'

export interface ActerTileProps {
  acter: Acter
}

export const ActerTile: FC<ActerTileProps> = ({ acter }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.image}>
        <Image
          src={getImageUrl(acter.avatarUrl, 'avatar')}
          alt={acter.name}
          layout="intrinsic"
          width="100"
          height="100"
        />
      </Box>

      <Box className={classes.infoSection}>
        <Box className={classes.acterType}>
          <Image
            src={getActerTypeIcon(acter.ActerType.name)}
            alt={acter.name}
            width={20}
            height={20}
          />
          <Typography variant="body2" className={classes.acterTypeName}>
            {acter.ActerType.name}
          </Typography>
        </Box>
        <Typography variant="subtitle1" className={classes.title}>
          {acter.name}
        </Typography>
        <Typography
          className={classes.acterTypeName}
          variant="body2"
          gutterBottom
        >
          {acter.location}
        </Typography>
        <Box className={classes.descriptionSection}>
          <Typography variant="caption" className={classes.description}>
            {acter.description}
          </Typography>
          <Typography variant="caption">View more</Typography>
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      borderRadius: 7,
      height: 150,
      width: 700,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: theme.spacing(0.8),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
    },
    image: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(3),
      border: '2px solid black',
      width: 100,
      height: 100,
      borderRadius: '50%',
      overflow: 'hidden',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        overflow: 'hidden',
      },
    },
    acterType: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(1),
    },
    acterTypeName: {
      color: grey[700],
      fontWeight: theme.typography.fontWeightLight,
      fontSize: 13,
      textTransform: 'capitalize',
      marginLeft: 5,
    },
    title: {
      color: grey[700],
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: 0,
      lineHeight: 1,
    },
    descriptionSection: {
      width: 400,
      height: 40,
      display: 'flex',
      alignItems: 'flex-end',
    },
    description: {
      color: grey[800],
      display: '-webkit-box',
      boxOrient: 'vertical',
      lineClamp: 2,
      wordBreak: 'break-all',
      overflow: 'hidden',
      width: '80%',
    },
  })
)
