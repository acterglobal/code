import { GraphQLResolveInfo } from "graphql";
import { AggregateInterestArgs } from "./args/AggregateInterestArgs";
import { CreateInterestArgs } from "./args/CreateInterestArgs";
import { DeleteInterestArgs } from "./args/DeleteInterestArgs";
import { DeleteManyInterestArgs } from "./args/DeleteManyInterestArgs";
import { FindFirstInterestArgs } from "./args/FindFirstInterestArgs";
import { FindManyInterestArgs } from "./args/FindManyInterestArgs";
import { FindUniqueInterestArgs } from "./args/FindUniqueInterestArgs";
import { UpdateInterestArgs } from "./args/UpdateInterestArgs";
import { UpdateManyInterestArgs } from "./args/UpdateManyInterestArgs";
import { UpsertInterestArgs } from "./args/UpsertInterestArgs";
import { Interest } from "../../../models/Interest";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateInterest } from "../../outputs/AggregateInterest";
export declare class InterestCrudResolver {
    interest(ctx: any, args: FindUniqueInterestArgs): Promise<Interest | null>;
    findFirstInterest(ctx: any, args: FindFirstInterestArgs): Promise<Interest | null>;
    interests(ctx: any, args: FindManyInterestArgs): Promise<Interest[]>;
    createInterest(ctx: any, args: CreateInterestArgs): Promise<Interest>;
    deleteInterest(ctx: any, args: DeleteInterestArgs): Promise<Interest | null>;
    updateInterest(ctx: any, args: UpdateInterestArgs): Promise<Interest | null>;
    deleteManyInterest(ctx: any, args: DeleteManyInterestArgs): Promise<AffectedRowsOutput>;
    updateManyInterest(ctx: any, args: UpdateManyInterestArgs): Promise<AffectedRowsOutput>;
    upsertInterest(ctx: any, args: UpsertInterestArgs): Promise<Interest>;
    aggregateInterest(ctx: any, info: GraphQLResolveInfo, args: AggregateInterestArgs): Promise<AggregateInterest>;
}
