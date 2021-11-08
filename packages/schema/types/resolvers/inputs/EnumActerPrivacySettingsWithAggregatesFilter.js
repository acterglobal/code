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
exports.EnumActerPrivacySettingsWithAggregatesFilter = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const NestedEnumActerPrivacySettingsFilter_1 = require("../inputs/NestedEnumActerPrivacySettingsFilter");
const NestedEnumActerPrivacySettingsWithAggregatesFilter_1 = require("../inputs/NestedEnumActerPrivacySettingsWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const ActerPrivacySettings_1 = require("../../enums/ActerPrivacySettings");
let EnumActerPrivacySettingsWithAggregatesFilter = class EnumActerPrivacySettingsWithAggregatesFilter {
};
__decorate([
    TypeGraphQL.Field(_type => ActerPrivacySettings_1.ActerPrivacySettings, {
        nullable: true
    }),
    __metadata("design:type", String)
], EnumActerPrivacySettingsWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerPrivacySettings_1.ActerPrivacySettings], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EnumActerPrivacySettingsWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerPrivacySettings_1.ActerPrivacySettings], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EnumActerPrivacySettingsWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumActerPrivacySettingsWithAggregatesFilter_1.NestedEnumActerPrivacySettingsWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumActerPrivacySettingsWithAggregatesFilter_1.NestedEnumActerPrivacySettingsWithAggregatesFilter)
], EnumActerPrivacySettingsWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumActerPrivacySettingsWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumActerPrivacySettingsFilter_1.NestedEnumActerPrivacySettingsFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumActerPrivacySettingsFilter_1.NestedEnumActerPrivacySettingsFilter)
], EnumActerPrivacySettingsWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumActerPrivacySettingsFilter_1.NestedEnumActerPrivacySettingsFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumActerPrivacySettingsFilter_1.NestedEnumActerPrivacySettingsFilter)
], EnumActerPrivacySettingsWithAggregatesFilter.prototype, "_max", void 0);
EnumActerPrivacySettingsWithAggregatesFilter = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], EnumActerPrivacySettingsWithAggregatesFilter);
exports.EnumActerPrivacySettingsWithAggregatesFilter = EnumActerPrivacySettingsWithAggregatesFilter;
