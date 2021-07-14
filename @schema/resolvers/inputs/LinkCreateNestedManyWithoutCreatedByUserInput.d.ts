import { LinkCreateManyCreatedByUserInputEnvelope } from "../inputs/LinkCreateManyCreatedByUserInputEnvelope";
import { LinkCreateOrConnectWithoutCreatedByUserInput } from "../inputs/LinkCreateOrConnectWithoutCreatedByUserInput";
import { LinkCreateWithoutCreatedByUserInput } from "../inputs/LinkCreateWithoutCreatedByUserInput";
import { LinkWhereUniqueInput } from "../inputs/LinkWhereUniqueInput";
export declare class LinkCreateNestedManyWithoutCreatedByUserInput {
    create?: LinkCreateWithoutCreatedByUserInput[] | undefined;
    connectOrCreate?: LinkCreateOrConnectWithoutCreatedByUserInput[] | undefined;
    createMany?: LinkCreateManyCreatedByUserInputEnvelope | undefined;
    connect?: LinkWhereUniqueInput[] | undefined;
}
