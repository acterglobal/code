import { GraphQLResolveInfo } from "graphql";
import { UpdateLinkArgs } from "./args/UpdateLinkArgs";
import { Link } from "../../../models/Link";
export declare class UpdateLinkResolver {
    updateLink(ctx: any, info: GraphQLResolveInfo, args: UpdateLinkArgs): Promise<Link | null>;
}
