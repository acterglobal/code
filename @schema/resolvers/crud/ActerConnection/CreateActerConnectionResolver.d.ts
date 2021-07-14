import { GraphQLResolveInfo } from "graphql";
import { CreateActerConnectionArgs } from "./args/CreateActerConnectionArgs";
import { ActerConnection } from "../../../models/ActerConnection";
export declare class CreateActerConnectionResolver {
    createActerConnection(ctx: any, info: GraphQLResolveInfo, args: CreateActerConnectionArgs): Promise<ActerConnection>;
}
