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
exports.ActerTypeRuleUpdateManyWithoutObjectInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerTypeRuleCreateOrConnectWithoutObjectInput_1 = require("../inputs/ActerTypeRuleCreateOrConnectWithoutObjectInput");
const ActerTypeRuleCreateWithoutObjectInput_1 = require("../inputs/ActerTypeRuleCreateWithoutObjectInput");
const ActerTypeRuleScalarWhereInput_1 = require("../inputs/ActerTypeRuleScalarWhereInput");
const ActerTypeRuleUpdateManyWithWhereWithoutObjectInput_1 = require("../inputs/ActerTypeRuleUpdateManyWithWhereWithoutObjectInput");
const ActerTypeRuleUpdateWithWhereUniqueWithoutObjectInput_1 = require("../inputs/ActerTypeRuleUpdateWithWhereUniqueWithoutObjectInput");
const ActerTypeRuleUpsertWithWhereUniqueWithoutObjectInput_1 = require("../inputs/ActerTypeRuleUpsertWithWhereUniqueWithoutObjectInput");
const ActerTypeRuleWhereUniqueInput_1 = require("../inputs/ActerTypeRuleWhereUniqueInput");
let ActerTypeRuleUpdateManyWithoutObjectInput = class ActerTypeRuleUpdateManyWithoutObjectInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleCreateWithoutObjectInput_1.ActerTypeRuleCreateWithoutObjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutObjectInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleCreateOrConnectWithoutObjectInput_1.ActerTypeRuleCreateOrConnectWithoutObjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutObjectInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleUpsertWithWhereUniqueWithoutObjectInput_1.ActerTypeRuleUpsertWithWhereUniqueWithoutObjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutObjectInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleWhereUniqueInput_1.ActerTypeRuleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutObjectInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleWhereUniqueInput_1.ActerTypeRuleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutObjectInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleWhereUniqueInput_1.ActerTypeRuleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutObjectInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleWhereUniqueInput_1.ActerTypeRuleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutObjectInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleUpdateWithWhereUniqueWithoutObjectInput_1.ActerTypeRuleUpdateWithWhereUniqueWithoutObjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutObjectInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleUpdateManyWithWhereWithoutObjectInput_1.ActerTypeRuleUpdateManyWithWhereWithoutObjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutObjectInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleScalarWhereInput_1.ActerTypeRuleScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutObjectInput.prototype, "deleteMany", void 0);
ActerTypeRuleUpdateManyWithoutObjectInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerTypeRuleUpdateManyWithoutObjectInput);
exports.ActerTypeRuleUpdateManyWithoutObjectInput = ActerTypeRuleUpdateManyWithoutObjectInput;
