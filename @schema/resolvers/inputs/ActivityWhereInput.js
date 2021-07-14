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
var ActivityWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerRelationFilter_1 = require("../inputs/ActerRelationFilter");
const ActivityTypeRelationFilter_1 = require("../inputs/ActivityTypeRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ActivityWhereInput = ActivityWhereInput_1 = class ActivityWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ActivityWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ActivityWhereInput.prototype, "startAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ActivityWhereInput.prototype, "endAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], ActivityWhereInput.prototype, "isOnline", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], ActivityWhereInput.prototype, "isAllDay", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityTypeRelationFilter_1.ActivityTypeRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActivityTypeRelationFilter_1.ActivityTypeRelationFilter)
], ActivityWhereInput.prototype, "ActivityType", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ActivityWhereInput.prototype, "activityTypeId", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ActivityWhereInput.prototype, "createdByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ActivityWhereInput.prototype, "createdByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ActivityWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ActivityWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerRelationFilter_1.ActerRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActerRelationFilter_1.ActerRelationFilter)
], ActivityWhereInput.prototype, "Acter", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActivityWhereInput.prototype, "acterId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerRelationFilter_1.ActerRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActerRelationFilter_1.ActerRelationFilter)
], ActivityWhereInput.prototype, "Organiser", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ActivityWhereInput.prototype, "organiserId", void 0);
ActivityWhereInput = ActivityWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActivityWhereInput);
exports.ActivityWhereInput = ActivityWhereInput;