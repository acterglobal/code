import { LinkCreateManyActerInputEnvelope } from "../inputs/LinkCreateManyActerInputEnvelope";
import { LinkCreateOrConnectWithoutActerInput } from "../inputs/LinkCreateOrConnectWithoutActerInput";
import { LinkCreateWithoutActerInput } from "../inputs/LinkCreateWithoutActerInput";
import { LinkWhereUniqueInput } from "../inputs/LinkWhereUniqueInput";
export declare class LinkCreateNestedManyWithoutActerInput {
    create?: LinkCreateWithoutActerInput[] | undefined;
    connectOrCreate?: LinkCreateOrConnectWithoutActerInput[] | undefined;
    createMany?: LinkCreateManyActerInputEnvelope | undefined;
    connect?: LinkWhereUniqueInput[] | undefined;
}
