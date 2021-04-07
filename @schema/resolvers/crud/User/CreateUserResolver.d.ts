import { CreateUserArgs } from "./args/CreateUserArgs";
import { User } from "../../../models/User";
export declare class CreateUserResolver {
    createUser(ctx: any, args: CreateUserArgs): Promise<User>;
}
