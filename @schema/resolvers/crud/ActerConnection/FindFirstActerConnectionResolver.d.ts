import { GraphQLResolveInfo } from "graphql";
import { FindFirstActerConnectionArgs } from "./args/FindFirstActerConnectionArgs";
import { ActerConnection } from "../../../models/ActerConnection";
export declare class FindFirstActerConnectionResolver {
    findFirstActerConnection(ctx: any, info: GraphQLResolveInfo, args: FindFirstActerConnectionArgs): Promise<ActerConnection | null>;
}
