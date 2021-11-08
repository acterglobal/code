import { GraphQLResolveInfo } from "graphql";
import { DeleteLinkArgs } from "./args/DeleteLinkArgs";
import { Link } from "../../../models/Link";
export declare class DeleteLinkResolver {
    deleteLink(ctx: any, info: GraphQLResolveInfo, args: DeleteLinkArgs): Promise<Link | null>;
}
