import { ActivityCreateOrConnectWithoutActerInput } from "../inputs/ActivityCreateOrConnectWithoutActerInput";
import { ActivityCreateWithoutActerInput } from "../inputs/ActivityCreateWithoutActerInput";
import { ActivityUpdateWithoutActerInput } from "../inputs/ActivityUpdateWithoutActerInput";
import { ActivityUpsertWithoutActerInput } from "../inputs/ActivityUpsertWithoutActerInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";
export declare class ActivityUpdateOneWithoutActerInput {
    create?: ActivityCreateWithoutActerInput | undefined;
    connectOrCreate?: ActivityCreateOrConnectWithoutActerInput | undefined;
    upsert?: ActivityUpsertWithoutActerInput | undefined;
    connect?: ActivityWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: ActivityUpdateWithoutActerInput | undefined;
}
