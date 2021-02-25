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

export const AddActerType: FC = () => {
  const classes = useStyles()
  return (
    <Modal>
      <Box className={classes.container}>
        <Typography className={classes.header} variant="h5">
          + Add
        </Typography>
        <Box className={classes.caption}>
          <Typography variant="caption">
            Create an organisation or network on Acter to start coordinating or
            collaborating.
          </Typography>
        </Box>
        <Box>
          <ActerType acterType="organisation" />
          <ActerType acterType="network" />
        </Box>
      </Box>
    </Modal>
  )
}
