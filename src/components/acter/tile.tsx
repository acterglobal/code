import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Box, Typography } from '@material-ui/core'
import Image from 'next/image'
import { getImageUrl } from 'src/lib/images/get-image-url'
import { Acter } from '@schema'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      borderRadius: 7,
      height: 150,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: theme.spacing(0.8),
    },
    image: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(3),
      border: '1px solid black',
      width: 100,
      height: 100,
      borderRadius: '50%',
    },
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    acterType: {
      color: grey[700],
      fontWeight: 'lighter',
      fontSize: 13,
      marginBottom: theme.spacing(1),
      textTransform: 'capitalize',
    },
    title: {
      color: grey[800],
      fontWeight: 'bold',
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
          layout="responsive"
          width="100"
          height="100"
        />
      </Box>

      <Box className={classes.infoSection}>
        <Typography variant="body2" className={classes.acterType}>
          {acter.ActerType.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.title}>
          {acter.name}
        </Typography>
        <Typography variant="body2" className={classes.acterType} gutterBottom>
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
