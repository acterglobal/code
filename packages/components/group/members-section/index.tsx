import React, { FC, useState } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { FollowersAvatars } from '@acter/components/acter/followers-avatars'
import { MembersSection as Members } from '@acter/components/acter/landing-page/members-section'
import { Modal } from '@acter/components/util/modal'
import { useActer } from '@acter/lib/acter/use-acter'

export const MembersSection: FC = () => {
  const classes = useStyles()
  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => setOpenModal(true)
  const handleModalClose = () => setOpenModal(false)

  const { acter, fetching: acterLoading } = useActer()
  if (acterLoading || !acter) return null

  return (
    <>
      <Typography variant="h6" className={classes.name}>
        Members
      </Typography>
      <Box onClick={handleClick}>
        <FollowersAvatars acter={acter} />
      </Box>

      {openModal && (
        <Modal
          heading="Members"
          open={openModal}
          handleModalClose={handleModalClose}
        >
          <Box className={classes.members}>
            <Members />
          </Box>
        </Modal>
      )}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    name: {
      marginBottom: theme.spacing(1.5),
    },
    members: {
      width: theme.spacing(80),
      padding: theme.spacing(3),
    },
  })
)
