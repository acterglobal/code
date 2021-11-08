import { GraphQLResolveInfo } from "graphql";
import { UpsertActerConnectionArgs } from "./args/UpsertActerConnectionArgs";
import { ActerConnection } from "../../../models/ActerConnection";
export declare class UpsertActerConnectionResolver {
    upsertActerConnection(ctx: any, info: GraphQLResolveInfo, args: UpsertActerConnectionArgs): Promise<ActerConnection>;
}
