import { FindManyInterestArgs } from "./args/FindManyInterestArgs";
import { Interest } from "../../../models/Interest";
export declare class FindManyInterestResolver {
    interests(ctx: any, args: FindManyInterestArgs): Promise<Interest[]>;
}
