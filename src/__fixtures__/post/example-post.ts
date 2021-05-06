import { Post } from '@schema'

import { ExampleUserActer, ExampleOrganisationActer } from 'src/__fixtures__'

export const ExamplePost: Post = {
  id: '7757714c-f537-466c-86df-fdc5b74b56ee',
  subject: 'Example Post Title',
  content: `This is post content and it is long because 
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quam laudantium quas voluptates assumenda deserunt, sequi
            alias veritatis vitae eum culpa amet delectus eveniet tempore
            quibusdam repellat ut? Corrupti, consequuntur ipsam`,
  createdAt: new Date(),
  updatedAt: new Date(),

  Author: ExampleUserActer,
  authorId: ExampleUserActer.id,
  Acter: ExampleOrganisationActer,
  acterId: ExampleOrganisationActer.id,
}

export const ExampleSubPost: Post = {
  id: 'd81402b8-10d1-4bf3-b37a-1261e3a7230a',
  subject: 'Example Sub Post',
  content: `This is sub message content and it is long because 
  Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Quam laudantium quas voluptates assumenda deserunt, sequi
  alias veritatis vitae eum culpa amet delectus eveniet tempore
  quibusdam repellat ut? Corrupti, consequuntur ipsam`,
  createdAt: new Date(),
  updatedAt: new Date(),

  Author: ExampleUserActer,
  authorId: ExampleUserActer.id,
  Acter: ExampleOrganisationActer,
  acterId: ExampleOrganisationActer.id,
  Parent: ExamplePost,
  parentId: ExamplePost.id,
}
