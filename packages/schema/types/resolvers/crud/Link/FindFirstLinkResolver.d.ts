import { GraphQLResolveInfo } from "graphql";
import { FindFirstLinkArgs } from "./args/FindFirstLinkArgs";
import { Link } from "../../../models/Link";
export declare class FindFirstLinkResolver {
    findFirstLink(ctx: any, info: GraphQLResolveInfo, args: FindFirstLinkArgs): Promise<Link | null>;
}
