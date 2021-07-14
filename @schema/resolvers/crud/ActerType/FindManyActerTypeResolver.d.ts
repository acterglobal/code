import { GraphQLResolveInfo } from "graphql";
import { FindManyActerTypeArgs } from "./args/FindManyActerTypeArgs";
import { ActerType } from "../../../models/ActerType";
export declare class FindManyActerTypeResolver {
    acterTypes(ctx: any, info: GraphQLResolveInfo, args: FindManyActerTypeArgs): Promise<ActerType[]>;
}
