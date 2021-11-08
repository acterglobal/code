import { ActerCreateNestedOneWithoutInviteInput } from "../inputs/ActerCreateNestedOneWithoutInviteInput";
export declare class InviteCreateWithoutCreatedByUserInput {
    id?: string | undefined;
    email: string;
    message: string;
    error: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    sentAt: Date;
    acceptedAt: Date;
    OnActer: ActerCreateNestedOneWithoutInviteInput;
}
