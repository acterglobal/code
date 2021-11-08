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
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerConnectionListRelationFilter_1 = require("../inputs/ActerConnectionListRelationFilter");
const ActerInterestListRelationFilter_1 = require("../inputs/ActerInterestListRelationFilter");
const ActerListRelationFilter_1 = require("../inputs/ActerListRelationFilter");
const ActerRelationFilter_1 = require("../inputs/ActerRelationFilter");
const ActivityListRelationFilter_1 = require("../inputs/ActivityListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const InviteListRelationFilter_1 = require("../inputs/InviteListRelationFilter");
const LinkListRelationFilter_1 = require("../inputs/LinkListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserWhereInput.prototype, "emailVerified", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "auth0ProviderId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "intercomId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerRelationFilter_1.ActerRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActerRelationFilter_1.ActerRelationFilter)
], UserWhereInput.prototype, "Acter", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "acterId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerListRelationFilter_1.ActerListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActerListRelationFilter_1.ActerListRelationFilter)
], UserWhereInput.prototype, "ActersCreated", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionListRelationFilter_1.ActerConnectionListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionListRelationFilter_1.ActerConnectionListRelationFilter)
], UserWhereInput.prototype, "ActerConnections", void 0);
__decorate([
    TypeGraphQL.Field(_type => LinkListRelationFilter_1.LinkListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", LinkListRelationFilter_1.LinkListRelationFilter)
], UserWhereInput.prototype, "LinksCreated", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerInterestListRelationFilter_1.ActerInterestListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActerInterestListRelationFilter_1.ActerInterestListRelationFilter)
], UserWhereInput.prototype, "ActerInterest", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityListRelationFilter_1.ActivityListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActivityListRelationFilter_1.ActivityListRelationFilter)
], UserWhereInput.prototype, "ActivitiesCreated", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerListRelationFilter_1.ActerListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActerListRelationFilter_1.ActerListRelationFilter)
], UserWhereInput.prototype, "ActersDeleted", void 0);
__decorate([
    TypeGraphQL.Field(_type => InviteListRelationFilter_1.InviteListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", InviteListRelationFilter_1.InviteListRelationFilter)
], UserWhereInput.prototype, "Invite", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
