import { GraphQLResolveInfo } from "graphql";
import { FindUniqueActerConnectionArgs } from "./args/FindUniqueActerConnectionArgs";
import { ActerConnection } from "../../../models/ActerConnection";
export declare class FindUniqueActerConnectionResolver {
    acterConnection(ctx: any, info: GraphQLResolveInfo, args: FindUniqueActerConnectionArgs): Promise<ActerConnection | null>;
}
