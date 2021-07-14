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
exports.ActerTypeRuleUpdateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerTypeUpdateOneRequiredWithoutActerTypeRulesInput_1 = require("../inputs/ActerTypeUpdateOneRequiredWithoutActerTypeRulesInput");
const ActerTypeUpdateOneRequiredWithoutRulesOnActerTypeInput_1 = require("../inputs/ActerTypeUpdateOneRequiredWithoutRulesOnActerTypeInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ActerTypeRuleUpdateInput = class ActerTypeRuleUpdateInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ActerTypeRuleUpdateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ActerTypeRuleUpdateInput.prototype, "canCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ActerTypeRuleUpdateInput.prototype, "canJoin", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ActerTypeRuleUpdateInput.prototype, "canBecome", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerTypeUpdateOneRequiredWithoutActerTypeRulesInput_1.ActerTypeUpdateOneRequiredWithoutActerTypeRulesInput, {
        nullable: true
    }),
    __metadata("design:type", ActerTypeUpdateOneRequiredWithoutActerTypeRulesInput_1.ActerTypeUpdateOneRequiredWithoutActerTypeRulesInput)
], ActerTypeRuleUpdateInput.prototype, "Subject", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerTypeUpdateOneRequiredWithoutRulesOnActerTypeInput_1.ActerTypeUpdateOneRequiredWithoutRulesOnActerTypeInput, {
        nullable: true
    }),
    __metadata("design:type", ActerTypeUpdateOneRequiredWithoutRulesOnActerTypeInput_1.ActerTypeUpdateOneRequiredWithoutRulesOnActerTypeInput)
], ActerTypeRuleUpdateInput.prototype, "Object", void 0);
ActerTypeRuleUpdateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerTypeRuleUpdateInput);
exports.ActerTypeRuleUpdateInput = ActerTypeRuleUpdateInput;
