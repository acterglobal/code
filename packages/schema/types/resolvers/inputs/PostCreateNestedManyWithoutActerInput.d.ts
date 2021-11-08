import { PostCreateManyActerInputEnvelope } from "../inputs/PostCreateManyActerInputEnvelope";
import { PostCreateOrConnectWithoutActerInput } from "../inputs/PostCreateOrConnectWithoutActerInput";
import { PostCreateWithoutActerInput } from "../inputs/PostCreateWithoutActerInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedManyWithoutActerInput {
    create?: PostCreateWithoutActerInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutActerInput[] | undefined;
    createMany?: PostCreateManyActerInputEnvelope | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
}
