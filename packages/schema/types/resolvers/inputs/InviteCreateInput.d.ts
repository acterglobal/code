import { ActerCreateNestedOneWithoutInviteInput } from "../inputs/ActerCreateNestedOneWithoutInviteInput";
import { UserCreateNestedOneWithoutInviteInput } from "../inputs/UserCreateNestedOneWithoutInviteInput";
export declare class InviteCreateInput {
    id?: string | undefined;
    email: string;
    message: string;
    error: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    sentAt: Date;
    acceptedAt: Date;
    OnActer: ActerCreateNestedOneWithoutInviteInput;
    createdByUser: UserCreateNestedOneWithoutInviteInput;
}
