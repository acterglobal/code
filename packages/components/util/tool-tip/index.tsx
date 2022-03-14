import React, { FC, ReactElement } from 'react'

import { Theme, Tooltip as MUITooltip } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { Color } from '@acter/components/themes/colors'

type TooltipColors = {
  backgroundColor?: Color
  color?: Color
}
interface TooltipProps extends TooltipColors {
  title: string
  children: ReactElement
}

export const Tooltip: FC<TooltipProps> = ({
  title,
  backgroundColor,
  color,
  children,
}) => {
  const classes = useStyles({ color, backgroundColor })
  return (
    <MUITooltip
      classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
      title={title}
      arrow
    >
      {children}
    </MUITooltip>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tooltip: {
      backgroundColor: ({ backgroundColor }: TooltipColors) =>
        backgroundColor || theme.palette.background.paper,
      color: ({ color }: TooltipColors) =>
        color || theme.palette.secondary.main,
      boxShadow: theme.shadows[1],
      fontSize: '0.7rem',
      marginTop: theme.spacing(1),
    },
    arrow: {
      color: ({ backgroundColor }: TooltipColors) =>
        backgroundColor || theme.palette.background.paper,
    },
  })
)
