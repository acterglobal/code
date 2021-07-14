import { GraphQLResolveInfo } from "graphql";
import { FindUniqueActerArgs } from "./args/FindUniqueActerArgs";
import { Acter } from "../../../models/Acter";
export declare class FindUniqueActerResolver {
    acter(ctx: any, info: GraphQLResolveInfo, args: FindUniqueActerArgs): Promise<Acter | null>;
}
