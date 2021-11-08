import { ActivityTypeCreateOrConnectWithoutActivityInput } from "../inputs/ActivityTypeCreateOrConnectWithoutActivityInput";
import { ActivityTypeCreateWithoutActivityInput } from "../inputs/ActivityTypeCreateWithoutActivityInput";
import { ActivityTypeUpdateWithoutActivityInput } from "../inputs/ActivityTypeUpdateWithoutActivityInput";
import { ActivityTypeUpsertWithoutActivityInput } from "../inputs/ActivityTypeUpsertWithoutActivityInput";
import { ActivityTypeWhereUniqueInput } from "../inputs/ActivityTypeWhereUniqueInput";
export declare class ActivityTypeUpdateOneRequiredWithoutActivityInput {
    create?: ActivityTypeCreateWithoutActivityInput | undefined;
    connectOrCreate?: ActivityTypeCreateOrConnectWithoutActivityInput | undefined;
    upsert?: ActivityTypeUpsertWithoutActivityInput | undefined;
    connect?: ActivityTypeWhereUniqueInput | undefined;
    update?: ActivityTypeUpdateWithoutActivityInput | undefined;
}
