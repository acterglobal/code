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
var ActerScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActerScalarWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumActerJoinSettingsFilter_1 = require("../inputs/EnumActerJoinSettingsFilter");
const EnumActerNotificationEmailFrequencyFilter_1 = require("../inputs/EnumActerNotificationEmailFrequencyFilter");
const EnumActerNotificationSettingsFilter_1 = require("../inputs/EnumActerNotificationSettingsFilter");
const EnumActerPrivacySettingsFilter_1 = require("../inputs/EnumActerPrivacySettingsFilter");
const FloatNullableFilter_1 = require("../inputs/FloatNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ActerScalarWhereInput = ActerScalarWhereInput_1 = class ActerScalarWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActerScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerScalarWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerScalarWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ActerScalarWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ActerScalarWhereInput.prototype, "acterTypeId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerScalarWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerScalarWhereInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerScalarWhereInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerScalarWhereInput.prototype, "location", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatNullableFilter_1.FloatNullableFilter)
], ActerScalarWhereInput.prototype, "locationLat", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatNullableFilter_1.FloatNullableFilter)
], ActerScalarWhereInput.prototype, "locationLng", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerScalarWhereInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerScalarWhereInput.prototype, "avatarUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerScalarWhereInput.prototype, "bannerUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], ActerScalarWhereInput.prototype, "useAdmins", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ActerScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ActerScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerJoinSettingsFilter_1.EnumActerJoinSettingsFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumActerJoinSettingsFilter_1.EnumActerJoinSettingsFilter)
], ActerScalarWhereInput.prototype, "acterJoinSetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerNotificationSettingsFilter_1.EnumActerNotificationSettingsFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumActerNotificationSettingsFilter_1.EnumActerNotificationSettingsFilter)
], ActerScalarWhereInput.prototype, "acterNotifySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerNotificationEmailFrequencyFilter_1.EnumActerNotificationEmailFrequencyFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumActerNotificationEmailFrequencyFilter_1.EnumActerNotificationEmailFrequencyFilter)
], ActerScalarWhereInput.prototype, "acterNotifyEmailFrequency", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerPrivacySettingsFilter_1.EnumActerPrivacySettingsFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumActerPrivacySettingsFilter_1.EnumActerPrivacySettingsFilter)
], ActerScalarWhereInput.prototype, "acterPrivacySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ActerScalarWhereInput.prototype, "createdByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ActerScalarWhereInput.prototype, "deletedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerScalarWhereInput.prototype, "deletedByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActerScalarWhereInput.prototype, "parentActerId", void 0);
ActerScalarWhereInput = ActerScalarWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerScalarWhereInput);
exports.ActerScalarWhereInput = ActerScalarWhereInput;
