import { GraphQLResolveInfo } from "graphql";
import { DeleteActivityArgs } from "./args/DeleteActivityArgs";
import { Activity } from "../../../models/Activity";
export declare class DeleteActivityResolver {
    deleteActivity(ctx: any, info: GraphQLResolveInfo, args: DeleteActivityArgs): Promise<Activity | null>;
}
