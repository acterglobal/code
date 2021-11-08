import { GraphQLResolveInfo } from "graphql";
import { UpdateActerTypeArgs } from "./args/UpdateActerTypeArgs";
import { ActerType } from "../../../models/ActerType";
export declare class UpdateActerTypeResolver {
    updateActerType(ctx: any, info: GraphQLResolveInfo, args: UpdateActerTypeArgs): Promise<ActerType | null>;
}
