import { GraphQLResolveInfo } from "graphql";
import { UpdateManyLinkArgs } from "./args/UpdateManyLinkArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyLinkResolver {
    updateManyLink(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLinkArgs): Promise<AffectedRowsOutput>;
}
