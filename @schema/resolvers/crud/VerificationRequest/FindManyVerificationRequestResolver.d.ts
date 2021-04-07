import { FindManyVerificationRequestArgs } from "./args/FindManyVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
export declare class FindManyVerificationRequestResolver {
    verificationRequests(ctx: any, args: FindManyVerificationRequestArgs): Promise<VerificationRequest[]>;
}
