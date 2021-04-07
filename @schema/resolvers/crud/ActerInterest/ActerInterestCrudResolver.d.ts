import { GraphQLResolveInfo } from "graphql";
import { AggregateActerInterestArgs } from "./args/AggregateActerInterestArgs";
import { CreateActerInterestArgs } from "./args/CreateActerInterestArgs";
import { DeleteActerInterestArgs } from "./args/DeleteActerInterestArgs";
import { DeleteManyActerInterestArgs } from "./args/DeleteManyActerInterestArgs";
import { FindFirstActerInterestArgs } from "./args/FindFirstActerInterestArgs";
import { FindManyActerInterestArgs } from "./args/FindManyActerInterestArgs";
import { FindUniqueActerInterestArgs } from "./args/FindUniqueActerInterestArgs";
import { UpdateActerInterestArgs } from "./args/UpdateActerInterestArgs";
import { UpdateManyActerInterestArgs } from "./args/UpdateManyActerInterestArgs";
import { UpsertActerInterestArgs } from "./args/UpsertActerInterestArgs";
import { ActerInterest } from "../../../models/ActerInterest";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateActerInterest } from "../../outputs/AggregateActerInterest";
export declare class ActerInterestCrudResolver {
    acterInterest(ctx: any, args: FindUniqueActerInterestArgs): Promise<ActerInterest | null>;
    findFirstActerInterest(ctx: any, args: FindFirstActerInterestArgs): Promise<ActerInterest | null>;
    acterInterests(ctx: any, args: FindManyActerInterestArgs): Promise<ActerInterest[]>;
    createActerInterest(ctx: any, args: CreateActerInterestArgs): Promise<ActerInterest>;
    deleteActerInterest(ctx: any, args: DeleteActerInterestArgs): Promise<ActerInterest | null>;
    updateActerInterest(ctx: any, args: UpdateActerInterestArgs): Promise<ActerInterest | null>;
    deleteManyActerInterest(ctx: any, args: DeleteManyActerInterestArgs): Promise<AffectedRowsOutput>;
    updateManyActerInterest(ctx: any, args: UpdateManyActerInterestArgs): Promise<AffectedRowsOutput>;
    upsertActerInterest(ctx: any, args: UpsertActerInterestArgs): Promise<ActerInterest>;
    aggregateActerInterest(ctx: any, info: GraphQLResolveInfo, args: AggregateActerInterestArgs): Promise<AggregateActerInterest>;
}
