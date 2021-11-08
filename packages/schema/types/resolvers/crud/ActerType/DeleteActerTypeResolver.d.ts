import { GraphQLResolveInfo } from "graphql";
import { DeleteActerTypeArgs } from "./args/DeleteActerTypeArgs";
import { ActerType } from "../../../models/ActerType";
export declare class DeleteActerTypeResolver {
    deleteActerType(ctx: any, info: GraphQLResolveInfo, args: DeleteActerTypeArgs): Promise<ActerType | null>;
}
