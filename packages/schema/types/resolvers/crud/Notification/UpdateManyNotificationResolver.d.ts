import { GraphQLResolveInfo } from "graphql";
import { UpdateManyNotificationArgs } from "./args/UpdateManyNotificationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyNotificationResolver {
    updateManyNotification(ctx: any, info: GraphQLResolveInfo, args: UpdateManyNotificationArgs): Promise<AffectedRowsOutput>;
}
