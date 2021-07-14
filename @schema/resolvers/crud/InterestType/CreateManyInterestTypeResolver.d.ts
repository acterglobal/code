import { GraphQLResolveInfo } from "graphql";
import { CreateManyInterestTypeArgs } from "./args/CreateManyInterestTypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyInterestTypeResolver {
    createManyInterestType(ctx: any, info: GraphQLResolveInfo, args: CreateManyInterestTypeArgs): Promise<AffectedRowsOutput>;
}
