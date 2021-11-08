import { GraphQLResolveInfo } from "graphql";
import { DeleteManyActivityArgs } from "./args/DeleteManyActivityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyActivityResolver {
    deleteManyActivity(ctx: any, info: GraphQLResolveInfo, args: DeleteManyActivityArgs): Promise<AffectedRowsOutput>;
}
