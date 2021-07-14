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
exports.UserOrderByWithRelationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerConnectionOrderByRelationAggregateInput_1 = require("../inputs/ActerConnectionOrderByRelationAggregateInput");
const ActerInterestOrderByRelationAggregateInput_1 = require("../inputs/ActerInterestOrderByRelationAggregateInput");
const ActerOrderByRelationAggregateInput_1 = require("../inputs/ActerOrderByRelationAggregateInput");
const ActerOrderByWithRelationInput_1 = require("../inputs/ActerOrderByWithRelationInput");
const ActivityOrderByRelationAggregateInput_1 = require("../inputs/ActivityOrderByRelationAggregateInput");
const LinkOrderByRelationAggregateInput_1 = require("../inputs/LinkOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "emailVerified", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerOrderByWithRelationInput_1.ActerOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", ActerOrderByWithRelationInput_1.ActerOrderByWithRelationInput)
], UserOrderByWithRelationInput.prototype, "Acter", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "acterId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerOrderByRelationAggregateInput_1.ActerOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActerOrderByRelationAggregateInput_1.ActerOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "ActersCreated", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionOrderByRelationAggregateInput_1.ActerConnectionOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionOrderByRelationAggregateInput_1.ActerConnectionOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "ActerConnections", void 0);
__decorate([
    TypeGraphQL.Field(_type => LinkOrderByRelationAggregateInput_1.LinkOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", LinkOrderByRelationAggregateInput_1.LinkOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "LinksCreated", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerInterestOrderByRelationAggregateInput_1.ActerInterestOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActerInterestOrderByRelationAggregateInput_1.ActerInterestOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "ActerInterest", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityOrderByRelationAggregateInput_1.ActivityOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityOrderByRelationAggregateInput_1.ActivityOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "ActivitiesCreated", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerOrderByRelationAggregateInput_1.ActerOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActerOrderByRelationAggregateInput_1.ActerOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "ActersDeleted", void 0);
UserOrderByWithRelationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
