import { GraphQLResolveInfo } from "graphql";
import { UpdateActerArgs } from "./args/UpdateActerArgs";
import { Acter } from "../../../models/Acter";
export declare class UpdateActerResolver {
    updateActer(ctx: any, info: GraphQLResolveInfo, args: UpdateActerArgs): Promise<Acter | null>;
}
