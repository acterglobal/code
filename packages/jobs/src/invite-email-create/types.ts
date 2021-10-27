import { InviteCreateManyInput } from '@acter/schema/types'

export type InviteEmailCreate = InviteCreateManyInput & {
  senderName: string
}
