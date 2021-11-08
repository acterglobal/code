import { ActerInterest } from "../../../models/ActerInterest";
import { Interest } from "../../../models/Interest";
import { InterestType } from "../../../models/InterestType";
import { InterestInterestActersArgs } from "./args/InterestInterestActersArgs";
export declare class InterestRelationsResolver {
    InterestType(interest: Interest, ctx: any): Promise<InterestType>;
    InterestActers(interest: Interest, ctx: any, args: InterestInterestActersArgs): Promise<ActerInterest[]>;
}
