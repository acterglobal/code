import { useEffect, useState } from 'react'

import { useActer } from '@acter/lib/acter/use-acter'

type UseActerTitleResults = { title: string }

/**
 * Gives the title for current page
 * @param path of the current page
 * @returns title with acter name with path
 */
export const useActerTitle = (path: string): UseActerTitleResults => {
  const [title, setTitle] = useState<string>('Acter')
  const { acter } = useActer()
  useEffect(() => {
    if (acter) setTitle(`${acter.name}  - ${path}`)
  }, [acter])
  return { title }
}
