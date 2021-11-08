import { Acter } from "../../../models/Acter";
import { ActerConnection } from "../../../models/ActerConnection";
import { User } from "../../../models/User";
export declare class ActerConnectionRelationsResolver {
    CreatedByUser(acterConnection: ActerConnection, ctx: any): Promise<User>;
    Follower(acterConnection: ActerConnection, ctx: any): Promise<Acter>;
    Following(acterConnection: ActerConnection, ctx: any): Promise<Acter>;
}
