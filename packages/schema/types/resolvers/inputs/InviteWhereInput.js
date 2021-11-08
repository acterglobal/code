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
var InviteWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerRelationFilter_1 = require("../inputs/ActerRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let InviteWhereInput = InviteWhereInput_1 = class InviteWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [InviteWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], InviteWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], InviteWhereInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], InviteWhereInput.prototype, "message", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], InviteWhereInput.prototype, "error", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], InviteWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], InviteWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], InviteWhereInput.prototype, "sentAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], InviteWhereInput.prototype, "acceptedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerRelationFilter_1.ActerRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActerRelationFilter_1.ActerRelationFilter)
], InviteWhereInput.prototype, "OnActer", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], InviteWhereInput.prototype, "onActerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], InviteWhereInput.prototype, "createdByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], InviteWhereInput.prototype, "createdByUserId", void 0);
InviteWhereInput = InviteWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], InviteWhereInput);
exports.InviteWhereInput = InviteWhereInput;
