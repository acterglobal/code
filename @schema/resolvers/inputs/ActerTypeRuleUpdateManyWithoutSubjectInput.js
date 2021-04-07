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
exports.ActerTypeRuleUpdateManyWithoutSubjectInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerTypeRuleCreateOrConnectWithoutSubjectInput_1 = require("../inputs/ActerTypeRuleCreateOrConnectWithoutSubjectInput");
const ActerTypeRuleCreateWithoutSubjectInput_1 = require("../inputs/ActerTypeRuleCreateWithoutSubjectInput");
const ActerTypeRuleScalarWhereInput_1 = require("../inputs/ActerTypeRuleScalarWhereInput");
const ActerTypeRuleUpdateManyWithWhereWithoutSubjectInput_1 = require("../inputs/ActerTypeRuleUpdateManyWithWhereWithoutSubjectInput");
const ActerTypeRuleUpdateWithWhereUniqueWithoutSubjectInput_1 = require("../inputs/ActerTypeRuleUpdateWithWhereUniqueWithoutSubjectInput");
const ActerTypeRuleUpsertWithWhereUniqueWithoutSubjectInput_1 = require("../inputs/ActerTypeRuleUpsertWithWhereUniqueWithoutSubjectInput");
const ActerTypeRuleWhereUniqueInput_1 = require("../inputs/ActerTypeRuleWhereUniqueInput");
let ActerTypeRuleUpdateManyWithoutSubjectInput = class ActerTypeRuleUpdateManyWithoutSubjectInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleCreateWithoutSubjectInput_1.ActerTypeRuleCreateWithoutSubjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutSubjectInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleCreateOrConnectWithoutSubjectInput_1.ActerTypeRuleCreateOrConnectWithoutSubjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutSubjectInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleUpsertWithWhereUniqueWithoutSubjectInput_1.ActerTypeRuleUpsertWithWhereUniqueWithoutSubjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutSubjectInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleWhereUniqueInput_1.ActerTypeRuleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutSubjectInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleWhereUniqueInput_1.ActerTypeRuleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutSubjectInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleWhereUniqueInput_1.ActerTypeRuleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutSubjectInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleWhereUniqueInput_1.ActerTypeRuleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutSubjectInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleUpdateWithWhereUniqueWithoutSubjectInput_1.ActerTypeRuleUpdateWithWhereUniqueWithoutSubjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutSubjectInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleUpdateManyWithWhereWithoutSubjectInput_1.ActerTypeRuleUpdateManyWithWhereWithoutSubjectInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutSubjectInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerTypeRuleScalarWhereInput_1.ActerTypeRuleScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerTypeRuleUpdateManyWithoutSubjectInput.prototype, "deleteMany", void 0);
ActerTypeRuleUpdateManyWithoutSubjectInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerTypeRuleUpdateManyWithoutSubjectInput);
exports.ActerTypeRuleUpdateManyWithoutSubjectInput = ActerTypeRuleUpdateManyWithoutSubjectInput;
