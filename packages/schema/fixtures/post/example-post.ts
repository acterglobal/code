import { Post } from '@acter/schema'
import {
  ExampleUserActer,
  ExampleOrganisationActer,
} from '@acter/schema/fixtures'

export const ExamplePost: Post = {
  id: '7757714c-f537-466c-86df-fdc5b74b56ee',
  content: `This is post content and it is long because 
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quam laudantium quas voluptates assumenda deserunt, sequi
            alias veritatis vitae eum culpa amet delectus eveniet tempore
            quibusdam repellat ut? Corrupti, consequuntur ipsam`,
  createdAt: new Date(),
  updatedAt: new Date(),
  Comments: [],
  PostReactions: [],

  Author: ExampleUserActer,
  authorId: ExampleUserActer.id,
  Acter: ExampleOrganisationActer,
  acterId: ExampleOrganisationActer.id,
}

export const ExampleSubPost: Post = {
  ...ExamplePost,
  id: 'd81402b8-10d1-4bf3-b37a-1261e3a7230a',
  content: `This is sub message content and it is long because 
  Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Quam laudantium quas voluptates assumenda deserunt, sequi
  alias veritatis vitae eum culpa amet delectus eveniet tempore
  quibusdam repellat ut? Corrupti, consequuntur ipsam`,

  Parent: ExamplePost,
}
