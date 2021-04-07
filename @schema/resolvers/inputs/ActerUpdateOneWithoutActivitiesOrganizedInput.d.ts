import { ActerCreateOrConnectWithoutActivitiesOrganizedInput } from "../inputs/ActerCreateOrConnectWithoutActivitiesOrganizedInput";
import { ActerCreateWithoutActivitiesOrganizedInput } from "../inputs/ActerCreateWithoutActivitiesOrganizedInput";
import { ActerUpdateWithoutActivitiesOrganizedInput } from "../inputs/ActerUpdateWithoutActivitiesOrganizedInput";
import { ActerUpsertWithoutActivitiesOrganizedInput } from "../inputs/ActerUpsertWithoutActivitiesOrganizedInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateOneWithoutActivitiesOrganizedInput {
    create?: ActerCreateWithoutActivitiesOrganizedInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutActivitiesOrganizedInput | undefined;
    upsert?: ActerUpsertWithoutActivitiesOrganizedInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: ActerUpdateWithoutActivitiesOrganizedInput | undefined;
}
