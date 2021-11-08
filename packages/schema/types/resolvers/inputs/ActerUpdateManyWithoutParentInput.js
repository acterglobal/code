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
exports.ActerUpdateManyWithoutParentInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerCreateManyParentInputEnvelope_1 = require("../inputs/ActerCreateManyParentInputEnvelope");
const ActerCreateOrConnectWithoutParentInput_1 = require("../inputs/ActerCreateOrConnectWithoutParentInput");
const ActerCreateWithoutParentInput_1 = require("../inputs/ActerCreateWithoutParentInput");
const ActerScalarWhereInput_1 = require("../inputs/ActerScalarWhereInput");
const ActerUpdateManyWithWhereWithoutParentInput_1 = require("../inputs/ActerUpdateManyWithWhereWithoutParentInput");
const ActerUpdateWithWhereUniqueWithoutParentInput_1 = require("../inputs/ActerUpdateWithWhereUniqueWithoutParentInput");
const ActerUpsertWithWhereUniqueWithoutParentInput_1 = require("../inputs/ActerUpsertWithWhereUniqueWithoutParentInput");
const ActerWhereUniqueInput_1 = require("../inputs/ActerWhereUniqueInput");
let ActerUpdateManyWithoutParentInput = class ActerUpdateManyWithoutParentInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActerCreateWithoutParentInput_1.ActerCreateWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutParentInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerCreateOrConnectWithoutParentInput_1.ActerCreateOrConnectWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutParentInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerUpsertWithWhereUniqueWithoutParentInput_1.ActerUpsertWithWhereUniqueWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutParentInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateManyParentInputEnvelope_1.ActerCreateManyParentInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateManyParentInputEnvelope_1.ActerCreateManyParentInputEnvelope)
], ActerUpdateManyWithoutParentInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereUniqueInput_1.ActerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutParentInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereUniqueInput_1.ActerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutParentInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereUniqueInput_1.ActerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutParentInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerWhereUniqueInput_1.ActerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutParentInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerUpdateWithWhereUniqueWithoutParentInput_1.ActerUpdateWithWhereUniqueWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutParentInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerUpdateManyWithWhereWithoutParentInput_1.ActerUpdateManyWithWhereWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutParentInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActerScalarWhereInput_1.ActerScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActerUpdateManyWithoutParentInput.prototype, "deleteMany", void 0);
ActerUpdateManyWithoutParentInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerUpdateManyWithoutParentInput);
exports.ActerUpdateManyWithoutParentInput = ActerUpdateManyWithoutParentInput;
