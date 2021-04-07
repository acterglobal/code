import { GraphQLResolveInfo } from "graphql";
import { AggregateActerConnectionArgs } from "./args/AggregateActerConnectionArgs";
import { CreateActerConnectionArgs } from "./args/CreateActerConnectionArgs";
import { DeleteActerConnectionArgs } from "./args/DeleteActerConnectionArgs";
import { DeleteManyActerConnectionArgs } from "./args/DeleteManyActerConnectionArgs";
import { FindFirstActerConnectionArgs } from "./args/FindFirstActerConnectionArgs";
import { FindManyActerConnectionArgs } from "./args/FindManyActerConnectionArgs";
import { FindUniqueActerConnectionArgs } from "./args/FindUniqueActerConnectionArgs";
import { UpdateActerConnectionArgs } from "./args/UpdateActerConnectionArgs";
import { UpdateManyActerConnectionArgs } from "./args/UpdateManyActerConnectionArgs";
import { UpsertActerConnectionArgs } from "./args/UpsertActerConnectionArgs";
import { ActerConnection } from "../../../models/ActerConnection";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateActerConnection } from "../../outputs/AggregateActerConnection";
export declare class ActerConnectionCrudResolver {
    acterConnection(ctx: any, args: FindUniqueActerConnectionArgs): Promise<ActerConnection | null>;
    findFirstActerConnection(ctx: any, args: FindFirstActerConnectionArgs): Promise<ActerConnection | null>;
    acterConnections(ctx: any, args: FindManyActerConnectionArgs): Promise<ActerConnection[]>;
    createActerConnection(ctx: any, args: CreateActerConnectionArgs): Promise<ActerConnection>;
    deleteActerConnection(ctx: any, args: DeleteActerConnectionArgs): Promise<ActerConnection | null>;
    updateActerConnection(ctx: any, args: UpdateActerConnectionArgs): Promise<ActerConnection | null>;
    deleteManyActerConnection(ctx: any, args: DeleteManyActerConnectionArgs): Promise<AffectedRowsOutput>;
    updateManyActerConnection(ctx: any, args: UpdateManyActerConnectionArgs): Promise<AffectedRowsOutput>;
    upsertActerConnection(ctx: any, args: UpsertActerConnectionArgs): Promise<ActerConnection>;
    aggregateActerConnection(ctx: any, info: GraphQLResolveInfo, args: AggregateActerConnectionArgs): Promise<AggregateActerConnection>;
}
