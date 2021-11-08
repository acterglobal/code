import { GraphQLResolveInfo } from "graphql";
import { CreateManyActivityTypeArgs } from "./args/CreateManyActivityTypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyActivityTypeResolver {
    createManyActivityType(ctx: any, info: GraphQLResolveInfo, args: CreateManyActivityTypeArgs): Promise<AffectedRowsOutput>;
}
