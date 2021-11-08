import { GraphQLResolveInfo } from "graphql";
import { CreateManyInviteArgs } from "./args/CreateManyInviteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyInviteResolver {
    createManyInvite(ctx: any, info: GraphQLResolveInfo, args: CreateManyInviteArgs): Promise<AffectedRowsOutput>;
}
