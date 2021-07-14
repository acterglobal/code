import { GraphQLResolveInfo } from "graphql";
import { DeleteActerArgs } from "./args/DeleteActerArgs";
import { Acter } from "../../../models/Acter";
export declare class DeleteActerResolver {
    deleteActer(ctx: any, info: GraphQLResolveInfo, args: DeleteActerArgs): Promise<Acter | null>;
}
