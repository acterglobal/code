import React, { FC, useRef } from 'react'
import { useIsVisible } from 'react-is-visible'

import { useRouter } from 'next/router'

import { Box, makeStyles, createStyles, Theme, Button } from '@material-ui/core'

import clsx from 'clsx'

import { ImageSection } from '@acter/components/activity/tile/image-section'
import { InfoSection } from '@acter/components/activity/tile/info-section'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { capitalize } from '@acter/lib/string/capitalize'
import { Activity } from '@acter/schema'

export interface ActivityTileProps {
  activity: Activity
  hovered?: boolean
}

export const ActivityTile: FC<ActivityTileProps> = ({
  activity,
  hovered = false,
}) => {
  const classes = useStyles()
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)
  const router = useRouter()

  if (!activity) return null

  const acterUrl = acterAsUrl({ acter: activity?.Acter })

  const handleButtonClick = () => {
    router.push(acterUrl)
  }

  return (
    <div
      className={clsx(
        classes.activityTile,
        hovered && classes.activityTileHovered
      )}
      ref={nodeRef}
    >
      <ImageSection activity={activity} />

      <InfoSection activity={activity} />

      {isVisible && (
        <Box className={classes.buttonContainer}>
          <Button onClick={handleButtonClick} className={classes.button}>
            {capitalize('View')}
          </Button>
        </Box>
      )}
    </div>
  )
}

// TODO: refactor to common style
const hoverStyle = { boxShadow: '2px 2px 8px rgb(0, 0, 0, .1)' }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activityTile: {
      backgroundColor: 'white',
      borderRadius: theme.spacing(2),
      overflow: 'hidden',
      width: 210,
      height: 230,
      position: 'relative',
      cursor: 'pointer',
      '&:hover': hoverStyle,
    },
    activityTileHovered: hoverStyle,
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(1.7),
    },
    button: {
      borderRadius: theme.spacing(3),
      marginRight: theme.spacing(1),
      height: theme.spacing(4),
      minWidth: theme.spacing(11),
      backgroundColor: theme.palette.secondary.main,
      color: theme.colors.white,
      border: '1px solid',
      borderColor: theme.palette.secondary.main,
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '0.8rem',
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
  })
)
