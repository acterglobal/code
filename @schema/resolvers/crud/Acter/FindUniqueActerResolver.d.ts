import { FindUniqueActerArgs } from "./args/FindUniqueActerArgs";
import { Acter } from "../../../models/Acter";
export declare class FindUniqueActerResolver {
    acter(ctx: any, args: FindUniqueActerArgs): Promise<Acter | null>;
}
