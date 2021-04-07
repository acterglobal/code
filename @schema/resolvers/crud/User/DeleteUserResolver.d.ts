import { DeleteUserArgs } from "./args/DeleteUserArgs";
import { User } from "../../../models/User";
export declare class DeleteUserResolver {
    deleteUser(ctx: any, args: DeleteUserArgs): Promise<User | null>;
}
