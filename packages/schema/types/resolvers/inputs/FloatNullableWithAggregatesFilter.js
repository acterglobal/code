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
exports.FloatNullableWithAggregatesFilter = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const NestedFloatNullableFilter_1 = require("../inputs/NestedFloatNullableFilter");
const NestedFloatNullableWithAggregatesFilter_1 = require("../inputs/NestedFloatNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
let FloatNullableWithAggregatesFilter = class FloatNullableWithAggregatesFilter {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FloatNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FloatNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedFloatNullableWithAggregatesFilter_1.NestedFloatNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedFloatNullableWithAggregatesFilter_1.NestedFloatNullableWithAggregatesFilter)
], FloatNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter_1.NestedFloatNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedFloatNullableFilter_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter_1.NestedFloatNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedFloatNullableFilter_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter_1.NestedFloatNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedFloatNullableFilter_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter_1.NestedFloatNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedFloatNullableFilter_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_max", void 0);
FloatNullableWithAggregatesFilter = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], FloatNullableWithAggregatesFilter);
exports.FloatNullableWithAggregatesFilter = FloatNullableWithAggregatesFilter;
