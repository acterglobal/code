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
exports.ActerUpdateManyWithoutDeletedByUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerCreateManyDeletedByUserInputEnvelope_1 = require("../inputs/ActerCreateManyDeletedByUserInputEnvelope");
const ActerCreateOrConnectWithoutDeletedByUserInput_1 = require("../inputs/ActerCreateOrConnectWithoutDeletedByUserInput");
const ActerCreateWithoutDeletedByUserInput_1 = require("../inputs/ActerCreateWithoutDeletedByUserInput");
const ActerScalarWhereInput_1 = require("../inputs/ActerScalarWhereInput");
const ActerUpdateManyWithWhereWithoutDeletedByUserInput_1 = require("../inputs/ActerUpdateManyWithWhereWithoutDeletedByUserInput");
const ActerUpdateWithWhereUniqueWithoutDeletedByUserInput_1 = require("../inputs/ActerUpdateWithWhereUniqueWithoutDeletedByUserInput");
const ActerUpsertWithWhereUniqueWithoutDeletedByUserInput_1 = require("../inputs/ActerUpsertWithWhereUniqueWithoutDeletedByUserInput");
const ActerWhereUniqueInput_1 = require("../inputs/ActerWhereUniqueInput");
let ActerUpdateManyWithoutDeletedByUserInput = class ActerUpdateManyWithoutDeletedByUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActerCreateWithoutDeletedByUserInput_1.ActerCreateWithoutDeletedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutDeletedByUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerCreateOrConnectWithoutDeletedByUserInput_1.ActerCreateOrConnectWithoutDeletedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutDeletedByUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerUpsertWithWhereUniqueWithoutDeletedByUserInput_1.ActerUpsertWithWhereUniqueWithoutDeletedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutDeletedByUserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateManyDeletedByUserInputEnvelope_1.ActerCreateManyDeletedByUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateManyDeletedByUserInputEnvelope_1.ActerCreateManyDeletedByUserInputEnvelope)
], ActerUpdateManyWithoutDeletedByUserInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereUniqueInput_1.ActerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutDeletedByUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereUniqueInput_1.ActerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutDeletedByUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereUniqueInput_1.ActerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutDeletedByUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereUniqueInput_1.ActerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutDeletedByUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerUpdateWithWhereUniqueWithoutDeletedByUserInput_1.ActerUpdateWithWhereUniqueWithoutDeletedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutDeletedByUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerUpdateManyWithWhereWithoutDeletedByUserInput_1.ActerUpdateManyWithWhereWithoutDeletedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutDeletedByUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerScalarWhereInput_1.ActerScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutDeletedByUserInput.prototype, "deleteMany", void 0);
ActerUpdateManyWithoutDeletedByUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerUpdateManyWithoutDeletedByUserInput);
exports.ActerUpdateManyWithoutDeletedByUserInput = ActerUpdateManyWithoutDeletedByUserInput;
