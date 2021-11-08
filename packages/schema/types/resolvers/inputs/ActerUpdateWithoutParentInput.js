"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActerUpdateWithoutParentInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerConnectionUpdateManyWithoutFollowerInput_1 = require("../inputs/ActerConnectionUpdateManyWithoutFollowerInput");
const ActerConnectionUpdateManyWithoutFollowingInput_1 = require("../inputs/ActerConnectionUpdateManyWithoutFollowingInput");
const ActerInterestUpdateManyWithoutActerInput_1 = require("../inputs/ActerInterestUpdateManyWithoutActerInput");
const ActerTypeUpdateOneRequiredWithoutActerInput_1 = require("../inputs/ActerTypeUpdateOneRequiredWithoutActerInput");
const ActerUpdateManyWithoutParentInput_1 = require("../inputs/ActerUpdateManyWithoutParentInput");
const ActivityUpdateManyWithoutOrganiserInput_1 = require("../inputs/ActivityUpdateManyWithoutOrganiserInput");
const ActivityUpdateOneWithoutActerInput_1 = require("../inputs/ActivityUpdateOneWithoutActerInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumActerJoinSettingsFieldUpdateOperationsInput_1 = require("../inputs/EnumActerJoinSettingsFieldUpdateOperationsInput");
const EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput_1 = require("../inputs/EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput");
const EnumActerNotificationSettingsFieldUpdateOperationsInput_1 = require("../inputs/EnumActerNotificationSettingsFieldUpdateOperationsInput");
const EnumActerPrivacySettingsFieldUpdateOperationsInput_1 = require("../inputs/EnumActerPrivacySettingsFieldUpdateOperationsInput");
const InviteUpdateManyWithoutOnActerInput_1 = require("../inputs/InviteUpdateManyWithoutOnActerInput");
const LinkUpdateManyWithoutActerInput_1 = require("../inputs/LinkUpdateManyWithoutActerInput");
const NotificationUpdateManyWithoutOnActerInput_1 = require("../inputs/NotificationUpdateManyWithoutOnActerInput");
const NotificationUpdateManyWithoutToActerInput_1 = require("../inputs/NotificationUpdateManyWithoutToActerInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableFloatFieldUpdateOperationsInput_1 = require("../inputs/NullableFloatFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateManyWithoutActerInput_1 = require("../inputs/PostUpdateManyWithoutActerInput");
const PostUpdateManyWithoutAuthorInput_1 = require("../inputs/PostUpdateManyWithoutAuthorInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutActersCreatedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutActersCreatedInput");
const UserUpdateOneWithoutActerInput_1 = require("../inputs/UserUpdateOneWithoutActerInput");
const UserUpdateOneWithoutActersDeletedInput_1 = require("../inputs/UserUpdateOneWithoutActersDeletedInput");
let ActerUpdateWithoutParentInput = class ActerUpdateWithoutParentInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "location", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "locationLat", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "locationLng", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "avatarUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "bannerUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "useAdmins", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerJoinSettingsFieldUpdateOperationsInput_1.EnumActerJoinSettingsFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", EnumActerJoinSettingsFieldUpdateOperationsInput_1.EnumActerJoinSettingsFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "acterJoinSetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerNotificationSettingsFieldUpdateOperationsInput_1.EnumActerNotificationSettingsFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", EnumActerNotificationSettingsFieldUpdateOperationsInput_1.EnumActerNotificationSettingsFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "acterNotifySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput_1.EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput_1.EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "acterNotifyEmailFrequency", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerPrivacySettingsFieldUpdateOperationsInput_1.EnumActerPrivacySettingsFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", EnumActerPrivacySettingsFieldUpdateOperationsInput_1.EnumActerPrivacySettingsFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "acterPrivacySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ActerUpdateWithoutParentInput.prototype, "deletedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerInterestUpdateManyWithoutActerInput_1.ActerInterestUpdateManyWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", ActerInterestUpdateManyWithoutActerInput_1.ActerInterestUpdateManyWithoutActerInput)
], ActerUpdateWithoutParentInput.prototype, "ActerInterests", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutActersCreatedInput_1.UserUpdateOneRequiredWithoutActersCreatedInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateOneRequiredWithoutActersCreatedInput_1.UserUpdateOneRequiredWithoutActersCreatedInput)
], ActerUpdateWithoutParentInput.prototype, "createdByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutActersDeletedInput_1.UserUpdateOneWithoutActersDeletedInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateOneWithoutActersDeletedInput_1.UserUpdateOneWithoutActersDeletedInput)
], ActerUpdateWithoutParentInput.prototype, "DeletedByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerTypeUpdateOneRequiredWithoutActerInput_1.ActerTypeUpdateOneRequiredWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", ActerTypeUpdateOneRequiredWithoutActerInput_1.ActerTypeUpdateOneRequiredWithoutActerInput)
], ActerUpdateWithoutParentInput.prototype, "ActerType", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateManyWithoutParentInput_1.ActerUpdateManyWithoutParentInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateManyWithoutParentInput_1.ActerUpdateManyWithoutParentInput)
], ActerUpdateWithoutParentInput.prototype, "Children", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionUpdateManyWithoutFollowerInput_1.ActerConnectionUpdateManyWithoutFollowerInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionUpdateManyWithoutFollowerInput_1.ActerConnectionUpdateManyWithoutFollowerInput)
], ActerUpdateWithoutParentInput.prototype, "Following", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionUpdateManyWithoutFollowingInput_1.ActerConnectionUpdateManyWithoutFollowingInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionUpdateManyWithoutFollowingInput_1.ActerConnectionUpdateManyWithoutFollowingInput)
], ActerUpdateWithoutParentInput.prototype, "Followers", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutActerInput_1.UserUpdateOneWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateOneWithoutActerInput_1.UserUpdateOneWithoutActerInput)
], ActerUpdateWithoutParentInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityUpdateOneWithoutActerInput_1.ActivityUpdateOneWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityUpdateOneWithoutActerInput_1.ActivityUpdateOneWithoutActerInput)
], ActerUpdateWithoutParentInput.prototype, "Activity", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityUpdateManyWithoutOrganiserInput_1.ActivityUpdateManyWithoutOrganiserInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityUpdateManyWithoutOrganiserInput_1.ActivityUpdateManyWithoutOrganiserInput)
], ActerUpdateWithoutParentInput.prototype, "ActivitiesOrganized", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutActerInput_1.PostUpdateManyWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", PostUpdateManyWithoutActerInput_1.PostUpdateManyWithoutActerInput)
], ActerUpdateWithoutParentInput.prototype, "AttachedPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorInput_1.PostUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", PostUpdateManyWithoutAuthorInput_1.PostUpdateManyWithoutAuthorInput)
], ActerUpdateWithoutParentInput.prototype, "AuthoredPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => LinkUpdateManyWithoutActerInput_1.LinkUpdateManyWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", LinkUpdateManyWithoutActerInput_1.LinkUpdateManyWithoutActerInput)
], ActerUpdateWithoutParentInput.prototype, "AttachedLinks", void 0);
__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateManyWithoutOnActerInput_1.NotificationUpdateManyWithoutOnActerInput, {
        nullable: true
    }),
    __metadata("design:type", NotificationUpdateManyWithoutOnActerInput_1.NotificationUpdateManyWithoutOnActerInput)
], ActerUpdateWithoutParentInput.prototype, "NotificationsTo", void 0);
__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateManyWithoutToActerInput_1.NotificationUpdateManyWithoutToActerInput, {
        nullable: true
    }),
    __metadata("design:type", NotificationUpdateManyWithoutToActerInput_1.NotificationUpdateManyWithoutToActerInput)
], ActerUpdateWithoutParentInput.prototype, "NotificationsOn", void 0);
__decorate([
    TypeGraphQL.Field(_type => InviteUpdateManyWithoutOnActerInput_1.InviteUpdateManyWithoutOnActerInput, {
        nullable: true
    }),
    __metadata("design:type", InviteUpdateManyWithoutOnActerInput_1.InviteUpdateManyWithoutOnActerInput)
], ActerUpdateWithoutParentInput.prototype, "Invite", void 0);
ActerUpdateWithoutParentInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerUpdateWithoutParentInput);
exports.ActerUpdateWithoutParentInput = ActerUpdateWithoutParentInput;
