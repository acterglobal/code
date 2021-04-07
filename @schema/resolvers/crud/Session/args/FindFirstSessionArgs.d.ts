import { SessionOrderByInput } from "../../../inputs/SessionOrderByInput";
import { SessionWhereInput } from "../../../inputs/SessionWhereInput";
import { SessionWhereUniqueInput } from "../../../inputs/SessionWhereUniqueInput";
export declare class FindFirstSessionArgs {
    where?: SessionWhereInput | undefined;
    orderBy?: SessionOrderByInput[] | undefined;
    cursor?: SessionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "userId" | "expires" | "sessionToken" | "accessToken" | "createdAt" | "updatedAt"> | undefined;
}
