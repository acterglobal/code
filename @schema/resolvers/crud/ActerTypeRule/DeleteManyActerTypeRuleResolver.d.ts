import { GraphQLResolveInfo } from "graphql";
import { DeleteManyActerTypeRuleArgs } from "./args/DeleteManyActerTypeRuleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyActerTypeRuleResolver {
    deleteManyActerTypeRule(ctx: any, info: GraphQLResolveInfo, args: DeleteManyActerTypeRuleArgs): Promise<AffectedRowsOutput>;
}
