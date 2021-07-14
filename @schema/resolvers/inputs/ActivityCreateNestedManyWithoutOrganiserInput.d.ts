import { ActivityCreateManyOrganiserInputEnvelope } from "../inputs/ActivityCreateManyOrganiserInputEnvelope";
import { ActivityCreateOrConnectWithoutOrganiserInput } from "../inputs/ActivityCreateOrConnectWithoutOrganiserInput";
import { ActivityCreateWithoutOrganiserInput } from "../inputs/ActivityCreateWithoutOrganiserInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";
export declare class ActivityCreateNestedManyWithoutOrganiserInput {
    create?: ActivityCreateWithoutOrganiserInput[] | undefined;
    connectOrCreate?: ActivityCreateOrConnectWithoutOrganiserInput[] | undefined;
    createMany?: ActivityCreateManyOrganiserInputEnvelope | undefined;
    connect?: ActivityWhereUniqueInput[] | undefined;
}
