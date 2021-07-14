import { GraphQLResolveInfo } from "graphql";
import { UpsertInterestTypeArgs } from "./args/UpsertInterestTypeArgs";
import { InterestType } from "../../../models/InterestType";
export declare class UpsertInterestTypeResolver {
    upsertInterestType(ctx: any, info: GraphQLResolveInfo, args: UpsertInterestTypeArgs): Promise<InterestType>;
}
