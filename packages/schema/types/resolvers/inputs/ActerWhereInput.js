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
var ActerWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActerWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerConnectionListRelationFilter_1 = require("../inputs/ActerConnectionListRelationFilter");
const ActerInterestListRelationFilter_1 = require("../inputs/ActerInterestListRelationFilter");
const ActerListRelationFilter_1 = require("../inputs/ActerListRelationFilter");
const ActerRelationFilter_1 = require("../inputs/ActerRelationFilter");
const ActerTypeRelationFilter_1 = require("../inputs/ActerTypeRelationFilter");
const ActivityListRelationFilter_1 = require("../inputs/ActivityListRelationFilter");
const ActivityRelationFilter_1 = require("../inputs/ActivityRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumActerJoinSettingsFilter_1 = require("../inputs/EnumActerJoinSettingsFilter");
const EnumActerNotificationEmailFrequencyFilter_1 = require("../inputs/EnumActerNotificationEmailFrequencyFilter");
const EnumActerNotificationSettingsFilter_1 = require("../inputs/EnumActerNotificationSettingsFilter");
const EnumActerPrivacySettingsFilter_1 = require("../inputs/EnumActerPrivacySettingsFilter");
const FloatNullableFilter_1 = require("../inputs/FloatNullableFilter");
const InviteListRelationFilter_1 = require("../inputs/InviteListRelationFilter");
const LinkListRelationFilter_1 = require("../inputs/LinkListRelationFilter");
const NotificationListRelationFilter_1 = require("../inputs/NotificationListRelationFilter");
const PostListRelationFilter_1 = require("../inputs/PostListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ActerWhereInput = ActerWhereInput_1 = class ActerWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ActerWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ActerWhereInput.prototype, "acterTypeId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerWhereInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerWhereInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerWhereInput.prototype, "location", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatNullableFilter_1.FloatNullableFilter)
], ActerWhereInput.prototype, "locationLat", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatNullableFilter_1.FloatNullableFilter)
], ActerWhereInput.prototype, "locationLng", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerWhereInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerWhereInput.prototype, "avatarUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerWhereInput.prototype, "bannerUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], ActerWhereInput.prototype, "useAdmins", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ActerWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ActerWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerJoinSettingsFilter_1.EnumActerJoinSettingsFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumActerJoinSettingsFilter_1.EnumActerJoinSettingsFilter)
], ActerWhereInput.prototype, "acterJoinSetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerNotificationSettingsFilter_1.EnumActerNotificationSettingsFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumActerNotificationSettingsFilter_1.EnumActerNotificationSettingsFilter)
], ActerWhereInput.prototype, "acterNotifySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerNotificationEmailFrequencyFilter_1.EnumActerNotificationEmailFrequencyFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumActerNotificationEmailFrequencyFilter_1.EnumActerNotificationEmailFrequencyFilter)
], ActerWhereInput.prototype, "acterNotifyEmailFrequency", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerPrivacySettingsFilter_1.EnumActerPrivacySettingsFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumActerPrivacySettingsFilter_1.EnumActerPrivacySettingsFilter)
], ActerWhereInput.prototype, "acterPrivacySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerInterestListRelationFilter_1.ActerInterestListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActerInterestListRelationFilter_1.ActerInterestListRelationFilter)
], ActerWhereInput.prototype, "ActerInterests", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ActerWhereInput.prototype, "createdByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ActerWhereInput.prototype, "createdByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ActerWhereInput.prototype, "deletedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerWhereInput.prototype, "deletedByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ActerWhereInput.prototype, "DeletedByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerTypeRelationFilter_1.ActerTypeRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActerTypeRelationFilter_1.ActerTypeRelationFilter)
], ActerWhereInput.prototype, "ActerType", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerRelationFilter_1.ActerRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActerRelationFilter_1.ActerRelationFilter)
], ActerWhereInput.prototype, "Parent", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerListRelationFilter_1.ActerListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActerListRelationFilter_1.ActerListRelationFilter)
], ActerWhereInput.prototype, "Children", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerWhereInput.prototype, "parentActerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionListRelationFilter_1.ActerConnectionListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionListRelationFilter_1.ActerConnectionListRelationFilter)
], ActerWhereInput.prototype, "Following", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionListRelationFilter_1.ActerConnectionListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionListRelationFilter_1.ActerConnectionListRelationFilter)
], ActerWhereInput.prototype, "Followers", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ActerWhereInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityRelationFilter_1.ActivityRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActivityRelationFilter_1.ActivityRelationFilter)
], ActerWhereInput.prototype, "Activity", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityListRelationFilter_1.ActivityListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActivityListRelationFilter_1.ActivityListRelationFilter)
], ActerWhereInput.prototype, "ActivitiesOrganized", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostListRelationFilter_1.PostListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", PostListRelationFilter_1.PostListRelationFilter)
], ActerWhereInput.prototype, "AttachedPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostListRelationFilter_1.PostListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", PostListRelationFilter_1.PostListRelationFilter)
], ActerWhereInput.prototype, "AuthoredPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => LinkListRelationFilter_1.LinkListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", LinkListRelationFilter_1.LinkListRelationFilter)
], ActerWhereInput.prototype, "AttachedLinks", void 0);
__decorate([
    TypeGraphQL.Field(_type => NotificationListRelationFilter_1.NotificationListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", NotificationListRelationFilter_1.NotificationListRelationFilter)
], ActerWhereInput.prototype, "NotificationsTo", void 0);
__decorate([
    TypeGraphQL.Field(_type => NotificationListRelationFilter_1.NotificationListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", NotificationListRelationFilter_1.NotificationListRelationFilter)
], ActerWhereInput.prototype, "NotificationsOn", void 0);
__decorate([
    TypeGraphQL.Field(_type => InviteListRelationFilter_1.InviteListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", InviteListRelationFilter_1.InviteListRelationFilter)
], ActerWhereInput.prototype, "Invite", void 0);
ActerWhereInput = ActerWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerWhereInput);
exports.ActerWhereInput = ActerWhereInput;
