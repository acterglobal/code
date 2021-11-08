import { Acter } from "../../../models/Acter";
import { Invite } from "../../../models/Invite";
import { User } from "../../../models/User";
export declare class InviteRelationsResolver {
    OnActer(invite: Invite, ctx: any): Promise<Acter>;
    createdByUser(invite: Invite, ctx: any): Promise<User>;
}
