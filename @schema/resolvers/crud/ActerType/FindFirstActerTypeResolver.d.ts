import { GraphQLResolveInfo } from "graphql";
import { FindFirstActerTypeArgs } from "./args/FindFirstActerTypeArgs";
import { ActerType } from "../../../models/ActerType";
export declare class FindFirstActerTypeResolver {
    findFirstActerType(ctx: any, info: GraphQLResolveInfo, args: FindFirstActerTypeArgs): Promise<ActerType | null>;
}
