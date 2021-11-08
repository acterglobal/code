import { PostCreateOrConnectWithoutNotificationInput } from "../inputs/PostCreateOrConnectWithoutNotificationInput";
import { PostCreateWithoutNotificationInput } from "../inputs/PostCreateWithoutNotificationInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedOneWithoutNotificationInput {
    create?: PostCreateWithoutNotificationInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutNotificationInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
}
