import React from 'react'
import { Meta, Story } from '@storybook/react'
import Focus from '../focus'
import { ChipProps } from '../focus'

export default {
  title: 'landingpage/Chip',
  component: Focus,
} as Meta

const focus1 = {
  title: 'Climate change',
  type: 'Environment',
  numOfPeople: 3,
}
const focus2 = {
  title: 'Curruption',
  type: 'Social',
  numOfPeople: 43,
}
const focus3 = {
  title: 'Waste',
  type: 'Economy',
  numOfPeople: 43,
}

export const Chip: React.FC = () => (
  <>
    <Focus chipContent={focus1} />
    <Focus chipContent={focus2} />
    <Focus chipContent={focus3} />
  </>
)
