import { GraphQLResolveInfo } from "graphql";
import { CreateManyActerTypeRuleArgs } from "./args/CreateManyActerTypeRuleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyActerTypeRuleResolver {
    createManyActerTypeRule(ctx: any, info: GraphQLResolveInfo, args: CreateManyActerTypeRuleArgs): Promise<AffectedRowsOutput>;
}
