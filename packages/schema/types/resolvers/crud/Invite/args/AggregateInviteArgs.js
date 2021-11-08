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
exports.AggregateInviteArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const InviteOrderByWithRelationInput_1 = require("../../../inputs/InviteOrderByWithRelationInput");
const InviteWhereInput_1 = require("../../../inputs/InviteWhereInput");
const InviteWhereUniqueInput_1 = require("../../../inputs/InviteWhereUniqueInput");
let AggregateInviteArgs = class AggregateInviteArgs {
};
__decorate([
    TypeGraphQL.Field(_type => InviteWhereInput_1.InviteWhereInput, {
        nullable: true
    }),
    __metadata("design:type", InviteWhereInput_1.InviteWhereInput)
], AggregateInviteArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteOrderByWithRelationInput_1.InviteOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AggregateInviteArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => InviteWhereUniqueInput_1.InviteWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", InviteWhereUniqueInput_1.InviteWhereUniqueInput)
], AggregateInviteArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], AggregateInviteArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], AggregateInviteArgs.prototype, "skip", void 0);
AggregateInviteArgs = __decorate([
    TypeGraphQL.ArgsType()
], AggregateInviteArgs);
exports.AggregateInviteArgs = AggregateInviteArgs;
