import { PostCreateManyAuthorInputEnvelope } from "../inputs/PostCreateManyAuthorInputEnvelope";
import { PostCreateOrConnectWithoutAuthorInput } from "../inputs/PostCreateOrConnectWithoutAuthorInput";
import { PostCreateWithoutAuthorInput } from "../inputs/PostCreateWithoutAuthorInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutAuthorInput } from "../inputs/PostUpdateManyWithWhereWithoutAuthorInput";
import { PostUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/PostUpdateWithWhereUniqueWithoutAuthorInput";
import { PostUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/PostUpsertWithWhereUniqueWithoutAuthorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateManyWithoutAuthorInput {
    create?: PostCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[] | undefined;
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
    createMany?: PostCreateManyAuthorInputEnvelope | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
    set?: PostWhereUniqueInput[] | undefined;
    disconnect?: PostWhereUniqueInput[] | undefined;
    delete?: PostWhereUniqueInput[] | undefined;
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput[] | undefined;
    deleteMany?: PostScalarWhereInput[] | undefined;
}
