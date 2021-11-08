import { GraphQLResolveInfo } from "graphql";
import { CreateActerTypeArgs } from "./args/CreateActerTypeArgs";
import { ActerType } from "../../../models/ActerType";
export declare class CreateActerTypeResolver {
    createActerType(ctx: any, info: GraphQLResolveInfo, args: CreateActerTypeArgs): Promise<ActerType>;
}
