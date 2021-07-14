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
var PostOrderByWithRelationInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrderByWithRelationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerOrderByWithRelationInput_1 = require("../inputs/ActerOrderByWithRelationInput");
const PostOrderByRelationAggregateInput_1 = require("../inputs/PostOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PostOrderByWithRelationInput = PostOrderByWithRelationInput_1 = class PostOrderByWithRelationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithRelationInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostOrderByWithRelationInput_1, {
        nullable: true
    }),
    __metadata("design:type", PostOrderByWithRelationInput)
], PostOrderByWithRelationInput.prototype, "Parent", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithRelationInput.prototype, "parentId", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput)
], PostOrderByWithRelationInput.prototype, "Comments", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerOrderByWithRelationInput_1.ActerOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", ActerOrderByWithRelationInput_1.ActerOrderByWithRelationInput)
], PostOrderByWithRelationInput.prototype, "Acter", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithRelationInput.prototype, "acterId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerOrderByWithRelationInput_1.ActerOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", ActerOrderByWithRelationInput_1.ActerOrderByWithRelationInput)
], PostOrderByWithRelationInput.prototype, "Author", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithRelationInput.prototype, "authorId", void 0);
PostOrderByWithRelationInput = PostOrderByWithRelationInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], PostOrderByWithRelationInput);
exports.PostOrderByWithRelationInput = PostOrderByWithRelationInput;
