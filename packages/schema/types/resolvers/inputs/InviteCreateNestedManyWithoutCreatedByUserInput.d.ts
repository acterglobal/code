import { InviteCreateManyCreatedByUserInputEnvelope } from "../inputs/InviteCreateManyCreatedByUserInputEnvelope";
import { InviteCreateOrConnectWithoutCreatedByUserInput } from "../inputs/InviteCreateOrConnectWithoutCreatedByUserInput";
import { InviteCreateWithoutCreatedByUserInput } from "../inputs/InviteCreateWithoutCreatedByUserInput";
import { InviteWhereUniqueInput } from "../inputs/InviteWhereUniqueInput";
export declare class InviteCreateNestedManyWithoutCreatedByUserInput {
    create?: InviteCreateWithoutCreatedByUserInput[] | undefined;
    connectOrCreate?: InviteCreateOrConnectWithoutCreatedByUserInput[] | undefined;
    createMany?: InviteCreateManyCreatedByUserInputEnvelope | undefined;
    connect?: InviteWhereUniqueInput[] | undefined;
}
