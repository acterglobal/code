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
exports.AggregateInterestType = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const InterestTypeAvgAggregate_1 = require("../outputs/InterestTypeAvgAggregate");
const InterestTypeCountAggregate_1 = require("../outputs/InterestTypeCountAggregate");
const InterestTypeMaxAggregate_1 = require("../outputs/InterestTypeMaxAggregate");
const InterestTypeMinAggregate_1 = require("../outputs/InterestTypeMinAggregate");
const InterestTypeSumAggregate_1 = require("../outputs/InterestTypeSumAggregate");
let AggregateInterestType = class AggregateInterestType {
};
__decorate([
    TypeGraphQL.Field(_type => InterestTypeCountAggregate_1.InterestTypeCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", InterestTypeCountAggregate_1.InterestTypeCountAggregate)
], AggregateInterestType.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestTypeAvgAggregate_1.InterestTypeAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", InterestTypeAvgAggregate_1.InterestTypeAvgAggregate)
], AggregateInterestType.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestTypeSumAggregate_1.InterestTypeSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", InterestTypeSumAggregate_1.InterestTypeSumAggregate)
], AggregateInterestType.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestTypeMinAggregate_1.InterestTypeMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", InterestTypeMinAggregate_1.InterestTypeMinAggregate)
], AggregateInterestType.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestTypeMaxAggregate_1.InterestTypeMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", InterestTypeMaxAggregate_1.InterestTypeMaxAggregate)
], AggregateInterestType.prototype, "max", void 0);
AggregateInterestType = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateInterestType);
exports.AggregateInterestType = AggregateInterestType;
