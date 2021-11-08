import { GraphQLResolveInfo } from "graphql";
import { CreateActerArgs } from "./args/CreateActerArgs";
import { Acter } from "../../../models/Acter";
export declare class CreateActerResolver {
    createActer(ctx: any, info: GraphQLResolveInfo, args: CreateActerArgs): Promise<Acter>;
}
