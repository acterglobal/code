import { DeleteVerificationRequestArgs } from "./args/DeleteVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
export declare class DeleteVerificationRequestResolver {
    deleteVerificationRequest(ctx: any, args: DeleteVerificationRequestArgs): Promise<VerificationRequest | null>;
}
