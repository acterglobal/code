import { GraphQLResolveInfo } from "graphql";
import { UpsertActerArgs } from "./args/UpsertActerArgs";
import { Acter } from "../../../models/Acter";
export declare class UpsertActerResolver {
    upsertActer(ctx: any, info: GraphQLResolveInfo, args: UpsertActerArgs): Promise<Acter>;
}
