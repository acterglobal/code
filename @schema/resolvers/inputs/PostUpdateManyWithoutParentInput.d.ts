import { PostCreateManyParentInputEnvelope } from "../inputs/PostCreateManyParentInputEnvelope";
import { PostCreateOrConnectWithoutParentInput } from "../inputs/PostCreateOrConnectWithoutParentInput";
import { PostCreateWithoutParentInput } from "../inputs/PostCreateWithoutParentInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutParentInput } from "../inputs/PostUpdateManyWithWhereWithoutParentInput";
import { PostUpdateWithWhereUniqueWithoutParentInput } from "../inputs/PostUpdateWithWhereUniqueWithoutParentInput";
import { PostUpsertWithWhereUniqueWithoutParentInput } from "../inputs/PostUpsertWithWhereUniqueWithoutParentInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateManyWithoutParentInput {
    create?: PostCreateWithoutParentInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutParentInput[] | undefined;
    upsert?: PostUpsertWithWhereUniqueWithoutParentInput[] | undefined;
    createMany?: PostCreateManyParentInputEnvelope | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
    set?: PostWhereUniqueInput[] | undefined;
    disconnect?: PostWhereUniqueInput[] | undefined;
    delete?: PostWhereUniqueInput[] | undefined;
    update?: PostUpdateWithWhereUniqueWithoutParentInput[] | undefined;
    updateMany?: PostUpdateManyWithWhereWithoutParentInput[] | undefined;
    deleteMany?: PostScalarWhereInput[] | undefined;
}
