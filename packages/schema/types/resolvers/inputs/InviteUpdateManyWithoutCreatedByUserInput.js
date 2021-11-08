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
exports.InviteUpdateManyWithoutCreatedByUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const InviteCreateManyCreatedByUserInputEnvelope_1 = require("../inputs/InviteCreateManyCreatedByUserInputEnvelope");
const InviteCreateOrConnectWithoutCreatedByUserInput_1 = require("../inputs/InviteCreateOrConnectWithoutCreatedByUserInput");
const InviteCreateWithoutCreatedByUserInput_1 = require("../inputs/InviteCreateWithoutCreatedByUserInput");
const InviteScalarWhereInput_1 = require("../inputs/InviteScalarWhereInput");
const InviteUpdateManyWithWhereWithoutCreatedByUserInput_1 = require("../inputs/InviteUpdateManyWithWhereWithoutCreatedByUserInput");
const InviteUpdateWithWhereUniqueWithoutCreatedByUserInput_1 = require("../inputs/InviteUpdateWithWhereUniqueWithoutCreatedByUserInput");
const InviteUpsertWithWhereUniqueWithoutCreatedByUserInput_1 = require("../inputs/InviteUpsertWithWhereUniqueWithoutCreatedByUserInput");
const InviteWhereUniqueInput_1 = require("../inputs/InviteWhereUniqueInput");
let InviteUpdateManyWithoutCreatedByUserInput = class InviteUpdateManyWithoutCreatedByUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [InviteCreateWithoutCreatedByUserInput_1.InviteCreateWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutCreatedByUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteCreateOrConnectWithoutCreatedByUserInput_1.InviteCreateOrConnectWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutCreatedByUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteUpsertWithWhereUniqueWithoutCreatedByUserInput_1.InviteUpsertWithWhereUniqueWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutCreatedByUserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => InviteCreateManyCreatedByUserInputEnvelope_1.InviteCreateManyCreatedByUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", InviteCreateManyCreatedByUserInputEnvelope_1.InviteCreateManyCreatedByUserInputEnvelope)
], InviteUpdateManyWithoutCreatedByUserInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteWhereUniqueInput_1.InviteWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutCreatedByUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteWhereUniqueInput_1.InviteWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutCreatedByUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteWhereUniqueInput_1.InviteWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutCreatedByUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteWhereUniqueInput_1.InviteWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutCreatedByUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteUpdateWithWhereUniqueWithoutCreatedByUserInput_1.InviteUpdateWithWhereUniqueWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutCreatedByUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteUpdateManyWithWhereWithoutCreatedByUserInput_1.InviteUpdateManyWithWhereWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutCreatedByUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteScalarWhereInput_1.InviteScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutCreatedByUserInput.prototype, "deleteMany", void 0);
InviteUpdateManyWithoutCreatedByUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], InviteUpdateManyWithoutCreatedByUserInput);
exports.InviteUpdateManyWithoutCreatedByUserInput = InviteUpdateManyWithoutCreatedByUserInput;
