import { GraphQLResolveInfo } from "graphql";
import { AggregateActerTypeArgs } from "./args/AggregateActerTypeArgs";
import { CreateActerTypeArgs } from "./args/CreateActerTypeArgs";
import { DeleteActerTypeArgs } from "./args/DeleteActerTypeArgs";
import { DeleteManyActerTypeArgs } from "./args/DeleteManyActerTypeArgs";
import { FindFirstActerTypeArgs } from "./args/FindFirstActerTypeArgs";
import { FindManyActerTypeArgs } from "./args/FindManyActerTypeArgs";
import { FindUniqueActerTypeArgs } from "./args/FindUniqueActerTypeArgs";
import { UpdateActerTypeArgs } from "./args/UpdateActerTypeArgs";
import { UpdateManyActerTypeArgs } from "./args/UpdateManyActerTypeArgs";
import { UpsertActerTypeArgs } from "./args/UpsertActerTypeArgs";
import { ActerType } from "../../../models/ActerType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateActerType } from "../../outputs/AggregateActerType";
export declare class ActerTypeCrudResolver {
    acterType(ctx: any, args: FindUniqueActerTypeArgs): Promise<ActerType | null>;
    findFirstActerType(ctx: any, args: FindFirstActerTypeArgs): Promise<ActerType | null>;
    acterTypes(ctx: any, args: FindManyActerTypeArgs): Promise<ActerType[]>;
    createActerType(ctx: any, args: CreateActerTypeArgs): Promise<ActerType>;
    deleteActerType(ctx: any, args: DeleteActerTypeArgs): Promise<ActerType | null>;
    updateActerType(ctx: any, args: UpdateActerTypeArgs): Promise<ActerType | null>;
    deleteManyActerType(ctx: any, args: DeleteManyActerTypeArgs): Promise<AffectedRowsOutput>;
    updateManyActerType(ctx: any, args: UpdateManyActerTypeArgs): Promise<AffectedRowsOutput>;
    upsertActerType(ctx: any, args: UpsertActerTypeArgs): Promise<ActerType>;
    aggregateActerType(ctx: any, info: GraphQLResolveInfo, args: AggregateActerTypeArgs): Promise<AggregateActerType>;
}
