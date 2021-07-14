import { GraphQLResolveInfo } from "graphql";
import { CreateInterestTypeArgs } from "./args/CreateInterestTypeArgs";
import { InterestType } from "../../../models/InterestType";
export declare class CreateInterestTypeResolver {
    createInterestType(ctx: any, info: GraphQLResolveInfo, args: CreateInterestTypeArgs): Promise<InterestType>;
}
