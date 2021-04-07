import { UpdateActerArgs } from "./args/UpdateActerArgs";
import { Acter } from "../../../models/Acter";
export declare class UpdateActerResolver {
    updateActer(ctx: any, args: UpdateActerArgs): Promise<Acter | null>;
}
