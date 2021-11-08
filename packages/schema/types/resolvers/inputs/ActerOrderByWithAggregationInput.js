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
exports.ActerOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerAvgOrderByAggregateInput_1 = require("../inputs/ActerAvgOrderByAggregateInput");
const ActerCountOrderByAggregateInput_1 = require("../inputs/ActerCountOrderByAggregateInput");
const ActerMaxOrderByAggregateInput_1 = require("../inputs/ActerMaxOrderByAggregateInput");
const ActerMinOrderByAggregateInput_1 = require("../inputs/ActerMinOrderByAggregateInput");
const ActerSumOrderByAggregateInput_1 = require("../inputs/ActerSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ActerOrderByWithAggregationInput = class ActerOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "acterTypeId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "location", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "locationLat", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "locationLng", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "avatarUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "bannerUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "useAdmins", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "acterJoinSetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "acterNotifySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "acterNotifyEmailFrequency", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "acterPrivacySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "createdByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "deletedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "deletedByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerOrderByWithAggregationInput.prototype, "parentActerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCountOrderByAggregateInput_1.ActerCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCountOrderByAggregateInput_1.ActerCountOrderByAggregateInput)
], ActerOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerAvgOrderByAggregateInput_1.ActerAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActerAvgOrderByAggregateInput_1.ActerAvgOrderByAggregateInput)
], ActerOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerMaxOrderByAggregateInput_1.ActerMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActerMaxOrderByAggregateInput_1.ActerMaxOrderByAggregateInput)
], ActerOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerMinOrderByAggregateInput_1.ActerMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActerMinOrderByAggregateInput_1.ActerMinOrderByAggregateInput)
], ActerOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerSumOrderByAggregateInput_1.ActerSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActerSumOrderByAggregateInput_1.ActerSumOrderByAggregateInput)
], ActerOrderByWithAggregationInput.prototype, "_sum", void 0);
ActerOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerOrderByWithAggregationInput);
exports.ActerOrderByWithAggregationInput = ActerOrderByWithAggregationInput;
