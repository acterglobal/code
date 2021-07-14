import { ActerTypeCreateOrConnectWithoutActerInput } from "../inputs/ActerTypeCreateOrConnectWithoutActerInput";
import { ActerTypeCreateWithoutActerInput } from "../inputs/ActerTypeCreateWithoutActerInput";
import { ActerTypeUpdateWithoutActerInput } from "../inputs/ActerTypeUpdateWithoutActerInput";
import { ActerTypeUpsertWithoutActerInput } from "../inputs/ActerTypeUpsertWithoutActerInput";
import { ActerTypeWhereUniqueInput } from "../inputs/ActerTypeWhereUniqueInput";
export declare class ActerTypeUpdateOneRequiredWithoutActerInput {
    create?: ActerTypeCreateWithoutActerInput | undefined;
    connectOrCreate?: ActerTypeCreateOrConnectWithoutActerInput | undefined;
    upsert?: ActerTypeUpsertWithoutActerInput | undefined;
    connect?: ActerTypeWhereUniqueInput | undefined;
    update?: ActerTypeUpdateWithoutActerInput | undefined;
}
