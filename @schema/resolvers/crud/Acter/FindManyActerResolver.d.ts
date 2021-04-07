import { FindManyActerArgs } from "./args/FindManyActerArgs";
import { Acter } from "../../../models/Acter";
export declare class FindManyActerResolver {
    acters(ctx: any, args: FindManyActerArgs): Promise<Acter[]>;
}
