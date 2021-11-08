import { GraphQLResolveInfo } from "graphql";
import { UpdateManyActerInterestArgs } from "./args/UpdateManyActerInterestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyActerInterestResolver {
    updateManyActerInterest(ctx: any, info: GraphQLResolveInfo, args: UpdateManyActerInterestArgs): Promise<AffectedRowsOutput>;
}
