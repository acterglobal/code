import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { User } from "../../../models/User";
export declare class FindUniqueUserResolver {
    user(ctx: any, args: FindUniqueUserArgs): Promise<User | null>;
}
