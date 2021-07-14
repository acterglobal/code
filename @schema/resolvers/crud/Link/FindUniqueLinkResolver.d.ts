import { GraphQLResolveInfo } from "graphql";
import { FindUniqueLinkArgs } from "./args/FindUniqueLinkArgs";
import { Link } from "../../../models/Link";
export declare class FindUniqueLinkResolver {
    link(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLinkArgs): Promise<Link | null>;
}
