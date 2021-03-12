import { Story, Meta } from '@storybook/react'
import { Modal } from 'src/components/util/modal'

import React from 'react'

const ChildComponent = () => {
  return (
    <div style={{ height: 500, width: 500, backgroundColor: 'white' }}></div>
  )
}

export default {
  title: 'util/modal',
  component: Modal,
} as Meta

export const modal: Story = () => (
  <Modal handleModalClose={() => null}>
    <ChildComponent />
  </Modal>
)
