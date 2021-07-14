import { InterestTypeCreateOrConnectWithoutInterestsInput } from "../inputs/InterestTypeCreateOrConnectWithoutInterestsInput";
import { InterestTypeCreateWithoutInterestsInput } from "../inputs/InterestTypeCreateWithoutInterestsInput";
import { InterestTypeUpdateWithoutInterestsInput } from "../inputs/InterestTypeUpdateWithoutInterestsInput";
import { InterestTypeUpsertWithoutInterestsInput } from "../inputs/InterestTypeUpsertWithoutInterestsInput";
import { InterestTypeWhereUniqueInput } from "../inputs/InterestTypeWhereUniqueInput";
export declare class InterestTypeUpdateOneRequiredWithoutInterestsInput {
    create?: InterestTypeCreateWithoutInterestsInput | undefined;
    connectOrCreate?: InterestTypeCreateOrConnectWithoutInterestsInput | undefined;
    upsert?: InterestTypeUpsertWithoutInterestsInput | undefined;
    connect?: InterestTypeWhereUniqueInput | undefined;
    update?: InterestTypeUpdateWithoutInterestsInput | undefined;
}
