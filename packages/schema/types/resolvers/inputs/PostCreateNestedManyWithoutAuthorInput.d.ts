import { PostCreateManyAuthorInputEnvelope } from "../inputs/PostCreateManyAuthorInputEnvelope";
import { PostCreateOrConnectWithoutAuthorInput } from "../inputs/PostCreateOrConnectWithoutAuthorInput";
import { PostCreateWithoutAuthorInput } from "../inputs/PostCreateWithoutAuthorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedManyWithoutAuthorInput {
    create?: PostCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[] | undefined;
    createMany?: PostCreateManyAuthorInputEnvelope | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
}
