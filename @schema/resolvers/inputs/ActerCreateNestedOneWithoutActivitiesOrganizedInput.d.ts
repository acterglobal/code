import { ActerCreateOrConnectWithoutActivitiesOrganizedInput } from "../inputs/ActerCreateOrConnectWithoutActivitiesOrganizedInput";
import { ActerCreateWithoutActivitiesOrganizedInput } from "../inputs/ActerCreateWithoutActivitiesOrganizedInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedOneWithoutActivitiesOrganizedInput {
    create?: ActerCreateWithoutActivitiesOrganizedInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutActivitiesOrganizedInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
}
