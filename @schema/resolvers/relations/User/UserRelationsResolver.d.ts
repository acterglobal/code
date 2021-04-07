import { Acter } from "../../../models/Acter";
import { ActerConnection } from "../../../models/ActerConnection";
import { ActerInterest } from "../../../models/ActerInterest";
import { Activity } from "../../../models/Activity";
import { User } from "../../../models/User";
import { UserActerConnectionsArgs } from "./args/UserActerConnectionsArgs";
import { UserActerInterestArgs } from "./args/UserActerInterestArgs";
import { UserActersCreatedArgs } from "./args/UserActersCreatedArgs";
import { UserActersDeletedArgs } from "./args/UserActersDeletedArgs";
import { UserActivitiesCreatedArgs } from "./args/UserActivitiesCreatedArgs";
export declare class UserRelationsResolver {
    Acter(user: User, ctx: any): Promise<Acter | null>;
    ActersCreated(user: User, ctx: any, args: UserActersCreatedArgs): Promise<Acter[]>;
    ActerConnections(user: User, ctx: any, args: UserActerConnectionsArgs): Promise<ActerConnection[]>;
    ActerInterest(user: User, ctx: any, args: UserActerInterestArgs): Promise<ActerInterest[]>;
    ActivitiesCreated(user: User, ctx: any, args: UserActivitiesCreatedArgs): Promise<Activity[]>;
    ActersDeleted(user: User, ctx: any, args: UserActersDeletedArgs): Promise<Acter[]>;
}
