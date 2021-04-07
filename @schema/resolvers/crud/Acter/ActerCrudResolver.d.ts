import { GraphQLResolveInfo } from "graphql";
import { AggregateActerArgs } from "./args/AggregateActerArgs";
import { CreateActerArgs } from "./args/CreateActerArgs";
import { DeleteActerArgs } from "./args/DeleteActerArgs";
import { DeleteManyActerArgs } from "./args/DeleteManyActerArgs";
import { FindFirstActerArgs } from "./args/FindFirstActerArgs";
import { FindManyActerArgs } from "./args/FindManyActerArgs";
import { FindUniqueActerArgs } from "./args/FindUniqueActerArgs";
import { UpdateActerArgs } from "./args/UpdateActerArgs";
import { UpdateManyActerArgs } from "./args/UpdateManyActerArgs";
import { UpsertActerArgs } from "./args/UpsertActerArgs";
import { Acter } from "../../../models/Acter";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateActer } from "../../outputs/AggregateActer";
export declare class ActerCrudResolver {
    acter(ctx: any, args: FindUniqueActerArgs): Promise<Acter | null>;
    findFirstActer(ctx: any, args: FindFirstActerArgs): Promise<Acter | null>;
    acters(ctx: any, args: FindManyActerArgs): Promise<Acter[]>;
    createActer(ctx: any, args: CreateActerArgs): Promise<Acter>;
    deleteActer(ctx: any, args: DeleteActerArgs): Promise<Acter | null>;
    updateActer(ctx: any, args: UpdateActerArgs): Promise<Acter | null>;
    deleteManyActer(ctx: any, args: DeleteManyActerArgs): Promise<AffectedRowsOutput>;
    updateManyActer(ctx: any, args: UpdateManyActerArgs): Promise<AffectedRowsOutput>;
    upsertActer(ctx: any, args: UpsertActerArgs): Promise<Acter>;
    aggregateActer(ctx: any, info: GraphQLResolveInfo, args: AggregateActerArgs): Promise<AggregateActer>;
}
