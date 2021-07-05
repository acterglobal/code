import React from 'react'
import { render, screen, within } from '@testing-library/react'

import { ActerListByType } from 'src/components/acter/list-by-type'
import { ExampleActerList } from 'src/__fixtures__'
import { ActerTypes } from 'src/constants'

const { GROUP, NETWORK, ORGANISATION } = ActerTypes

describe('ActerListByType', () => {
  it('should display a list of Acters ordered by ActerType', async () => {
    render(<ActerListByType acters={ExampleActerList} />)
    const typeLists = screen.queryAllByRole('list')

    // We have 3 lists for each of Org, Network & Group
    expect(typeLists.length).toBe(3)
    //TODO: We should use an explicit order
    const acterTypes = [ORGANISATION, NETWORK, GROUP]
    expect(
      typeLists.map(
        (list) => within(list).queryByRole('heading', { level: 2 }).textContent
      )
    ).toEqual(acterTypes.map((type) => `My ${type}s`))
    typeLists.map((list, i) => {
      const links = within(list).queryAllByRole('link')
      const acterType = acterTypes[i]
      const acterTypeLower = acterType.toLocaleLowerCase()
      // Kind of a re-test of the acterAsUrl lib, but we're testing the order of components here too
      expect(links[0].getAttribute('href')).toMatch(
        `/${acterTypeLower}s/${acterTypeLower}-1`
      )
      expect(links[0].textContent).toContain(`${acterType} 1`)
    })
  })
})
