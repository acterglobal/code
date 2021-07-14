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
exports.ActerInterestUpdateManyWithoutCreatedByUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerInterestCreateManyCreatedByUserInputEnvelope_1 = require("../inputs/ActerInterestCreateManyCreatedByUserInputEnvelope");
const ActerInterestCreateOrConnectWithoutCreatedByUserInput_1 = require("../inputs/ActerInterestCreateOrConnectWithoutCreatedByUserInput");
const ActerInterestCreateWithoutCreatedByUserInput_1 = require("../inputs/ActerInterestCreateWithoutCreatedByUserInput");
const ActerInterestScalarWhereInput_1 = require("../inputs/ActerInterestScalarWhereInput");
const ActerInterestUpdateManyWithWhereWithoutCreatedByUserInput_1 = require("../inputs/ActerInterestUpdateManyWithWhereWithoutCreatedByUserInput");
const ActerInterestUpdateWithWhereUniqueWithoutCreatedByUserInput_1 = require("../inputs/ActerInterestUpdateWithWhereUniqueWithoutCreatedByUserInput");
const ActerInterestUpsertWithWhereUniqueWithoutCreatedByUserInput_1 = require("../inputs/ActerInterestUpsertWithWhereUniqueWithoutCreatedByUserInput");
const ActerInterestWhereUniqueInput_1 = require("../inputs/ActerInterestWhereUniqueInput");
let ActerInterestUpdateManyWithoutCreatedByUserInput = class ActerInterestUpdateManyWithoutCreatedByUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActerInterestCreateWithoutCreatedByUserInput_1.ActerInterestCreateWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerInterestUpdateManyWithoutCreatedByUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerInterestCreateOrConnectWithoutCreatedByUserInput_1.ActerInterestCreateOrConnectWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerInterestUpdateManyWithoutCreatedByUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerInterestUpsertWithWhereUniqueWithoutCreatedByUserInput_1.ActerInterestUpsertWithWhereUniqueWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerInterestUpdateManyWithoutCreatedByUserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerInterestCreateManyCreatedByUserInputEnvelope_1.ActerInterestCreateManyCreatedByUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", ActerInterestCreateManyCreatedByUserInputEnvelope_1.ActerInterestCreateManyCreatedByUserInputEnvelope)
], ActerInterestUpdateManyWithoutCreatedByUserInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerInterestWhereUniqueInput_1.ActerInterestWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerInterestUpdateManyWithoutCreatedByUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerInterestWhereUniqueInput_1.ActerInterestWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerInterestUpdateManyWithoutCreatedByUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerInterestWhereUniqueInput_1.ActerInterestWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerInterestUpdateManyWithoutCreatedByUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerInterestWhereUniqueInput_1.ActerInterestWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerInterestUpdateManyWithoutCreatedByUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerInterestUpdateWithWhereUniqueWithoutCreatedByUserInput_1.ActerInterestUpdateWithWhereUniqueWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerInterestUpdateManyWithoutCreatedByUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerInterestUpdateManyWithWhereWithoutCreatedByUserInput_1.ActerInterestUpdateManyWithWhereWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerInterestUpdateManyWithoutCreatedByUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerInterestScalarWhereInput_1.ActerInterestScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerInterestUpdateManyWithoutCreatedByUserInput.prototype, "deleteMany", void 0);
ActerInterestUpdateManyWithoutCreatedByUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerInterestUpdateManyWithoutCreatedByUserInput);
exports.ActerInterestUpdateManyWithoutCreatedByUserInput = ActerInterestUpdateManyWithoutCreatedByUserInput;
