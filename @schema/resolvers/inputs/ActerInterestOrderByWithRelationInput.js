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
exports.ActerInterestOrderByWithRelationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerOrderByWithRelationInput_1 = require("../inputs/ActerOrderByWithRelationInput");
const InterestOrderByWithRelationInput_1 = require("../inputs/InterestOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ActerInterestOrderByWithRelationInput = class ActerInterestOrderByWithRelationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerInterestOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerInterestOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerInterestOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], ActerInterestOrderByWithRelationInput.prototype, "CreatedByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerInterestOrderByWithRelationInput.prototype, "createdByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerOrderByWithRelationInput_1.ActerOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", ActerOrderByWithRelationInput_1.ActerOrderByWithRelationInput)
], ActerInterestOrderByWithRelationInput.prototype, "Acter", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerInterestOrderByWithRelationInput.prototype, "acterId", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestOrderByWithRelationInput_1.InterestOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", InterestOrderByWithRelationInput_1.InterestOrderByWithRelationInput)
], ActerInterestOrderByWithRelationInput.prototype, "Interest", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerInterestOrderByWithRelationInput.prototype, "interestId", void 0);
ActerInterestOrderByWithRelationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerInterestOrderByWithRelationInput);
exports.ActerInterestOrderByWithRelationInput = ActerInterestOrderByWithRelationInput;