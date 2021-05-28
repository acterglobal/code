import { Authorized, Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import { ActerGraphQLContext } from 'src/contexts/graphql-api'
import { Post } from '@schema'

@Resolver(Post)
export class PostResolver {
  @Authorized()
  @Mutation(() => Post)
  async createPost(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('content') content: string,
    @Arg('acterId') acterId: string,
    @Arg('authorId') authorId: string,
    @Arg('parentId', { nullable: true }) parentId: string
  ): Promise<Post> {
    const post = await ctx.prisma.post.create({
      data: {
        content,
        acterId,
        authorId,
        parentId,
      },
    })
    return post
  }
}
