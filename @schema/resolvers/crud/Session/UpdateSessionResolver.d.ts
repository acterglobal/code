import { UpdateSessionArgs } from "./args/UpdateSessionArgs";
import { Session } from "../../../models/Session";
export declare class UpdateSessionResolver {
    updateSession(ctx: any, args: UpdateSessionArgs): Promise<Session | null>;
}
