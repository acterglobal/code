import React, { useState } from 'react'

import { Story, Meta } from '@storybook/react'

import { Drawer } from '@acter/components/util/drawer'

const ChildComponent = () => {
  return (
    <div style={{ height: 500, width: 500, backgroundColor: 'white' }}></div>
  )
}

export default {
  title: 'Organisms/Util/drawer',
  component: Drawer,
} as Meta

export const SideDrawer: Story = () => {
  const [open, setOpen] = useState(true)
  return (
    <Drawer
      open={open}
      handleClose={() => setOpen(false)}
      heading="Testing side drawer"
    >
      <ChildComponent />
    </Drawer>
  )
}
