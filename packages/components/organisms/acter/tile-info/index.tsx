import React, { FC, useMemo } from 'react'

import { Box, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import { ActerAvatar } from '@acter/components/acter/avatar'
import { Link } from '@acter/components/util/anchor-link'
import { Image } from '@acter/components/util/image'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { excludeActerTypes } from '@acter/lib/acter/exclude-acter-types'
import { ActerTypes } from '@acter/lib/constants'
import { getActerTypeIcon } from '@acter/lib/images/get-icons'
import { capitalize } from '@acter/lib/string/capitalize'
import { Acter } from '@acter/schema'

const { ACTIVITY, GROUP, USER } = ActerTypes
export interface ActerTileInfoProps {
  acter: Acter
}

export const ActerTileInfo: FC<ActerTileInfoProps> = ({ acter }) => {
  const classes = useStyles()
  const followingActers = useMemo(
    () =>
      excludeActerTypes(
        acter?.Following.map(({ Following }) => Following),
        [ACTIVITY, USER, GROUP]
      ),
    [acter?.Following]
  )

  return (
    <Box className={classes.infoSection}>
      <Box className={classes.acterType}>
        <Image
          src={getActerTypeIcon(acter.ActerType.name)}
          alt={acter.name}
          width={20}
          height={20}
        />
        <Typography
          variant="body2"
          className={classes.typeAndLocation}
          style={{ marginLeft: 10 }}
        >
          {capitalize(acter.ActerType.name)}
        </Typography>
      </Box>

      <Typography variant="subtitle1" className={classes.title}>
        {acter.name}
      </Typography>
      <Typography
        className={classes.typeAndLocation}
        variant="body2"
        gutterBottom
      >
        {capitalize(acter.location)}
      </Typography>
      <Box className={classes.descriptionSection}>
        <Typography variant="caption" className={classes.description}>
          {capitalize(acter.description)}
        </Typography>
      </Box>
      {followingActers.length > 0 && (
        <Box className={classes.partOf}>
          <Typography variant="caption">Part of</Typography>

          <Box className={classes.container}>
            {followingActers.map((acter) => (
              <Link key={`acter-${acter.id}`} href={acterAsUrl({ acter })}>
                <ActerAvatar size={2.3} acter={acter} />
                <Typography variant="caption" className={classes.networkTitle}>
                  {acter.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    infoSection: {
      width: 400,
      color: theme.colors.grey.dark,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        overflow: 'hidden',
      },
    },
    acterType: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(1),
    },
    typeAndLocation: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: 13,
    },
    title: {
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: 0,
      lineHeight: 1,
    },
    descriptionSection: {
      maxHeight: 40,
      display: 'flex',
      alignItems: 'flex-start',
    },
    description: {
      color: theme.colors.black,
      display: '-webkit-box',
      boxOrient: 'vertical',
      lineClamp: 2,
      wordBreak: 'keep-all',
      overflow: 'hidden',
      marginRight: theme.spacing(0.5),
    },
    partOf: {
      marginTop: theme.spacing(0.5),
      fontStyle: 'italic',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      '& a': {
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1.5),
        textDecoration: 'none',
      },
    },
    networkTitle: {
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing(0.5),
      color: theme.colors.grey.dark,
    },
  })
)
