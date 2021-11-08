import { ActivityCreateOrConnectWithoutNotificationInput } from "../inputs/ActivityCreateOrConnectWithoutNotificationInput";
import { ActivityCreateWithoutNotificationInput } from "../inputs/ActivityCreateWithoutNotificationInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";
export declare class ActivityCreateNestedOneWithoutNotificationInput {
    create?: ActivityCreateWithoutNotificationInput | undefined;
    connectOrCreate?: ActivityCreateOrConnectWithoutNotificationInput | undefined;
    connect?: ActivityWhereUniqueInput | undefined;
}
