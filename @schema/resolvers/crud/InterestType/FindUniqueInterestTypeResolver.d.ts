import { GraphQLResolveInfo } from "graphql";
import { FindUniqueInterestTypeArgs } from "./args/FindUniqueInterestTypeArgs";
import { InterestType } from "../../../models/InterestType";
export declare class FindUniqueInterestTypeResolver {
    interestType(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInterestTypeArgs): Promise<InterestType | null>;
}
