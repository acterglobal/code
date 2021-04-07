import { DeleteActerConnectionArgs } from "./args/DeleteActerConnectionArgs";
import { ActerConnection } from "../../../models/ActerConnection";
export declare class DeleteActerConnectionResolver {
    deleteActerConnection(ctx: any, args: DeleteActerConnectionArgs): Promise<ActerConnection | null>;
}
