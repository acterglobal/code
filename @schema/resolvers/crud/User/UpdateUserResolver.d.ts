import { UpdateUserArgs } from "./args/UpdateUserArgs";
import { User } from "../../../models/User";
export declare class UpdateUserResolver {
    updateUser(ctx: any, args: UpdateUserArgs): Promise<User | null>;
}
