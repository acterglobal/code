import { ActivityCreateOrConnectWithoutActerInput } from "../inputs/ActivityCreateOrConnectWithoutActerInput";
import { ActivityCreateWithoutActerInput } from "../inputs/ActivityCreateWithoutActerInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";
export declare class ActivityCreateNestedOneWithoutActerInput {
    create?: ActivityCreateWithoutActerInput | undefined;
    connectOrCreate?: ActivityCreateOrConnectWithoutActerInput | undefined;
    connect?: ActivityWhereUniqueInput | undefined;
}
