import { FindUniqueVerificationRequestArgs } from "./args/FindUniqueVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
export declare class FindUniqueVerificationRequestResolver {
    verificationRequest(ctx: any, args: FindUniqueVerificationRequestArgs): Promise<VerificationRequest | null>;
}
