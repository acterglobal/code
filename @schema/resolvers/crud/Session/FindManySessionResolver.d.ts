import { FindManySessionArgs } from "./args/FindManySessionArgs";
import { Session } from "../../../models/Session";
export declare class FindManySessionResolver {
    sessions(ctx: any, args: FindManySessionArgs): Promise<Session[]>;
}
