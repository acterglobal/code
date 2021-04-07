import { ActerConnectionOrderByInput } from "../../../inputs/ActerConnectionOrderByInput";
import { ActerConnectionWhereInput } from "../../../inputs/ActerConnectionWhereInput";
import { ActerConnectionWhereUniqueInput } from "../../../inputs/ActerConnectionWhereUniqueInput";
export declare class AggregateActerConnectionArgs {
    where?: ActerConnectionWhereInput | undefined;
    orderBy?: ActerConnectionOrderByInput[] | undefined;
    cursor?: ActerConnectionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
