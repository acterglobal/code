import { PostCreateOrConnectWithoutNotificationInput } from "../inputs/PostCreateOrConnectWithoutNotificationInput";
import { PostCreateWithoutNotificationInput } from "../inputs/PostCreateWithoutNotificationInput";
import { PostUpdateWithoutNotificationInput } from "../inputs/PostUpdateWithoutNotificationInput";
import { PostUpsertWithoutNotificationInput } from "../inputs/PostUpsertWithoutNotificationInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateOneWithoutNotificationInput {
    create?: PostCreateWithoutNotificationInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutNotificationInput | undefined;
    upsert?: PostUpsertWithoutNotificationInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: PostUpdateWithoutNotificationInput | undefined;
}
