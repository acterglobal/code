import { Resolver, Query, ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Health {
  @Field()
  ok: boolean

  constructor() {
    this.ok = true
  }
}

@Resolver(Health)
export class HealthCheckResolver {
  @Query(() => Health)
  async healthCheck(): Promise<Health> {
    return Promise.resolve(new Health())
  }
}
