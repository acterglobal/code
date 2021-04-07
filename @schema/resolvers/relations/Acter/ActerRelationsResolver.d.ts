import { Acter } from "../../../models/Acter";
import { ActerConnection } from "../../../models/ActerConnection";
import { ActerInterest } from "../../../models/ActerInterest";
import { ActerType } from "../../../models/ActerType";
import { Activity } from "../../../models/Activity";
import { User } from "../../../models/User";
import { ActerActerInterestsArgs } from "./args/ActerActerInterestsArgs";
import { ActerActivitiesOrganizedArgs } from "./args/ActerActivitiesOrganizedArgs";
import { ActerChildrenArgs } from "./args/ActerChildrenArgs";
import { ActerFollowersArgs } from "./args/ActerFollowersArgs";
import { ActerFollowingArgs } from "./args/ActerFollowingArgs";
export declare class ActerRelationsResolver {
    createdByUser(acter: Acter, ctx: any): Promise<User>;
    DeletedByUser(acter: Acter, ctx: any): Promise<User | null>;
    ActerType(acter: Acter, ctx: any): Promise<ActerType>;
    Parent(acter: Acter, ctx: any): Promise<Acter | null>;
    Children(acter: Acter, ctx: any, args: ActerChildrenArgs): Promise<Acter[]>;
    Following(acter: Acter, ctx: any, args: ActerFollowingArgs): Promise<ActerConnection[]>;
    Followers(acter: Acter, ctx: any, args: ActerFollowersArgs): Promise<ActerConnection[]>;
    User(acter: Acter, ctx: any): Promise<User | null>;
    ActerInterests(acter: Acter, ctx: any, args: ActerActerInterestsArgs): Promise<ActerInterest[]>;
    Activity(acter: Acter, ctx: any): Promise<Activity | null>;
    ActivitiesOrganized(acter: Acter, ctx: any, args: ActerActivitiesOrganizedArgs): Promise<Activity[]>;
}
