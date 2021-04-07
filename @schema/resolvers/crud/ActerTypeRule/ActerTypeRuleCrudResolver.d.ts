import { GraphQLResolveInfo } from "graphql";
import { AggregateActerTypeRuleArgs } from "./args/AggregateActerTypeRuleArgs";
import { CreateActerTypeRuleArgs } from "./args/CreateActerTypeRuleArgs";
import { DeleteActerTypeRuleArgs } from "./args/DeleteActerTypeRuleArgs";
import { DeleteManyActerTypeRuleArgs } from "./args/DeleteManyActerTypeRuleArgs";
import { FindFirstActerTypeRuleArgs } from "./args/FindFirstActerTypeRuleArgs";
import { FindManyActerTypeRuleArgs } from "./args/FindManyActerTypeRuleArgs";
import { FindUniqueActerTypeRuleArgs } from "./args/FindUniqueActerTypeRuleArgs";
import { UpdateActerTypeRuleArgs } from "./args/UpdateActerTypeRuleArgs";
import { UpdateManyActerTypeRuleArgs } from "./args/UpdateManyActerTypeRuleArgs";
import { UpsertActerTypeRuleArgs } from "./args/UpsertActerTypeRuleArgs";
import { ActerTypeRule } from "../../../models/ActerTypeRule";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateActerTypeRule } from "../../outputs/AggregateActerTypeRule";
export declare class ActerTypeRuleCrudResolver {
    acterTypeRule(ctx: any, args: FindUniqueActerTypeRuleArgs): Promise<ActerTypeRule | null>;
    findFirstActerTypeRule(ctx: any, args: FindFirstActerTypeRuleArgs): Promise<ActerTypeRule | null>;
    acterTypeRules(ctx: any, args: FindManyActerTypeRuleArgs): Promise<ActerTypeRule[]>;
    createActerTypeRule(ctx: any, args: CreateActerTypeRuleArgs): Promise<ActerTypeRule>;
    deleteActerTypeRule(ctx: any, args: DeleteActerTypeRuleArgs): Promise<ActerTypeRule | null>;
    updateActerTypeRule(ctx: any, args: UpdateActerTypeRuleArgs): Promise<ActerTypeRule | null>;
    deleteManyActerTypeRule(ctx: any, args: DeleteManyActerTypeRuleArgs): Promise<AffectedRowsOutput>;
    updateManyActerTypeRule(ctx: any, args: UpdateManyActerTypeRuleArgs): Promise<AffectedRowsOutput>;
    upsertActerTypeRule(ctx: any, args: UpsertActerTypeRuleArgs): Promise<ActerTypeRule>;
    aggregateActerTypeRule(ctx: any, info: GraphQLResolveInfo, args: AggregateActerTypeRuleArgs): Promise<AggregateActerTypeRule>;
}
