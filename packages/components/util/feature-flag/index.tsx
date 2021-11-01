import React, { FC } from 'react'

export const FeatureFlag: FC = ({ children }) => {
  // TODO: we may want to do this on a feature-by-feature basis
  if (process.env.NEXT_PUBLIC_IS_DEV) {
    return <>{children}</>
  }
  return null
}
