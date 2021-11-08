import { GraphQLResolveInfo } from "graphql";
import { CreateManyNotificationArgs } from "./args/CreateManyNotificationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyNotificationResolver {
    createManyNotification(ctx: any, info: GraphQLResolveInfo, args: CreateManyNotificationArgs): Promise<AffectedRowsOutput>;
}
