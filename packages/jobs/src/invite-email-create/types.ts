import { InviteCreateManyInput } from '@acter/schema/generated/resolvers/inputs/InviteCreateManyInput'

export type InviteEmailCreate = InviteCreateManyInput & {
  senderName: string
}
