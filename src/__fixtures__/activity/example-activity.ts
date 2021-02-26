import { ExampleUser } from '__fixtures__'

export const ExampleActiivity = {
  id: '9a64149c-5641-4841-96b1-1b2ec85f88aa',
  acterId: '9a64149c-5641-4841-96b1-1b2ec85f99bb',
  title: 'Green eco talk',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ratione doloribus distinctio sequi accusantium amet voluptate quo, veritatis deserunt. Doloremque quis harum eos dolor laborum, eaque voluptates beatae ipsa quae.',
  startDate: '19 MAR. 17.00',
  endDate: '20 MAR. 18.00',
  //   location: 'online',
  location: 'Fiskerivej 2H, 8000 Aarhus',
  interests: [],
  people: [],
  organizations: [],
  image: 'https://acter.ams3.cdn.digitaloceanspaces.com/assets/tree.png',
  createdAt: new Date(),
  updatedAt: new Date(),
  createdByUserId: ExampleUser.id,
}
