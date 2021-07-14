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
exports.ActerTypeCreateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerCreateNestedManyWithoutActerTypeInput_1 = require("../inputs/ActerCreateNestedManyWithoutActerTypeInput");
const ActerTypeRuleCreateNestedManyWithoutObjectInput_1 = require("../inputs/ActerTypeRuleCreateNestedManyWithoutObjectInput");
const ActerTypeRuleCreateNestedManyWithoutSubjectInput_1 = require("../inputs/ActerTypeRuleCreateNestedManyWithoutSubjectInput");
let ActerTypeCreateInput = class ActerTypeCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerTypeCreateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ActerTypeCreateInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedManyWithoutActerTypeInput_1.ActerCreateNestedManyWithoutActerTypeInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateNestedManyWithoutActerTypeInput_1.ActerCreateNestedManyWithoutActerTypeInput)
], ActerTypeCreateInput.prototype, "Acter", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerTypeRuleCreateNestedManyWithoutSubjectInput_1.ActerTypeRuleCreateNestedManyWithoutSubjectInput, {
        nullable: true
    }),
    __metadata("design:type", ActerTypeRuleCreateNestedManyWithoutSubjectInput_1.ActerTypeRuleCreateNestedManyWithoutSubjectInput)
], ActerTypeCreateInput.prototype, "ActerTypeRules", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerTypeRuleCreateNestedManyWithoutObjectInput_1.ActerTypeRuleCreateNestedManyWithoutObjectInput, {
        nullable: true
    }),
    __metadata("design:type", ActerTypeRuleCreateNestedManyWithoutObjectInput_1.ActerTypeRuleCreateNestedManyWithoutObjectInput)
], ActerTypeCreateInput.prototype, "RulesOnActerType", void 0);
ActerTypeCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerTypeCreateInput);
exports.ActerTypeCreateInput = ActerTypeCreateInput;
