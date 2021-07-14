import { GraphQLResolveInfo } from "graphql";
import { FindManyLinkArgs } from "./args/FindManyLinkArgs";
import { Link } from "../../../models/Link";
export declare class FindManyLinkResolver {
    links(ctx: any, info: GraphQLResolveInfo, args: FindManyLinkArgs): Promise<Link[]>;
}
