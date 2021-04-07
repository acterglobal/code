import { ActivityCreateOrConnectWithoutOrganiserInput } from "../inputs/ActivityCreateOrConnectWithoutOrganiserInput";
import { ActivityCreateWithoutOrganiserInput } from "../inputs/ActivityCreateWithoutOrganiserInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";
export declare class ActivityCreateNestedManyWithoutOrganiserInput {
    create?: ActivityCreateWithoutOrganiserInput[] | undefined;
    connectOrCreate?: ActivityCreateOrConnectWithoutOrganiserInput[] | undefined;
    connect?: ActivityWhereUniqueInput[] | undefined;
}
