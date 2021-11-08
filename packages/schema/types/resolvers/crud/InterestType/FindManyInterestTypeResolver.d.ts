import { GraphQLResolveInfo } from "graphql";
import { FindManyInterestTypeArgs } from "./args/FindManyInterestTypeArgs";
import { InterestType } from "../../../models/InterestType";
export declare class FindManyInterestTypeResolver {
    interestTypes(ctx: any, info: GraphQLResolveInfo, args: FindManyInterestTypeArgs): Promise<InterestType[]>;
}
