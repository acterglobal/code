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
exports.ActerCreateWithoutCreatedByUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerConnectionCreateNestedManyWithoutFollowerInput_1 = require("../inputs/ActerConnectionCreateNestedManyWithoutFollowerInput");
const ActerConnectionCreateNestedManyWithoutFollowingInput_1 = require("../inputs/ActerConnectionCreateNestedManyWithoutFollowingInput");
const ActerCreateNestedManyWithoutParentInput_1 = require("../inputs/ActerCreateNestedManyWithoutParentInput");
const ActerCreateNestedOneWithoutChildrenInput_1 = require("../inputs/ActerCreateNestedOneWithoutChildrenInput");
const ActerInterestCreateNestedManyWithoutActerInput_1 = require("../inputs/ActerInterestCreateNestedManyWithoutActerInput");
const ActerTypeCreateNestedOneWithoutActerInput_1 = require("../inputs/ActerTypeCreateNestedOneWithoutActerInput");
const ActivityCreateNestedManyWithoutOrganiserInput_1 = require("../inputs/ActivityCreateNestedManyWithoutOrganiserInput");
const ActivityCreateNestedOneWithoutActerInput_1 = require("../inputs/ActivityCreateNestedOneWithoutActerInput");
const InviteCreateNestedManyWithoutOnActerInput_1 = require("../inputs/InviteCreateNestedManyWithoutOnActerInput");
const LinkCreateNestedManyWithoutActerInput_1 = require("../inputs/LinkCreateNestedManyWithoutActerInput");
const NotificationCreateNestedManyWithoutOnActerInput_1 = require("../inputs/NotificationCreateNestedManyWithoutOnActerInput");
const NotificationCreateNestedManyWithoutToActerInput_1 = require("../inputs/NotificationCreateNestedManyWithoutToActerInput");
const PostCreateNestedManyWithoutActerInput_1 = require("../inputs/PostCreateNestedManyWithoutActerInput");
const PostCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PostCreateNestedManyWithoutAuthorInput");
const UserCreateNestedOneWithoutActerInput_1 = require("../inputs/UserCreateNestedOneWithoutActerInput");
const UserCreateNestedOneWithoutActersDeletedInput_1 = require("../inputs/UserCreateNestedOneWithoutActersDeletedInput");
const ActerJoinSettings_1 = require("../../enums/ActerJoinSettings");
const ActerNotificationEmailFrequency_1 = require("../../enums/ActerNotificationEmailFrequency");
const ActerNotificationSettings_1 = require("../../enums/ActerNotificationSettings");
const ActerPrivacySettings_1 = require("../../enums/ActerPrivacySettings");
let ActerCreateWithoutCreatedByUserInput = class ActerCreateWithoutCreatedByUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutCreatedByUserInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutCreatedByUserInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutCreatedByUserInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutCreatedByUserInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutCreatedByUserInput.prototype, "location", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], ActerCreateWithoutCreatedByUserInput.prototype, "locationLat", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], ActerCreateWithoutCreatedByUserInput.prototype, "locationLng", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutCreatedByUserInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutCreatedByUserInput.prototype, "avatarUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutCreatedByUserInput.prototype, "bannerUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ActerCreateWithoutCreatedByUserInput.prototype, "useAdmins", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ActerCreateWithoutCreatedByUserInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ActerCreateWithoutCreatedByUserInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerJoinSettings_1.ActerJoinSettings, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutCreatedByUserInput.prototype, "acterJoinSetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerNotificationSettings_1.ActerNotificationSettings, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutCreatedByUserInput.prototype, "acterNotifySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerNotificationEmailFrequency_1.ActerNotificationEmailFrequency, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutCreatedByUserInput.prototype, "acterNotifyEmailFrequency", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerPrivacySettings_1.ActerPrivacySettings, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutCreatedByUserInput.prototype, "acterPrivacySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ActerCreateWithoutCreatedByUserInput.prototype, "deletedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerInterestCreateNestedManyWithoutActerInput_1.ActerInterestCreateNestedManyWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", ActerInterestCreateNestedManyWithoutActerInput_1.ActerInterestCreateNestedManyWithoutActerInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "ActerInterests", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutActersDeletedInput_1.UserCreateNestedOneWithoutActersDeletedInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateNestedOneWithoutActersDeletedInput_1.UserCreateNestedOneWithoutActersDeletedInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "DeletedByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerTypeCreateNestedOneWithoutActerInput_1.ActerTypeCreateNestedOneWithoutActerInput, {
        nullable: false
    }),
    __metadata("design:type", ActerTypeCreateNestedOneWithoutActerInput_1.ActerTypeCreateNestedOneWithoutActerInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "ActerType", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedOneWithoutChildrenInput_1.ActerCreateNestedOneWithoutChildrenInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateNestedOneWithoutChildrenInput_1.ActerCreateNestedOneWithoutChildrenInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "Parent", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedManyWithoutParentInput_1.ActerCreateNestedManyWithoutParentInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateNestedManyWithoutParentInput_1.ActerCreateNestedManyWithoutParentInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "Children", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionCreateNestedManyWithoutFollowerInput_1.ActerConnectionCreateNestedManyWithoutFollowerInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionCreateNestedManyWithoutFollowerInput_1.ActerConnectionCreateNestedManyWithoutFollowerInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "Following", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionCreateNestedManyWithoutFollowingInput_1.ActerConnectionCreateNestedManyWithoutFollowingInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionCreateNestedManyWithoutFollowingInput_1.ActerConnectionCreateNestedManyWithoutFollowingInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "Followers", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutActerInput_1.UserCreateNestedOneWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateNestedOneWithoutActerInput_1.UserCreateNestedOneWithoutActerInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityCreateNestedOneWithoutActerInput_1.ActivityCreateNestedOneWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityCreateNestedOneWithoutActerInput_1.ActivityCreateNestedOneWithoutActerInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "Activity", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityCreateNestedManyWithoutOrganiserInput_1.ActivityCreateNestedManyWithoutOrganiserInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityCreateNestedManyWithoutOrganiserInput_1.ActivityCreateNestedManyWithoutOrganiserInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "ActivitiesOrganized", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutActerInput_1.PostCreateNestedManyWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", PostCreateNestedManyWithoutActerInput_1.PostCreateNestedManyWithoutActerInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "AttachedPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "AuthoredPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => LinkCreateNestedManyWithoutActerInput_1.LinkCreateNestedManyWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", LinkCreateNestedManyWithoutActerInput_1.LinkCreateNestedManyWithoutActerInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "AttachedLinks", void 0);
__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutOnActerInput_1.NotificationCreateNestedManyWithoutOnActerInput, {
        nullable: true
    }),
    __metadata("design:type", NotificationCreateNestedManyWithoutOnActerInput_1.NotificationCreateNestedManyWithoutOnActerInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "NotificationsTo", void 0);
__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutToActerInput_1.NotificationCreateNestedManyWithoutToActerInput, {
        nullable: true
    }),
    __metadata("design:type", NotificationCreateNestedManyWithoutToActerInput_1.NotificationCreateNestedManyWithoutToActerInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "NotificationsOn", void 0);
__decorate([
    TypeGraphQL.Field(_type => InviteCreateNestedManyWithoutOnActerInput_1.InviteCreateNestedManyWithoutOnActerInput, {
        nullable: true
    }),
    __metadata("design:type", InviteCreateNestedManyWithoutOnActerInput_1.InviteCreateNestedManyWithoutOnActerInput)
], ActerCreateWithoutCreatedByUserInput.prototype, "Invite", void 0);
ActerCreateWithoutCreatedByUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerCreateWithoutCreatedByUserInput);
exports.ActerCreateWithoutCreatedByUserInput = ActerCreateWithoutCreatedByUserInput;
