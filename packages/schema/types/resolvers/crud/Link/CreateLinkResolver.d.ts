import { GraphQLResolveInfo } from "graphql";
import { CreateLinkArgs } from "./args/CreateLinkArgs";
import { Link } from "../../../models/Link";
export declare class CreateLinkResolver {
    createLink(ctx: any, info: GraphQLResolveInfo, args: CreateLinkArgs): Promise<Link>;
}
