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
exports.InterestTypeUpdateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const InterestTypeUpdateManyWithoutParentInput_1 = require("../inputs/InterestTypeUpdateManyWithoutParentInput");
const InterestTypeUpdateOneWithoutChildrenInput_1 = require("../inputs/InterestTypeUpdateOneWithoutChildrenInput");
const InterestUpdateManyWithoutInterestTypeInput_1 = require("../inputs/InterestUpdateManyWithoutInterestTypeInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let InterestTypeUpdateInput = class InterestTypeUpdateInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InterestTypeUpdateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InterestTypeUpdateInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], InterestTypeUpdateInput.prototype, "sortOrder", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestTypeUpdateOneWithoutChildrenInput_1.InterestTypeUpdateOneWithoutChildrenInput, {
        nullable: true
    }),
    __metadata("design:type", InterestTypeUpdateOneWithoutChildrenInput_1.InterestTypeUpdateOneWithoutChildrenInput)
], InterestTypeUpdateInput.prototype, "parent", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestTypeUpdateManyWithoutParentInput_1.InterestTypeUpdateManyWithoutParentInput, {
        nullable: true
    }),
    __metadata("design:type", InterestTypeUpdateManyWithoutParentInput_1.InterestTypeUpdateManyWithoutParentInput)
], InterestTypeUpdateInput.prototype, "children", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestUpdateManyWithoutInterestTypeInput_1.InterestUpdateManyWithoutInterestTypeInput, {
        nullable: true
    }),
    __metadata("design:type", InterestUpdateManyWithoutInterestTypeInput_1.InterestUpdateManyWithoutInterestTypeInput)
], InterestTypeUpdateInput.prototype, "Interests", void 0);
InterestTypeUpdateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], InterestTypeUpdateInput);
exports.InterestTypeUpdateInput = InterestTypeUpdateInput;