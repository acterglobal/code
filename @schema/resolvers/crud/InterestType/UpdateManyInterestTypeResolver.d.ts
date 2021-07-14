import { GraphQLResolveInfo } from "graphql";
import { UpdateManyInterestTypeArgs } from "./args/UpdateManyInterestTypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyInterestTypeResolver {
    updateManyInterestType(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInterestTypeArgs): Promise<AffectedRowsOutput>;
}
