import { GraphQLResolveInfo } from "graphql";
import { DeleteManyActivityTypeArgs } from "./args/DeleteManyActivityTypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyActivityTypeResolver {
    deleteManyActivityType(ctx: any, info: GraphQLResolveInfo, args: DeleteManyActivityTypeArgs): Promise<AffectedRowsOutput>;
}
