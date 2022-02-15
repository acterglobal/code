import { parseActerTypeName } from '@acter/lib/acter-types/parse-acter-type-name'
import { OrganisationActerType } from '@acter/schema/fixtures'

describe('acterTypeAsUrl', () => {
  it('should parse an ActerType name to lowercase with no spaces', () => {
    const ExampleOrganisation = {
      ...OrganisationActerType,
      name: 'acter name',
    }
    expect(parseActerTypeName(ExampleOrganisation.name)).toBe('acter-name')
  })
})
