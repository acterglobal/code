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
var ActerOrderByWithRelationInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActerOrderByWithRelationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerConnectionOrderByRelationAggregateInput_1 = require("../inputs/ActerConnectionOrderByRelationAggregateInput");
const ActerInterestOrderByRelationAggregateInput_1 = require("../inputs/ActerInterestOrderByRelationAggregateInput");
const ActerOrderByRelationAggregateInput_1 = require("../inputs/ActerOrderByRelationAggregateInput");
const ActerTypeOrderByWithRelationInput_1 = require("../inputs/ActerTypeOrderByWithRelationInput");
const ActivityOrderByRelationAggregateInput_1 = require("../inputs/ActivityOrderByRelationAggregateInput");
const ActivityOrderByWithRelationInput_1 = require("../inputs/ActivityOrderByWithRelationInput");
const InviteOrderByRelationAggregateInput_1 = require("../inputs/InviteOrderByRelationAggregateInput");
const LinkOrderByRelationAggregateInput_1 = require("../inputs/LinkOrderByRelationAggregateInput");
const NotificationOrderByRelationAggregateInput_1 = require("../inputs/NotificationOrderByRelationAggregateInput");
const PostOrderByRelationAggregateInput_1 = require("../inputs/PostOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ActerOrderByWithRelationInput = ActerOrderByWithRelationInput_1 = class ActerOrderByWithRelationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "acterTypeId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "location", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "locationLat", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "locationLng", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "avatarUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "bannerUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "useAdmins", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "acterJoinSetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "acterNotifySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "acterNotifyEmailFrequency", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "acterPrivacySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerInterestOrderByRelationAggregateInput_1.ActerInterestOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActerInterestOrderByRelationAggregateInput_1.ActerInterestOrderByRelationAggregateInput)
], ActerOrderByWithRelationInput.prototype, "ActerInterests", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], ActerOrderByWithRelationInput.prototype, "createdByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "createdByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "deletedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "deletedByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], ActerOrderByWithRelationInput.prototype, "DeletedByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerTypeOrderByWithRelationInput_1.ActerTypeOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", ActerTypeOrderByWithRelationInput_1.ActerTypeOrderByWithRelationInput)
], ActerOrderByWithRelationInput.prototype, "ActerType", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerOrderByWithRelationInput_1, {
        nullable: true
    }),
    __metadata("design:type", ActerOrderByWithRelationInput)
], ActerOrderByWithRelationInput.prototype, "Parent", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerOrderByRelationAggregateInput_1.ActerOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActerOrderByRelationAggregateInput_1.ActerOrderByRelationAggregateInput)
], ActerOrderByWithRelationInput.prototype, "Children", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithRelationInput.prototype, "parentActerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionOrderByRelationAggregateInput_1.ActerConnectionOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionOrderByRelationAggregateInput_1.ActerConnectionOrderByRelationAggregateInput)
], ActerOrderByWithRelationInput.prototype, "Following", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionOrderByRelationAggregateInput_1.ActerConnectionOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionOrderByRelationAggregateInput_1.ActerConnectionOrderByRelationAggregateInput)
], ActerOrderByWithRelationInput.prototype, "Followers", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], ActerOrderByWithRelationInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityOrderByWithRelationInput_1.ActivityOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityOrderByWithRelationInput_1.ActivityOrderByWithRelationInput)
], ActerOrderByWithRelationInput.prototype, "Activity", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityOrderByRelationAggregateInput_1.ActivityOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityOrderByRelationAggregateInput_1.ActivityOrderByRelationAggregateInput)
], ActerOrderByWithRelationInput.prototype, "ActivitiesOrganized", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput)
], ActerOrderByWithRelationInput.prototype, "AttachedPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput)
], ActerOrderByWithRelationInput.prototype, "AuthoredPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => LinkOrderByRelationAggregateInput_1.LinkOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", LinkOrderByRelationAggregateInput_1.LinkOrderByRelationAggregateInput)
], ActerOrderByWithRelationInput.prototype, "AttachedLinks", void 0);
__decorate([
    TypeGraphQL.Field(_type => NotificationOrderByRelationAggregateInput_1.NotificationOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", NotificationOrderByRelationAggregateInput_1.NotificationOrderByRelationAggregateInput)
], ActerOrderByWithRelationInput.prototype, "NotificationsTo", void 0);
__decorate([
    TypeGraphQL.Field(_type => NotificationOrderByRelationAggregateInput_1.NotificationOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", NotificationOrderByRelationAggregateInput_1.NotificationOrderByRelationAggregateInput)
], ActerOrderByWithRelationInput.prototype, "NotificationsOn", void 0);
__decorate([
    TypeGraphQL.Field(_type => InviteOrderByRelationAggregateInput_1.InviteOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", InviteOrderByRelationAggregateInput_1.InviteOrderByRelationAggregateInput)
], ActerOrderByWithRelationInput.prototype, "Invite", void 0);
ActerOrderByWithRelationInput = ActerOrderByWithRelationInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerOrderByWithRelationInput);
exports.ActerOrderByWithRelationInput = ActerOrderByWithRelationInput;
