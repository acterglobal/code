import { GraphQLResolveInfo } from "graphql";
import { FindManyActerArgs } from "./args/FindManyActerArgs";
import { Acter } from "../../../models/Acter";
export declare class FindManyActerResolver {
    acters(ctx: any, info: GraphQLResolveInfo, args: FindManyActerArgs): Promise<Acter[]>;
}
