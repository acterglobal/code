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
exports.ActivityOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActivityCountOrderByAggregateInput_1 = require("../inputs/ActivityCountOrderByAggregateInput");
const ActivityMaxOrderByAggregateInput_1 = require("../inputs/ActivityMaxOrderByAggregateInput");
const ActivityMinOrderByAggregateInput_1 = require("../inputs/ActivityMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ActivityOrderByWithAggregationInput = class ActivityOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActivityOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActivityOrderByWithAggregationInput.prototype, "startAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActivityOrderByWithAggregationInput.prototype, "endAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActivityOrderByWithAggregationInput.prototype, "isOnline", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActivityOrderByWithAggregationInput.prototype, "isAllDay", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActivityOrderByWithAggregationInput.prototype, "activityTypeId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActivityOrderByWithAggregationInput.prototype, "createdByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActivityOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActivityOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActivityOrderByWithAggregationInput.prototype, "acterId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActivityOrderByWithAggregationInput.prototype, "organiserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityCountOrderByAggregateInput_1.ActivityCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityCountOrderByAggregateInput_1.ActivityCountOrderByAggregateInput)
], ActivityOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityMaxOrderByAggregateInput_1.ActivityMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityMaxOrderByAggregateInput_1.ActivityMaxOrderByAggregateInput)
], ActivityOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityMinOrderByAggregateInput_1.ActivityMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityMinOrderByAggregateInput_1.ActivityMinOrderByAggregateInput)
], ActivityOrderByWithAggregationInput.prototype, "_min", void 0);
ActivityOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActivityOrderByWithAggregationInput);
exports.ActivityOrderByWithAggregationInput = ActivityOrderByWithAggregationInput;
