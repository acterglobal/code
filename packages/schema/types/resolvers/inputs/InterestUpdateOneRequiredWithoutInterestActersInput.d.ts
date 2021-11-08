import { InterestCreateOrConnectWithoutInterestActersInput } from "../inputs/InterestCreateOrConnectWithoutInterestActersInput";
import { InterestCreateWithoutInterestActersInput } from "../inputs/InterestCreateWithoutInterestActersInput";
import { InterestUpdateWithoutInterestActersInput } from "../inputs/InterestUpdateWithoutInterestActersInput";
import { InterestUpsertWithoutInterestActersInput } from "../inputs/InterestUpsertWithoutInterestActersInput";
import { InterestWhereUniqueInput } from "../inputs/InterestWhereUniqueInput";
export declare class InterestUpdateOneRequiredWithoutInterestActersInput {
    create?: InterestCreateWithoutInterestActersInput | undefined;
    connectOrCreate?: InterestCreateOrConnectWithoutInterestActersInput | undefined;
    upsert?: InterestUpsertWithoutInterestActersInput | undefined;
    connect?: InterestWhereUniqueInput | undefined;
    update?: InterestUpdateWithoutInterestActersInput | undefined;
}
