import { DeleteSessionArgs } from "./args/DeleteSessionArgs";
import { Session } from "../../../models/Session";
export declare class DeleteSessionResolver {
    deleteSession(ctx: any, args: DeleteSessionArgs): Promise<Session | null>;
}
