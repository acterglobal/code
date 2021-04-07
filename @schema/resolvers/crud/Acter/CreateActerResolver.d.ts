import { CreateActerArgs } from "./args/CreateActerArgs";
import { Acter } from "../../../models/Acter";
export declare class CreateActerResolver {
    createActer(ctx: any, args: CreateActerArgs): Promise<Acter>;
}
