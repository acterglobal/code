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
var InterestTypeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestTypeWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const InterestListRelationFilter_1 = require("../inputs/InterestListRelationFilter");
const InterestTypeListRelationFilter_1 = require("../inputs/InterestTypeListRelationFilter");
const InterestTypeRelationFilter_1 = require("../inputs/InterestTypeRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let InterestTypeWhereInput = InterestTypeWhereInput_1 = class InterestTypeWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [InterestTypeWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestTypeWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestTypeWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestTypeWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestTypeWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestTypeWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], InterestTypeWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], InterestTypeWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestTypeRelationFilter_1.InterestTypeRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", InterestTypeRelationFilter_1.InterestTypeRelationFilter)
], InterestTypeWhereInput.prototype, "parent", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestTypeListRelationFilter_1.InterestTypeListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", InterestTypeListRelationFilter_1.InterestTypeListRelationFilter)
], InterestTypeWhereInput.prototype, "children", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], InterestTypeWhereInput.prototype, "sortOrder", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], InterestTypeWhereInput.prototype, "parentInterestTypeId", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestListRelationFilter_1.InterestListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", InterestListRelationFilter_1.InterestListRelationFilter)
], InterestTypeWhereInput.prototype, "Interests", void 0);
InterestTypeWhereInput = InterestTypeWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], InterestTypeWhereInput);
exports.InterestTypeWhereInput = InterestTypeWhereInput;
