import { Interest } from "../../../models/Interest";
import { InterestType } from "../../../models/InterestType";
import { InterestTypeChildrenArgs } from "./args/InterestTypeChildrenArgs";
import { InterestTypeInterestsArgs } from "./args/InterestTypeInterestsArgs";
export declare class InterestTypeRelationsResolver {
    parent(interestType: InterestType, ctx: any): Promise<InterestType | null>;
    children(interestType: InterestType, ctx: any, args: InterestTypeChildrenArgs): Promise<InterestType[]>;
    Interests(interestType: InterestType, ctx: any, args: InterestTypeInterestsArgs): Promise<Interest[]>;
}
