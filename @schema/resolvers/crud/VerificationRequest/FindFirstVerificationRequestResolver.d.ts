import { FindFirstVerificationRequestArgs } from "./args/FindFirstVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
export declare class FindFirstVerificationRequestResolver {
    findFirstVerificationRequest(ctx: any, args: FindFirstVerificationRequestArgs): Promise<VerificationRequest | null>;
}
