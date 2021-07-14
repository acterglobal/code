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
exports.ActerInterestUpdateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerUpdateOneRequiredWithoutActerInterestsInput_1 = require("../inputs/ActerUpdateOneRequiredWithoutActerInterestsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const InterestUpdateOneRequiredWithoutInterestActersInput_1 = require("../inputs/InterestUpdateOneRequiredWithoutInterestActersInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutActerInterestInput_1 = require("../inputs/UserUpdateOneRequiredWithoutActerInterestInput");
let ActerInterestUpdateInput = class ActerInterestUpdateInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ActerInterestUpdateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ActerInterestUpdateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ActerInterestUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutActerInterestInput_1.UserUpdateOneRequiredWithoutActerInterestInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateOneRequiredWithoutActerInterestInput_1.UserUpdateOneRequiredWithoutActerInterestInput)
], ActerInterestUpdateInput.prototype, "CreatedByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateOneRequiredWithoutActerInterestsInput_1.ActerUpdateOneRequiredWithoutActerInterestsInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateOneRequiredWithoutActerInterestsInput_1.ActerUpdateOneRequiredWithoutActerInterestsInput)
], ActerInterestUpdateInput.prototype, "Acter", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestUpdateOneRequiredWithoutInterestActersInput_1.InterestUpdateOneRequiredWithoutInterestActersInput, {
        nullable: true
    }),
    __metadata("design:type", InterestUpdateOneRequiredWithoutInterestActersInput_1.InterestUpdateOneRequiredWithoutInterestActersInput)
], ActerInterestUpdateInput.prototype, "Interest", void 0);
ActerInterestUpdateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerInterestUpdateInput);
exports.ActerInterestUpdateInput = ActerInterestUpdateInput;
