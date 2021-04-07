import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { User } from "../../../models/User";
export declare class FindManyUserResolver {
    users(ctx: any, args: FindManyUserArgs): Promise<User[]>;
}
