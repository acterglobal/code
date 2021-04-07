import { GraphQLResolveInfo } from "graphql";
import { AggregateSessionArgs } from "./args/AggregateSessionArgs";
import { CreateSessionArgs } from "./args/CreateSessionArgs";
import { DeleteManySessionArgs } from "./args/DeleteManySessionArgs";
import { DeleteSessionArgs } from "./args/DeleteSessionArgs";
import { FindFirstSessionArgs } from "./args/FindFirstSessionArgs";
import { FindManySessionArgs } from "./args/FindManySessionArgs";
import { FindUniqueSessionArgs } from "./args/FindUniqueSessionArgs";
import { UpdateManySessionArgs } from "./args/UpdateManySessionArgs";
import { UpdateSessionArgs } from "./args/UpdateSessionArgs";
import { UpsertSessionArgs } from "./args/UpsertSessionArgs";
import { Session } from "../../../models/Session";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSession } from "../../outputs/AggregateSession";
export declare class SessionCrudResolver {
    session(ctx: any, args: FindUniqueSessionArgs): Promise<Session | null>;
    findFirstSession(ctx: any, args: FindFirstSessionArgs): Promise<Session | null>;
    sessions(ctx: any, args: FindManySessionArgs): Promise<Session[]>;
    createSession(ctx: any, args: CreateSessionArgs): Promise<Session>;
    deleteSession(ctx: any, args: DeleteSessionArgs): Promise<Session | null>;
    updateSession(ctx: any, args: UpdateSessionArgs): Promise<Session | null>;
    deleteManySession(ctx: any, args: DeleteManySessionArgs): Promise<AffectedRowsOutput>;
    updateManySession(ctx: any, args: UpdateManySessionArgs): Promise<AffectedRowsOutput>;
    upsertSession(ctx: any, args: UpsertSessionArgs): Promise<Session>;
    aggregateSession(ctx: any, info: GraphQLResolveInfo, args: AggregateSessionArgs): Promise<AggregateSession>;
}
