import { FindFirstInterestArgs } from "./args/FindFirstInterestArgs";
import { Interest } from "../../../models/Interest";
export declare class FindFirstInterestResolver {
    findFirstInterest(ctx: any, args: FindFirstInterestArgs): Promise<Interest | null>;
}
