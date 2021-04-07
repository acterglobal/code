import { DeleteInterestArgs } from "./args/DeleteInterestArgs";
import { Interest } from "../../../models/Interest";
export declare class DeleteInterestResolver {
    deleteInterest(ctx: any, args: DeleteInterestArgs): Promise<Interest | null>;
}
