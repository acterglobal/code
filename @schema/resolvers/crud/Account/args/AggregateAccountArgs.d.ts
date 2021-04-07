import { AccountOrderByInput } from "../../../inputs/AccountOrderByInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";
export declare class AggregateAccountArgs {
    where?: AccountWhereInput | undefined;
    orderBy?: AccountOrderByInput[] | undefined;
    cursor?: AccountWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
