import { GraphQLResolveInfo } from "graphql";
import { DeleteInterestArgs } from "./args/DeleteInterestArgs";
import { Interest } from "../../../models/Interest";
export declare class DeleteInterestResolver {
    deleteInterest(ctx: any, info: GraphQLResolveInfo, args: DeleteInterestArgs): Promise<Interest | null>;
}
