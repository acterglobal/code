import { ActerTypeOrderByInput } from "../../../inputs/ActerTypeOrderByInput";
import { ActerTypeScalarWhereWithAggregatesInput } from "../../../inputs/ActerTypeScalarWhereWithAggregatesInput";
import { ActerTypeWhereInput } from "../../../inputs/ActerTypeWhereInput";
export declare class GroupByActerTypeArgs {
    where?: ActerTypeWhereInput | undefined;
    orderBy?: ActerTypeOrderByInput[] | undefined;
    by: Array<"id" | "name">;
    having?: ActerTypeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
