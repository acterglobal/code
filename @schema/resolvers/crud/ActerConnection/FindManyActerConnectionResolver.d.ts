import { FindManyActerConnectionArgs } from "./args/FindManyActerConnectionArgs";
import { ActerConnection } from "../../../models/ActerConnection";
export declare class FindManyActerConnectionResolver {
    acterConnections(ctx: any, args: FindManyActerConnectionArgs): Promise<ActerConnection[]>;
}
