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
exports.InviteUpdateManyWithoutOnActerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const InviteCreateManyOnActerInputEnvelope_1 = require("../inputs/InviteCreateManyOnActerInputEnvelope");
const InviteCreateOrConnectWithoutOnActerInput_1 = require("../inputs/InviteCreateOrConnectWithoutOnActerInput");
const InviteCreateWithoutOnActerInput_1 = require("../inputs/InviteCreateWithoutOnActerInput");
const InviteScalarWhereInput_1 = require("../inputs/InviteScalarWhereInput");
const InviteUpdateManyWithWhereWithoutOnActerInput_1 = require("../inputs/InviteUpdateManyWithWhereWithoutOnActerInput");
const InviteUpdateWithWhereUniqueWithoutOnActerInput_1 = require("../inputs/InviteUpdateWithWhereUniqueWithoutOnActerInput");
const InviteUpsertWithWhereUniqueWithoutOnActerInput_1 = require("../inputs/InviteUpsertWithWhereUniqueWithoutOnActerInput");
const InviteWhereUniqueInput_1 = require("../inputs/InviteWhereUniqueInput");
let InviteUpdateManyWithoutOnActerInput = class InviteUpdateManyWithoutOnActerInput {
};
__decorate([
    TypeGraphQL.Field(_type => [InviteCreateWithoutOnActerInput_1.InviteCreateWithoutOnActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutOnActerInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteCreateOrConnectWithoutOnActerInput_1.InviteCreateOrConnectWithoutOnActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutOnActerInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteUpsertWithWhereUniqueWithoutOnActerInput_1.InviteUpsertWithWhereUniqueWithoutOnActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutOnActerInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => InviteCreateManyOnActerInputEnvelope_1.InviteCreateManyOnActerInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", InviteCreateManyOnActerInputEnvelope_1.InviteCreateManyOnActerInputEnvelope)
], InviteUpdateManyWithoutOnActerInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteWhereUniqueInput_1.InviteWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutOnActerInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteWhereUniqueInput_1.InviteWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutOnActerInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteWhereUniqueInput_1.InviteWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutOnActerInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteWhereUniqueInput_1.InviteWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutOnActerInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteUpdateWithWhereUniqueWithoutOnActerInput_1.InviteUpdateWithWhereUniqueWithoutOnActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutOnActerInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteUpdateManyWithWhereWithoutOnActerInput_1.InviteUpdateManyWithWhereWithoutOnActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutOnActerInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InviteScalarWhereInput_1.InviteScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InviteUpdateManyWithoutOnActerInput.prototype, "deleteMany", void 0);
InviteUpdateManyWithoutOnActerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], InviteUpdateManyWithoutOnActerInput);
exports.InviteUpdateManyWithoutOnActerInput = InviteUpdateManyWithoutOnActerInput;
