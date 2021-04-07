import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { User } from "../../../models/User";
export declare class FindFirstUserResolver {
    findFirstUser(ctx: any, args: FindFirstUserArgs): Promise<User | null>;
}
