import { PostCreateManyParentInputEnvelope } from "../inputs/PostCreateManyParentInputEnvelope";
import { PostCreateOrConnectWithoutParentInput } from "../inputs/PostCreateOrConnectWithoutParentInput";
import { PostCreateWithoutParentInput } from "../inputs/PostCreateWithoutParentInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedManyWithoutParentInput {
    create?: PostCreateWithoutParentInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutParentInput[] | undefined;
    createMany?: PostCreateManyParentInputEnvelope | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
}
