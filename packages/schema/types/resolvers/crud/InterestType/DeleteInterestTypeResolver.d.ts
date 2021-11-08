import { GraphQLResolveInfo } from "graphql";
import { DeleteInterestTypeArgs } from "./args/DeleteInterestTypeArgs";
import { InterestType } from "../../../models/InterestType";
export declare class DeleteInterestTypeResolver {
    deleteInterestType(ctx: any, info: GraphQLResolveInfo, args: DeleteInterestTypeArgs): Promise<InterestType | null>;
}
