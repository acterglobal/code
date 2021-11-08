import { PostCreateManyActerInputEnvelope } from "../inputs/PostCreateManyActerInputEnvelope";
import { PostCreateOrConnectWithoutActerInput } from "../inputs/PostCreateOrConnectWithoutActerInput";
import { PostCreateWithoutActerInput } from "../inputs/PostCreateWithoutActerInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutActerInput } from "../inputs/PostUpdateManyWithWhereWithoutActerInput";
import { PostUpdateWithWhereUniqueWithoutActerInput } from "../inputs/PostUpdateWithWhereUniqueWithoutActerInput";
import { PostUpsertWithWhereUniqueWithoutActerInput } from "../inputs/PostUpsertWithWhereUniqueWithoutActerInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateManyWithoutActerInput {
    create?: PostCreateWithoutActerInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutActerInput[] | undefined;
    upsert?: PostUpsertWithWhereUniqueWithoutActerInput[] | undefined;
    createMany?: PostCreateManyActerInputEnvelope | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
    set?: PostWhereUniqueInput[] | undefined;
    disconnect?: PostWhereUniqueInput[] | undefined;
    delete?: PostWhereUniqueInput[] | undefined;
    update?: PostUpdateWithWhereUniqueWithoutActerInput[] | undefined;
    updateMany?: PostUpdateManyWithWhereWithoutActerInput[] | undefined;
    deleteMany?: PostScalarWhereInput[] | undefined;
}
