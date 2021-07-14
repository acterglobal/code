import { GraphQLResolveInfo } from "graphql";
import { DeleteActerConnectionArgs } from "./args/DeleteActerConnectionArgs";
import { ActerConnection } from "../../../models/ActerConnection";
export declare class DeleteActerConnectionResolver {
    deleteActerConnection(ctx: any, info: GraphQLResolveInfo, args: DeleteActerConnectionArgs): Promise<ActerConnection | null>;
}
