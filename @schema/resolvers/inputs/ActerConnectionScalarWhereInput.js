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
var ActerConnectionScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActerConnectionScalarWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumActerConnectionRoleFilter_1 = require("../inputs/EnumActerConnectionRoleFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ActerConnectionScalarWhereInput = ActerConnectionScalarWhereInput_1 = class ActerConnectionScalarWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActerConnectionScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerConnectionScalarWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerConnectionScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerConnectionScalarWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerConnectionScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerConnectionScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ActerConnectionScalarWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], ActerConnectionScalarWhereInput.prototype, "isApproved", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerConnectionRoleFilter_1.EnumActerConnectionRoleFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumActerConnectionRoleFilter_1.EnumActerConnectionRoleFilter)
], ActerConnectionScalarWhereInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ActerConnectionScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ActerConnectionScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ActerConnectionScalarWhereInput.prototype, "createdByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ActerConnectionScalarWhereInput.prototype, "followerActerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ActerConnectionScalarWhereInput.prototype, "followingActerId", void 0);
ActerConnectionScalarWhereInput = ActerConnectionScalarWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerConnectionScalarWhereInput);
exports.ActerConnectionScalarWhereInput = ActerConnectionScalarWhereInput;