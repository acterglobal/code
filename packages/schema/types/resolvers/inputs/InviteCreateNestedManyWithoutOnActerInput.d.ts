import { InviteCreateManyOnActerInputEnvelope } from "../inputs/InviteCreateManyOnActerInputEnvelope";
import { InviteCreateOrConnectWithoutOnActerInput } from "../inputs/InviteCreateOrConnectWithoutOnActerInput";
import { InviteCreateWithoutOnActerInput } from "../inputs/InviteCreateWithoutOnActerInput";
import { InviteWhereUniqueInput } from "../inputs/InviteWhereUniqueInput";
export declare class InviteCreateNestedManyWithoutOnActerInput {
    create?: InviteCreateWithoutOnActerInput[] | undefined;
    connectOrCreate?: InviteCreateOrConnectWithoutOnActerInput[] | undefined;
    createMany?: InviteCreateManyOnActerInputEnvelope | undefined;
    connect?: InviteWhereUniqueInput[] | undefined;
}
