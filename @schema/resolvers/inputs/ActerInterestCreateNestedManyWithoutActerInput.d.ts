import { ActerInterestCreateOrConnectWithoutActerInput } from "../inputs/ActerInterestCreateOrConnectWithoutActerInput";
import { ActerInterestCreateWithoutActerInput } from "../inputs/ActerInterestCreateWithoutActerInput";
import { ActerInterestWhereUniqueInput } from "../inputs/ActerInterestWhereUniqueInput";
export declare class ActerInterestCreateNestedManyWithoutActerInput {
    create?: ActerInterestCreateWithoutActerInput[] | undefined;
    connectOrCreate?: ActerInterestCreateOrConnectWithoutActerInput[] | undefined;
    connect?: ActerInterestWhereUniqueInput[] | undefined;
}
