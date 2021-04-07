import { GraphQLResolveInfo } from "graphql";
import { AggregateActivityArgs } from "./args/AggregateActivityArgs";
import { CreateActivityArgs } from "./args/CreateActivityArgs";
import { DeleteActivityArgs } from "./args/DeleteActivityArgs";
import { DeleteManyActivityArgs } from "./args/DeleteManyActivityArgs";
import { FindFirstActivityArgs } from "./args/FindFirstActivityArgs";
import { FindManyActivityArgs } from "./args/FindManyActivityArgs";
import { FindUniqueActivityArgs } from "./args/FindUniqueActivityArgs";
import { UpdateActivityArgs } from "./args/UpdateActivityArgs";
import { UpdateManyActivityArgs } from "./args/UpdateManyActivityArgs";
import { UpsertActivityArgs } from "./args/UpsertActivityArgs";
import { Activity } from "../../../models/Activity";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateActivity } from "../../outputs/AggregateActivity";
export declare class ActivityCrudResolver {
    activity(ctx: any, args: FindUniqueActivityArgs): Promise<Activity | null>;
    findFirstActivity(ctx: any, args: FindFirstActivityArgs): Promise<Activity | null>;
    activities(ctx: any, args: FindManyActivityArgs): Promise<Activity[]>;
    createActivity(ctx: any, args: CreateActivityArgs): Promise<Activity>;
    deleteActivity(ctx: any, args: DeleteActivityArgs): Promise<Activity | null>;
    updateActivity(ctx: any, args: UpdateActivityArgs): Promise<Activity | null>;
    deleteManyActivity(ctx: any, args: DeleteManyActivityArgs): Promise<AffectedRowsOutput>;
    updateManyActivity(ctx: any, args: UpdateManyActivityArgs): Promise<AffectedRowsOutput>;
    upsertActivity(ctx: any, args: UpsertActivityArgs): Promise<Activity>;
    aggregateActivity(ctx: any, info: GraphQLResolveInfo, args: AggregateActivityArgs): Promise<AggregateActivity>;
}
