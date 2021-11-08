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
exports.NotificationOrderByWithRelationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerOrderByWithRelationInput_1 = require("../inputs/ActerOrderByWithRelationInput");
const ActivityOrderByWithRelationInput_1 = require("../inputs/ActivityOrderByWithRelationInput");
const PostOrderByWithRelationInput_1 = require("../inputs/PostOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let NotificationOrderByWithRelationInput = class NotificationOrderByWithRelationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], NotificationOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], NotificationOrderByWithRelationInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], NotificationOrderByWithRelationInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], NotificationOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], NotificationOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], NotificationOrderByWithRelationInput.prototype, "sendTo", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], NotificationOrderByWithRelationInput.prototype, "sentAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], NotificationOrderByWithRelationInput.prototype, "viewedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerOrderByWithRelationInput_1.ActerOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", ActerOrderByWithRelationInput_1.ActerOrderByWithRelationInput)
], NotificationOrderByWithRelationInput.prototype, "ToActer", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], NotificationOrderByWithRelationInput.prototype, "toActerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerOrderByWithRelationInput_1.ActerOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", ActerOrderByWithRelationInput_1.ActerOrderByWithRelationInput)
], NotificationOrderByWithRelationInput.prototype, "OnActer", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], NotificationOrderByWithRelationInput.prototype, "onActerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostOrderByWithRelationInput_1.PostOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", PostOrderByWithRelationInput_1.PostOrderByWithRelationInput)
], NotificationOrderByWithRelationInput.prototype, "Post", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], NotificationOrderByWithRelationInput.prototype, "postId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityOrderByWithRelationInput_1.ActivityOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityOrderByWithRelationInput_1.ActivityOrderByWithRelationInput)
], NotificationOrderByWithRelationInput.prototype, "Activity", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], NotificationOrderByWithRelationInput.prototype, "activityId", void 0);
NotificationOrderByWithRelationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], NotificationOrderByWithRelationInput);
exports.NotificationOrderByWithRelationInput = NotificationOrderByWithRelationInput;
