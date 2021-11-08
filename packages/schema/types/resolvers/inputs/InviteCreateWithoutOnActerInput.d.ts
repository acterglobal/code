import { UserCreateNestedOneWithoutInviteInput } from "../inputs/UserCreateNestedOneWithoutInviteInput";
export declare class InviteCreateWithoutOnActerInput {
    id?: string | undefined;
    email: string;
    message: string;
    error: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    sentAt: Date;
    acceptedAt: Date;
    createdByUser: UserCreateNestedOneWithoutInviteInput;
}
