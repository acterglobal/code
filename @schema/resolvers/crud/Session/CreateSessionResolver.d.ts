import { CreateSessionArgs } from "./args/CreateSessionArgs";
import { Session } from "../../../models/Session";
export declare class CreateSessionResolver {
    createSession(ctx: any, args: CreateSessionArgs): Promise<Session>;
}
