import { GraphQLResolveInfo } from "graphql";
import { AggregateInterestTypeArgs } from "./args/AggregateInterestTypeArgs";
import { CreateInterestTypeArgs } from "./args/CreateInterestTypeArgs";
import { DeleteInterestTypeArgs } from "./args/DeleteInterestTypeArgs";
import { DeleteManyInterestTypeArgs } from "./args/DeleteManyInterestTypeArgs";
import { FindFirstInterestTypeArgs } from "./args/FindFirstInterestTypeArgs";
import { FindManyInterestTypeArgs } from "./args/FindManyInterestTypeArgs";
import { FindUniqueInterestTypeArgs } from "./args/FindUniqueInterestTypeArgs";
import { UpdateInterestTypeArgs } from "./args/UpdateInterestTypeArgs";
import { UpdateManyInterestTypeArgs } from "./args/UpdateManyInterestTypeArgs";
import { UpsertInterestTypeArgs } from "./args/UpsertInterestTypeArgs";
import { InterestType } from "../../../models/InterestType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateInterestType } from "../../outputs/AggregateInterestType";
export declare class InterestTypeCrudResolver {
    interestType(ctx: any, args: FindUniqueInterestTypeArgs): Promise<InterestType | null>;
    findFirstInterestType(ctx: any, args: FindFirstInterestTypeArgs): Promise<InterestType | null>;
    interestTypes(ctx: any, args: FindManyInterestTypeArgs): Promise<InterestType[]>;
    createInterestType(ctx: any, args: CreateInterestTypeArgs): Promise<InterestType>;
    deleteInterestType(ctx: any, args: DeleteInterestTypeArgs): Promise<InterestType | null>;
    updateInterestType(ctx: any, args: UpdateInterestTypeArgs): Promise<InterestType | null>;
    deleteManyInterestType(ctx: any, args: DeleteManyInterestTypeArgs): Promise<AffectedRowsOutput>;
    updateManyInterestType(ctx: any, args: UpdateManyInterestTypeArgs): Promise<AffectedRowsOutput>;
    upsertInterestType(ctx: any, args: UpsertInterestTypeArgs): Promise<InterestType>;
    aggregateInterestType(ctx: any, info: GraphQLResolveInfo, args: AggregateInterestTypeArgs): Promise<AggregateInterestType>;
}
