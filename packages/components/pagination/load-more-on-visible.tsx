import React, { useEffect, useRef, FC, ReactElement } from 'react'
import { useIsVisible } from 'react-is-visible'

import { Button } from '@acter/components/styled'

export interface LoadMoreOnVisibleProps<T = unknown> {
  entities: T[]
  fetching: boolean
  hasMore: boolean
  renderOnLoading?: () => ReactElement
  loadMore: () => void
}

export const LoadMoreOnVisible: FC<LoadMoreOnVisibleProps> = ({
  entities,
  fetching,
  hasMore,
  renderOnLoading,
  loadMore,
}) => {
  if (fetching) {
    return renderOnLoading?.()
  }

  if (!entities || !hasMore) return null

  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)

  useEffect(() => {
    if (isVisible) loadMore()
  }, [isVisible])

  return (
    <div ref={nodeRef}>
      <Button onClick={loadMore}>Load more</Button>
    </div>
  )
}
