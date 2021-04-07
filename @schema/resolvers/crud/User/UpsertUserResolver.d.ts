import { UpsertUserArgs } from "./args/UpsertUserArgs";
import { User } from "../../../models/User";
export declare class UpsertUserResolver {
    upsertUser(ctx: any, args: UpsertUserArgs): Promise<User>;
}
