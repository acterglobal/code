import { GraphQLResolveInfo } from "graphql";
import { FindFirstInterestTypeArgs } from "./args/FindFirstInterestTypeArgs";
import { InterestType } from "../../../models/InterestType";
export declare class FindFirstInterestTypeResolver {
    findFirstInterestType(ctx: any, info: GraphQLResolveInfo, args: FindFirstInterestTypeArgs): Promise<InterestType | null>;
}
