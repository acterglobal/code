import { VerificationRequestOrderByInput } from "../../../inputs/VerificationRequestOrderByInput";
import { VerificationRequestWhereInput } from "../../../inputs/VerificationRequestWhereInput";
import { VerificationRequestWhereUniqueInput } from "../../../inputs/VerificationRequestWhereUniqueInput";
export declare class FindManyVerificationRequestArgs {
    where?: VerificationRequestWhereInput | undefined;
    orderBy?: VerificationRequestOrderByInput[] | undefined;
    cursor?: VerificationRequestWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "identifier" | "token" | "expires" | "createdAt" | "updatedAt"> | undefined;
}
