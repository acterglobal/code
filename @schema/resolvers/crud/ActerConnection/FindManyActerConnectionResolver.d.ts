import { GraphQLResolveInfo } from "graphql";
import { FindManyActerConnectionArgs } from "./args/FindManyActerConnectionArgs";
import { ActerConnection } from "../../../models/ActerConnection";
export declare class FindManyActerConnectionResolver {
    acterConnections(ctx: any, info: GraphQLResolveInfo, args: FindManyActerConnectionArgs): Promise<ActerConnection[]>;
}
