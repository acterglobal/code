import { FC } from 'react'

import dynamic from 'next/dynamic'

import { useActer } from '@acter/lib/acter/use-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'

const EditGroup = dynamic(() =>
  import('@acter/components/group/form').then((mod) => mod.GroupForm)
)

export const About: FC = () => {
  const { acter } = useActer()

  const [{ fetching: saving }, updateActer] = useUpdateActer(acter)

  if (!acter) return null

  return (
    <EditGroup
      acter={acter}
      parentActer={acter.Parent}
      onSubmit={updateActer}
      saving={saving}
    />
  )
}
