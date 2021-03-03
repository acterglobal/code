import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Modal } from 'src/components/util/modal/modal'
import { ActerType } from 'src/components/acter/acter-type'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: 500,
    padding: '20px 20px 60px 20px',
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caption: {
    textAlign: 'center',
    width: 250,
    margin: 'auto',
    color: theme.palette.secondary.main,
    marginBottom: 40,
  },
}))

export interface AddActerTypeProps {
  onClick: (acterType: string) => any
}

export const AddActerType: FC<AddActerTypeProps> = ({ onClick }) => {
  const classes = useStyles()
  return (
    <Modal>
      <Box className={classes.container}>
        <Typography className={classes.header} variant="h5">
          + Add
        </Typography>
        <Box className={classes.caption}>
          <Typography variant="caption">
            Create an organization or network on Acter to start coordinating or
            collaborating.
          </Typography>
        </Box>
        <Box>
          <ActerType acterType="organization" onClick={onClick} />
          <ActerType acterType="network" onClick={onClick} />
        </Box>
      </Box>
    </Modal>
  )
}
