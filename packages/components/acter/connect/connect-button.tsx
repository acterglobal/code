import { FC } from 'react'

import { useRouter } from 'next/router'

import { Button, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import clsx from 'clsx'

import { Size } from '@acter/lib/constants'

const { SMALL } = Size

export interface ConnectButtonProps {
  buttonText: string
  redirectUrl?: string
  isActivity?: boolean
  size?: Size
}
export const ConnectButton: FC<ConnectButtonProps> = ({
  buttonText,
  redirectUrl,
  isActivity,
  size,
}) => {
  const classes = useStyles({ size })
  const router = useRouter()

  const handleButtonClick = () => {
    router.push(redirectUrl)
  }
  return (
    <Button
      className={clsx(
        classes.button,
        isActivity ? classes.activityButton : classes.acterButton
      )}
      onClick={handleButtonClick}
    >
      {buttonText}
    </Button>
  )
}

type StyleProps = {
  size: Size
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    button: ({ size }: StyleProps) => ({
      borderRadius: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      minWidth: theme.spacing(size === SMALL ? 11 : 14),
      height: theme.spacing(size === SMALL ? 4 : 4.5),
      border: '1px solid',
      color: 'white',
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover': {
        backgroundColor: 'white',
        color: theme.palette.secondary.main,
      },
      fontSize: size === SMALL ? '0.8rem' : '1rem',
    }),
    acterButton: {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: 'white',
        color: theme.palette.primary.main,
      },
    },
    activityButton: {
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: 'white',
        color: theme.palette.secondary.main,
      },
    },
  })
})
