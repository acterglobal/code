import { GraphQLResolveInfo } from "graphql";
import { DeleteActivityTypeArgs } from "./args/DeleteActivityTypeArgs";
import { ActivityType } from "../../../models/ActivityType";
export declare class DeleteActivityTypeResolver {
    deleteActivityType(ctx: any, info: GraphQLResolveInfo, args: DeleteActivityTypeArgs): Promise<ActivityType | null>;
}
