import { GraphQLResolveInfo } from "graphql";
import { UpdateActerConnectionArgs } from "./args/UpdateActerConnectionArgs";
import { ActerConnection } from "../../../models/ActerConnection";
export declare class UpdateActerConnectionResolver {
    updateActerConnection(ctx: any, info: GraphQLResolveInfo, args: UpdateActerConnectionArgs): Promise<ActerConnection | null>;
}
