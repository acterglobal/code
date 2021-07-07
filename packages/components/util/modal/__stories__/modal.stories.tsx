import { Story, Meta } from '@storybook/react'
import { StateFullModal as Modal } from '@acter/components/util/modal/statefull-modal'

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
