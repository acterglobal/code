import { FindUniqueSessionArgs } from "./args/FindUniqueSessionArgs";
import { Session } from "../../../models/Session";
export declare class FindUniqueSessionResolver {
    session(ctx: any, args: FindUniqueSessionArgs): Promise<Session | null>;
}
