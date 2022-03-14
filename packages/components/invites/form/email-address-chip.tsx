import React, { FC } from 'react'

import { Close as DeleteIcon } from '@mui/icons-material'
import { Box, Theme } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

interface EmailAddressChipProps {
  emailAddress: string
  handleDelete: (email: string) => void
}
export const EmailAddressChip: FC<EmailAddressChipProps> = ({
  emailAddress,
  handleDelete,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.chip}>
      {emailAddress}
      <DeleteIcon
        fontSize="inherit"
        className={classes.icon}
        onClick={() => handleDelete(emailAddress)}
      />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5),
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.background.paper,
      fontSize: '0.7rem',
      padding: theme.spacing(0.5),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      borderRadius: theme.spacing(0.5),
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      fontSize: '0.9rem',
      cursor: 'pointer',
      marginLeft: theme.spacing(1),
    },
  })
)
