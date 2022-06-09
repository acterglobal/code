import React, { FC, ReactNode } from 'react'

import {
  LoadMoreOnVisible,
  LoadMoreOnVisibleProps,
} from './load-more-on-visible'

export interface InfiniteListProps<T = unknown>
  extends LoadMoreOnVisibleProps<T> {
  entities: T[]
  render?: (entity: T) => ReactNode
}

export const InfiniteList: FC<InfiniteListProps> = ({
  entities,
  render,
  children,
  ...restProps
}) => (
  <>
    {render && entities?.map(render)}
    {children}
    <LoadMoreOnVisible entities={entities} {...restProps} />
  </>
)
