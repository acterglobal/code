import { GraphQLResolveInfo } from "graphql";
import { UpdateManyActivityArgs } from "./args/UpdateManyActivityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyActivityResolver {
    updateManyActivity(ctx: any, info: GraphQLResolveInfo, args: UpdateManyActivityArgs): Promise<AffectedRowsOutput>;
}
