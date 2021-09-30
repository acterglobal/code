import React from 'react'

import { Story, Meta } from '@storybook/react'

import { StateFullModal as Modal } from '@acter/components/util/modal/statefull-modal'

const ChildComponent = () => {
  return (
    <div style={{ height: 500, width: 500, backgroundColor: 'white' }}></div>
  )
}

export default {
  title: 'Organisms/Util/Modal',
  component: Modal,
} as Meta

export const modal: Story = () => (
  <Modal handleModalClose={() => null}>
    <ChildComponent />
  </Modal>
)
