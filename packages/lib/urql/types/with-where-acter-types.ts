interface EqualsId {
  equals: string
}

interface WhereActerId {
  acterId: EqualsId
}

export interface WithWhereActerId {
  where?: WhereActerId
}
