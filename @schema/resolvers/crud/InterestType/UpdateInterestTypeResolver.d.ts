import { GraphQLResolveInfo } from "graphql";
import { UpdateInterestTypeArgs } from "./args/UpdateInterestTypeArgs";
import { InterestType } from "../../../models/InterestType";
export declare class UpdateInterestTypeResolver {
    updateInterestType(ctx: any, info: GraphQLResolveInfo, args: UpdateInterestTypeArgs): Promise<InterestType | null>;
}
