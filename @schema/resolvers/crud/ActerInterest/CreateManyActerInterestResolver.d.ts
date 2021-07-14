import { GraphQLResolveInfo } from "graphql";
import { CreateManyActerInterestArgs } from "./args/CreateManyActerInterestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyActerInterestResolver {
    createManyActerInterest(ctx: any, info: GraphQLResolveInfo, args: CreateManyActerInterestArgs): Promise<AffectedRowsOutput>;
}
