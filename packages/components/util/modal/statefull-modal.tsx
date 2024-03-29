import React, { FC, useState, ReactNode } from 'react'

import { Modal } from '@acter/components/util/modal'
import { TopBarProps } from '@acter/components/util/modal/top-bar'

export interface StateFullModalProps extends TopBarProps {
  children: ReactNode
  handleModalClose: (any?) => void
}

export const StateFullModal: FC<StateFullModalProps> = ({
  children,
  handleModalClose,
  actionButtons = null,
  acter,
  user,
  heading,
}) => {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
    handleModalClose()
  }

  return (
    <Modal
      open={open}
      handleModalClose={handleClose}
      actionButtons={actionButtons}
      acter={acter}
      user={user}
      heading={heading}
    >
      {children}
    </Modal>
  )
}
