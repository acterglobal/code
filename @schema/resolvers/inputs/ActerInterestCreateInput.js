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
exports.ActerInterestCreateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerCreateNestedOneWithoutActerInterestsInput_1 = require("../inputs/ActerCreateNestedOneWithoutActerInterestsInput");
const InterestCreateNestedOneWithoutInterestActersInput_1 = require("../inputs/InterestCreateNestedOneWithoutInterestActersInput");
const UserCreateNestedOneWithoutActerInterestInput_1 = require("../inputs/UserCreateNestedOneWithoutActerInterestInput");
let ActerInterestCreateInput = class ActerInterestCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerInterestCreateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ActerInterestCreateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ActerInterestCreateInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutActerInterestInput_1.UserCreateNestedOneWithoutActerInterestInput, {
        nullable: false
    }),
    __metadata("design:type", UserCreateNestedOneWithoutActerInterestInput_1.UserCreateNestedOneWithoutActerInterestInput)
], ActerInterestCreateInput.prototype, "CreatedByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedOneWithoutActerInterestsInput_1.ActerCreateNestedOneWithoutActerInterestsInput, {
        nullable: false
    }),
    __metadata("design:type", ActerCreateNestedOneWithoutActerInterestsInput_1.ActerCreateNestedOneWithoutActerInterestsInput)
], ActerInterestCreateInput.prototype, "Acter", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestCreateNestedOneWithoutInterestActersInput_1.InterestCreateNestedOneWithoutInterestActersInput, {
        nullable: false
    }),
    __metadata("design:type", InterestCreateNestedOneWithoutInterestActersInput_1.InterestCreateNestedOneWithoutInterestActersInput)
], ActerInterestCreateInput.prototype, "Interest", void 0);
ActerInterestCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerInterestCreateInput);
exports.ActerInterestCreateInput = ActerInterestCreateInput;
