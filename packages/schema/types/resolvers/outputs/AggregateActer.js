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
exports.AggregateActer = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerAvgAggregate_1 = require("../outputs/ActerAvgAggregate");
const ActerCountAggregate_1 = require("../outputs/ActerCountAggregate");
const ActerMaxAggregate_1 = require("../outputs/ActerMaxAggregate");
const ActerMinAggregate_1 = require("../outputs/ActerMinAggregate");
const ActerSumAggregate_1 = require("../outputs/ActerSumAggregate");
let AggregateActer = class AggregateActer {
};
__decorate([
    TypeGraphQL.Field(_type => ActerCountAggregate_1.ActerCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", ActerCountAggregate_1.ActerCountAggregate)
], AggregateActer.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerAvgAggregate_1.ActerAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", ActerAvgAggregate_1.ActerAvgAggregate)
], AggregateActer.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerSumAggregate_1.ActerSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", ActerSumAggregate_1.ActerSumAggregate)
], AggregateActer.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerMinAggregate_1.ActerMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", ActerMinAggregate_1.ActerMinAggregate)
], AggregateActer.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerMaxAggregate_1.ActerMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", ActerMaxAggregate_1.ActerMaxAggregate)
], AggregateActer.prototype, "_max", void 0);
AggregateActer = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateActer);
exports.AggregateActer = AggregateActer;
