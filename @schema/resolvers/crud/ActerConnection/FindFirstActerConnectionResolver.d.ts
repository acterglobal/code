import { FindFirstActerConnectionArgs } from "./args/FindFirstActerConnectionArgs";
import { ActerConnection } from "../../../models/ActerConnection";
export declare class FindFirstActerConnectionResolver {
    findFirstActerConnection(ctx: any, args: FindFirstActerConnectionArgs): Promise<ActerConnection | null>;
}
