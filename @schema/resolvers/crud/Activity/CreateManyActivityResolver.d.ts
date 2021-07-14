import { GraphQLResolveInfo } from "graphql";
import { CreateManyActivityArgs } from "./args/CreateManyActivityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyActivityResolver {
    createManyActivity(ctx: any, info: GraphQLResolveInfo, args: CreateManyActivityArgs): Promise<AffectedRowsOutput>;
}
