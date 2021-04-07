import { UpsertSessionArgs } from "./args/UpsertSessionArgs";
import { Session } from "../../../models/Session";
export declare class UpsertSessionResolver {
    upsertSession(ctx: any, args: UpsertSessionArgs): Promise<Session>;
}
