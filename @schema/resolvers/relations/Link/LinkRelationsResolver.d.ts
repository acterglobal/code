import { Acter } from "../../../models/Acter";
import { Link } from "../../../models/Link";
import { User } from "../../../models/User";
export declare class LinkRelationsResolver {
    Acter(link: Link, ctx: any): Promise<Acter>;
    createdByUser(link: Link, ctx: any): Promise<User>;
}
