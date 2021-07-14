import { GraphQLResolveInfo } from "graphql";
import { CreateManyLinkArgs } from "./args/CreateManyLinkArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyLinkResolver {
    createManyLink(ctx: any, info: GraphQLResolveInfo, args: CreateManyLinkArgs): Promise<AffectedRowsOutput>;
}
