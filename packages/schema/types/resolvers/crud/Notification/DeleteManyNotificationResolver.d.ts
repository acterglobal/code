import { GraphQLResolveInfo } from "graphql";
import { DeleteManyNotificationArgs } from "./args/DeleteManyNotificationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyNotificationResolver {
    deleteManyNotification(ctx: any, info: GraphQLResolveInfo, args: DeleteManyNotificationArgs): Promise<AffectedRowsOutput>;
}
