import { Acter } from '@acter/schema'

export type HasActer<T> = T & {
  Acter?: Acter
}
