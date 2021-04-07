import { ActerTypeOrderByInput } from "../../../inputs/ActerTypeOrderByInput";
import { ActerTypeWhereInput } from "../../../inputs/ActerTypeWhereInput";
import { ActerTypeWhereUniqueInput } from "../../../inputs/ActerTypeWhereUniqueInput";
export declare class FindFirstActerTypeArgs {
    where?: ActerTypeWhereInput | undefined;
    orderBy?: ActerTypeOrderByInput[] | undefined;
    cursor?: ActerTypeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name"> | undefined;
}
