import { ActivityCreateOrConnectWithoutNotificationInput } from "../inputs/ActivityCreateOrConnectWithoutNotificationInput";
import { ActivityCreateWithoutNotificationInput } from "../inputs/ActivityCreateWithoutNotificationInput";
import { ActivityUpdateWithoutNotificationInput } from "../inputs/ActivityUpdateWithoutNotificationInput";
import { ActivityUpsertWithoutNotificationInput } from "../inputs/ActivityUpsertWithoutNotificationInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";
export declare class ActivityUpdateOneWithoutNotificationInput {
    create?: ActivityCreateWithoutNotificationInput | undefined;
    connectOrCreate?: ActivityCreateOrConnectWithoutNotificationInput | undefined;
    upsert?: ActivityUpsertWithoutNotificationInput | undefined;
    connect?: ActivityWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: ActivityUpdateWithoutNotificationInput | undefined;
}
