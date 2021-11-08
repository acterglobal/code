import { GraphQLResolveInfo } from "graphql";
import { DeleteManyLinkArgs } from "./args/DeleteManyLinkArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyLinkResolver {
    deleteManyLink(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLinkArgs): Promise<AffectedRowsOutput>;
}
