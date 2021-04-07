import { FindFirstSessionArgs } from "./args/FindFirstSessionArgs";
import { Session } from "../../../models/Session";
export declare class FindFirstSessionResolver {
    findFirstSession(ctx: any, args: FindFirstSessionArgs): Promise<Session | null>;
}
