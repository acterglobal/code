import { GraphQLResolveInfo } from "graphql";
import { FindUniqueActerTypeArgs } from "./args/FindUniqueActerTypeArgs";
import { ActerType } from "../../../models/ActerType";
export declare class FindUniqueActerTypeResolver {
    acterType(ctx: any, info: GraphQLResolveInfo, args: FindUniqueActerTypeArgs): Promise<ActerType | null>;
}
