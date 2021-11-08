import { Acter } from "../../../models/Acter";
import { ActerInterest } from "../../../models/ActerInterest";
import { Interest } from "../../../models/Interest";
import { User } from "../../../models/User";
export declare class ActerInterestRelationsResolver {
    CreatedByUser(acterInterest: ActerInterest, ctx: any): Promise<User>;
    Acter(acterInterest: ActerInterest, ctx: any): Promise<Acter>;
    Interest(acterInterest: ActerInterest, ctx: any): Promise<Interest>;
}
