import { GraphQLResolveInfo } from "graphql";
import { CreateManyPostArgs } from "./args/CreateManyPostArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPostResolver {
    createManyPost(ctx: any, info: GraphQLResolveInfo, args: CreateManyPostArgs): Promise<AffectedRowsOutput>;
}
