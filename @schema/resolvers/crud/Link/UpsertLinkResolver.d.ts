import { GraphQLResolveInfo } from "graphql";
import { UpsertLinkArgs } from "./args/UpsertLinkArgs";
import { Link } from "../../../models/Link";
export declare class UpsertLinkResolver {
    upsertLink(ctx: any, info: GraphQLResolveInfo, args: UpsertLinkArgs): Promise<Link>;
}
