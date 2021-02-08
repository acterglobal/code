import React, { FC } from 'react'
import { TopBar } from '../layout/top-bar'
import { TopBarProps } from '../layout/top-bar'

const Dashboard: FC<TopBarProps> = ({ user }) => {
  return (
    <>
      <TopBar user={user} />
    </>
  )
}

export default Dashboard
