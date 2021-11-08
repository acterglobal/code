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
exports.ActerConnectionGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerConnectionCountAggregate_1 = require("../outputs/ActerConnectionCountAggregate");
const ActerConnectionMaxAggregate_1 = require("../outputs/ActerConnectionMaxAggregate");
const ActerConnectionMinAggregate_1 = require("../outputs/ActerConnectionMinAggregate");
const ActerConnectionRole_1 = require("../../enums/ActerConnectionRole");
let ActerConnectionGroupBy = class ActerConnectionGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ActerConnectionGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ActerConnectionGroupBy.prototype, "isApproved", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionRole_1.ActerConnectionRole, {
        nullable: false
    }),
    __metadata("design:type", String)
], ActerConnectionGroupBy.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], ActerConnectionGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], ActerConnectionGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ActerConnectionGroupBy.prototype, "createdByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ActerConnectionGroupBy.prototype, "followerActerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ActerConnectionGroupBy.prototype, "followingActerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionCountAggregate_1.ActerConnectionCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionCountAggregate_1.ActerConnectionCountAggregate)
], ActerConnectionGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionMinAggregate_1.ActerConnectionMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionMinAggregate_1.ActerConnectionMinAggregate)
], ActerConnectionGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionMaxAggregate_1.ActerConnectionMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionMaxAggregate_1.ActerConnectionMaxAggregate)
], ActerConnectionGroupBy.prototype, "_max", void 0);
ActerConnectionGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], ActerConnectionGroupBy);
exports.ActerConnectionGroupBy = ActerConnectionGroupBy;
