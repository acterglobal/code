import { GraphQLResolveInfo } from "graphql";
import { AggregateVerificationRequestArgs } from "./args/AggregateVerificationRequestArgs";
import { CreateVerificationRequestArgs } from "./args/CreateVerificationRequestArgs";
import { DeleteManyVerificationRequestArgs } from "./args/DeleteManyVerificationRequestArgs";
import { DeleteVerificationRequestArgs } from "./args/DeleteVerificationRequestArgs";
import { FindFirstVerificationRequestArgs } from "./args/FindFirstVerificationRequestArgs";
import { FindManyVerificationRequestArgs } from "./args/FindManyVerificationRequestArgs";
import { FindUniqueVerificationRequestArgs } from "./args/FindUniqueVerificationRequestArgs";
import { UpdateManyVerificationRequestArgs } from "./args/UpdateManyVerificationRequestArgs";
import { UpdateVerificationRequestArgs } from "./args/UpdateVerificationRequestArgs";
import { UpsertVerificationRequestArgs } from "./args/UpsertVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVerificationRequest } from "../../outputs/AggregateVerificationRequest";
export declare class VerificationRequestCrudResolver {
    verificationRequest(ctx: any, args: FindUniqueVerificationRequestArgs): Promise<VerificationRequest | null>;
    findFirstVerificationRequest(ctx: any, args: FindFirstVerificationRequestArgs): Promise<VerificationRequest | null>;
    verificationRequests(ctx: any, args: FindManyVerificationRequestArgs): Promise<VerificationRequest[]>;
    createVerificationRequest(ctx: any, args: CreateVerificationRequestArgs): Promise<VerificationRequest>;
    deleteVerificationRequest(ctx: any, args: DeleteVerificationRequestArgs): Promise<VerificationRequest | null>;
    updateVerificationRequest(ctx: any, args: UpdateVerificationRequestArgs): Promise<VerificationRequest | null>;
    deleteManyVerificationRequest(ctx: any, args: DeleteManyVerificationRequestArgs): Promise<AffectedRowsOutput>;
    updateManyVerificationRequest(ctx: any, args: UpdateManyVerificationRequestArgs): Promise<AffectedRowsOutput>;
    upsertVerificationRequest(ctx: any, args: UpsertVerificationRequestArgs): Promise<VerificationRequest>;
    aggregateVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: AggregateVerificationRequestArgs): Promise<AggregateVerificationRequest>;
}
