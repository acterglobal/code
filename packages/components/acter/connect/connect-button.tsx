import { FC } from 'react'

import { useRouter } from 'next/router'

import { Button, createStyles, makeStyles, Theme } from '@material-ui/core'

import clsx from 'clsx'

export interface ConnectButtonProps {
  buttonText: string
  redirectUrl?: string
  isActivity?: boolean
}
export const ConnectButton: FC<ConnectButtonProps> = ({
  buttonText,
  redirectUrl,
  isActivity,
}) => {
  const classes = useStyles()
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
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    button: {
      borderRadius: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      minWidth: theme.spacing(14),
      height: theme.spacing(4.5),
      border: '1px solid',
      color: 'white',
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover': {
        backgroundColor: 'white',
        color: theme.palette.secondary.main,
      },
      fontSize: '1rem',
    },
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
