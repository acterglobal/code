import { FindFirstActerArgs } from "./args/FindFirstActerArgs";
import { Acter } from "../../../models/Acter";
export declare class FindFirstActerResolver {
    findFirstActer(ctx: any, args: FindFirstActerArgs): Promise<Acter | null>;
}
