import { ActerTypeCreateOrConnectWithoutActerInput } from "../inputs/ActerTypeCreateOrConnectWithoutActerInput";
import { ActerTypeCreateWithoutActerInput } from "../inputs/ActerTypeCreateWithoutActerInput";
import { ActerTypeWhereUniqueInput } from "../inputs/ActerTypeWhereUniqueInput";
export declare class ActerTypeCreateNestedOneWithoutActerInput {
    create?: ActerTypeCreateWithoutActerInput | undefined;
    connectOrCreate?: ActerTypeCreateOrConnectWithoutActerInput | undefined;
    connect?: ActerTypeWhereUniqueInput | undefined;
}
