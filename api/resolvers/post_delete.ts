import { Resolver, Mutation, Arg, Ctx, Authorized } from 'type-graphql'
import { ActerGraphQLContext } from 'src/contexts/graphql-api'

import { Post } from '@schema'

@Resolver(Post)
export class PostDeleteResolver {
  @Authorized()
  @Mutation(() => String)
  async deleteManyPost(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('postId') postId: string
  ) {
    const res = await ctx.prisma.post.deleteMany({
      where: {
        OR: [{ id: { equals: postId } }, { parentId: { equals: postId } }],
      },
    })

    if (res) {
      console.log('This is res', res)
    }

    return null
  }
}
