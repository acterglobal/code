import { DeleteActerArgs } from "./args/DeleteActerArgs";
import { Acter } from "../../../models/Acter";
export declare class DeleteActerResolver {
    deleteActer(ctx: any, args: DeleteActerArgs): Promise<Acter | null>;
}
