import { GraphQLResolveInfo } from "graphql";
import { FindFirstActerArgs } from "./args/FindFirstActerArgs";
import { Acter } from "../../../models/Acter";
export declare class FindFirstActerResolver {
    findFirstActer(ctx: any, info: GraphQLResolveInfo, args: FindFirstActerArgs): Promise<Acter | null>;
}
