import { InviteCreateManyCreatedByUserInputEnvelope } from "../inputs/InviteCreateManyCreatedByUserInputEnvelope";
import { InviteCreateOrConnectWithoutCreatedByUserInput } from "../inputs/InviteCreateOrConnectWithoutCreatedByUserInput";
import { InviteCreateWithoutCreatedByUserInput } from "../inputs/InviteCreateWithoutCreatedByUserInput";
import { InviteScalarWhereInput } from "../inputs/InviteScalarWhereInput";
import { InviteUpdateManyWithWhereWithoutCreatedByUserInput } from "../inputs/InviteUpdateManyWithWhereWithoutCreatedByUserInput";
import { InviteUpdateWithWhereUniqueWithoutCreatedByUserInput } from "../inputs/InviteUpdateWithWhereUniqueWithoutCreatedByUserInput";
import { InviteUpsertWithWhereUniqueWithoutCreatedByUserInput } from "../inputs/InviteUpsertWithWhereUniqueWithoutCreatedByUserInput";
import { InviteWhereUniqueInput } from "../inputs/InviteWhereUniqueInput";
export declare class InviteUpdateManyWithoutCreatedByUserInput {
    create?: InviteCreateWithoutCreatedByUserInput[] | undefined;
    connectOrCreate?: InviteCreateOrConnectWithoutCreatedByUserInput[] | undefined;
    upsert?: InviteUpsertWithWhereUniqueWithoutCreatedByUserInput[] | undefined;
    createMany?: InviteCreateManyCreatedByUserInputEnvelope | undefined;
    connect?: InviteWhereUniqueInput[] | undefined;
    set?: InviteWhereUniqueInput[] | undefined;
    disconnect?: InviteWhereUniqueInput[] | undefined;
    delete?: InviteWhereUniqueInput[] | undefined;
    update?: InviteUpdateWithWhereUniqueWithoutCreatedByUserInput[] | undefined;
    updateMany?: InviteUpdateManyWithWhereWithoutCreatedByUserInput[] | undefined;
    deleteMany?: InviteScalarWhereInput[] | undefined;
}
