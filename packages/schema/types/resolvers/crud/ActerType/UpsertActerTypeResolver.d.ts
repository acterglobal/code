import { GraphQLResolveInfo } from "graphql";
import { UpsertActerTypeArgs } from "./args/UpsertActerTypeArgs";
import { ActerType } from "../../../models/ActerType";
export declare class UpsertActerTypeResolver {
    upsertActerType(ctx: any, info: GraphQLResolveInfo, args: UpsertActerTypeArgs): Promise<ActerType>;
}
