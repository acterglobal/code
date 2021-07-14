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
exports.ActerUpdateManyWithoutCreatedByUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerCreateManyCreatedByUserInputEnvelope_1 = require("../inputs/ActerCreateManyCreatedByUserInputEnvelope");
const ActerCreateOrConnectWithoutCreatedByUserInput_1 = require("../inputs/ActerCreateOrConnectWithoutCreatedByUserInput");
const ActerCreateWithoutCreatedByUserInput_1 = require("../inputs/ActerCreateWithoutCreatedByUserInput");
const ActerScalarWhereInput_1 = require("../inputs/ActerScalarWhereInput");
const ActerUpdateManyWithWhereWithoutCreatedByUserInput_1 = require("../inputs/ActerUpdateManyWithWhereWithoutCreatedByUserInput");
const ActerUpdateWithWhereUniqueWithoutCreatedByUserInput_1 = require("../inputs/ActerUpdateWithWhereUniqueWithoutCreatedByUserInput");
const ActerUpsertWithWhereUniqueWithoutCreatedByUserInput_1 = require("../inputs/ActerUpsertWithWhereUniqueWithoutCreatedByUserInput");
const ActerWhereUniqueInput_1 = require("../inputs/ActerWhereUniqueInput");
let ActerUpdateManyWithoutCreatedByUserInput = class ActerUpdateManyWithoutCreatedByUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActerCreateWithoutCreatedByUserInput_1.ActerCreateWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutCreatedByUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerCreateOrConnectWithoutCreatedByUserInput_1.ActerCreateOrConnectWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutCreatedByUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerUpsertWithWhereUniqueWithoutCreatedByUserInput_1.ActerUpsertWithWhereUniqueWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutCreatedByUserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateManyCreatedByUserInputEnvelope_1.ActerCreateManyCreatedByUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateManyCreatedByUserInputEnvelope_1.ActerCreateManyCreatedByUserInputEnvelope)
], ActerUpdateManyWithoutCreatedByUserInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereUniqueInput_1.ActerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutCreatedByUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereUniqueInput_1.ActerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutCreatedByUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereUniqueInput_1.ActerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutCreatedByUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereUniqueInput_1.ActerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutCreatedByUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerUpdateWithWhereUniqueWithoutCreatedByUserInput_1.ActerUpdateWithWhereUniqueWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutCreatedByUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerUpdateManyWithWhereWithoutCreatedByUserInput_1.ActerUpdateManyWithWhereWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutCreatedByUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerScalarWhereInput_1.ActerScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutCreatedByUserInput.prototype, "deleteMany", void 0);
ActerUpdateManyWithoutCreatedByUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerUpdateManyWithoutCreatedByUserInput);
exports.ActerUpdateManyWithoutCreatedByUserInput = ActerUpdateManyWithoutCreatedByUserInput;
