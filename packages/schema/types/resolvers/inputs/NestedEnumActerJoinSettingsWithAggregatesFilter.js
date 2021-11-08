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
var NestedEnumActerJoinSettingsWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumActerJoinSettingsWithAggregatesFilter = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const NestedEnumActerJoinSettingsFilter_1 = require("../inputs/NestedEnumActerJoinSettingsFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const ActerJoinSettings_1 = require("../../enums/ActerJoinSettings");
let NestedEnumActerJoinSettingsWithAggregatesFilter = NestedEnumActerJoinSettingsWithAggregatesFilter_1 = class NestedEnumActerJoinSettingsWithAggregatesFilter {
};
__decorate([
    TypeGraphQL.Field(_type => ActerJoinSettings_1.ActerJoinSettings, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedEnumActerJoinSettingsWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerJoinSettings_1.ActerJoinSettings], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedEnumActerJoinSettingsWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerJoinSettings_1.ActerJoinSettings], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedEnumActerJoinSettingsWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumActerJoinSettingsWithAggregatesFilter_1, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumActerJoinSettingsWithAggregatesFilter)
], NestedEnumActerJoinSettingsWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumActerJoinSettingsWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumActerJoinSettingsFilter_1.NestedEnumActerJoinSettingsFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumActerJoinSettingsFilter_1.NestedEnumActerJoinSettingsFilter)
], NestedEnumActerJoinSettingsWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumActerJoinSettingsFilter_1.NestedEnumActerJoinSettingsFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumActerJoinSettingsFilter_1.NestedEnumActerJoinSettingsFilter)
], NestedEnumActerJoinSettingsWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumActerJoinSettingsWithAggregatesFilter = NestedEnumActerJoinSettingsWithAggregatesFilter_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], NestedEnumActerJoinSettingsWithAggregatesFilter);
exports.NestedEnumActerJoinSettingsWithAggregatesFilter = NestedEnumActerJoinSettingsWithAggregatesFilter;
