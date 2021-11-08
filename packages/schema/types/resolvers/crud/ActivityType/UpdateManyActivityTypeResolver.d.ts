import { GraphQLResolveInfo } from "graphql";
import { UpdateManyActivityTypeArgs } from "./args/UpdateManyActivityTypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyActivityTypeResolver {
    updateManyActivityType(ctx: any, info: GraphQLResolveInfo, args: UpdateManyActivityTypeArgs): Promise<AffectedRowsOutput>;
}
