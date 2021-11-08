import { PostCreateOrConnectWithoutCommentsInput } from "../inputs/PostCreateOrConnectWithoutCommentsInput";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedOneWithoutCommentsInput {
    create?: PostCreateWithoutCommentsInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
}
