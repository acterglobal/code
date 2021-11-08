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
exports.ActerTypeRuleGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerTypeRuleCountAggregate_1 = require("../outputs/ActerTypeRuleCountAggregate");
const ActerTypeRuleMaxAggregate_1 = require("../outputs/ActerTypeRuleMaxAggregate");
const ActerTypeRuleMinAggregate_1 = require("../outputs/ActerTypeRuleMinAggregate");
let ActerTypeRuleGroupBy = class ActerTypeRuleGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ActerTypeRuleGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], ActerTypeRuleGroupBy.prototype, "canCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], ActerTypeRuleGroupBy.prototype, "canJoin", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], ActerTypeRuleGroupBy.prototype, "canBecome", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ActerTypeRuleGroupBy.prototype, "subjectActerTypeId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ActerTypeRuleGroupBy.prototype, "objectActerTypeId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerTypeRuleCountAggregate_1.ActerTypeRuleCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", ActerTypeRuleCountAggregate_1.ActerTypeRuleCountAggregate)
], ActerTypeRuleGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerTypeRuleMinAggregate_1.ActerTypeRuleMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", ActerTypeRuleMinAggregate_1.ActerTypeRuleMinAggregate)
], ActerTypeRuleGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerTypeRuleMaxAggregate_1.ActerTypeRuleMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", ActerTypeRuleMaxAggregate_1.ActerTypeRuleMaxAggregate)
], ActerTypeRuleGroupBy.prototype, "_max", void 0);
ActerTypeRuleGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], ActerTypeRuleGroupBy);
exports.ActerTypeRuleGroupBy = ActerTypeRuleGroupBy;
