import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { ActerType } from '@acter/components/acter/acter-type'
import { StateFullModal as Modal } from '@acter/components/util/modal/statefull-modal'
import { ActerTypes } from '@acter/lib/constants/acter-types'

const { ORGANISATION, NETWORK } = ActerTypes

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: 500,
    padding: '20px 20px 60px 20px',
  },
  header: {
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
  },
  caption: {
    textAlign: 'center',
    width: 300,
    margin: 'auto',
    color: theme.palette.secondary.main,
    marginBottom: 40,
  },
}))

export interface AddActerTypeProps {
  onClick: (acterType: string) => void
}

export const AddActerType: FC<AddActerTypeProps> = ({ onClick }) => {
  const classes = useStyles()
  const router = useRouter()
  const handleModalClose = () => router.back()

  return (
    <Modal handleModalClose={handleModalClose}>
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
          <ActerType acterType={ORGANISATION} onClick={onClick} />
          <ActerType acterType={NETWORK} onClick={onClick} />
        </Box>
      </Box>
    </Modal>
  )
}
