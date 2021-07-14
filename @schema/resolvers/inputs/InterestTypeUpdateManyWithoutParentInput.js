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
exports.InterestTypeUpdateManyWithoutParentInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const InterestTypeCreateManyParentInputEnvelope_1 = require("../inputs/InterestTypeCreateManyParentInputEnvelope");
const InterestTypeCreateOrConnectWithoutParentInput_1 = require("../inputs/InterestTypeCreateOrConnectWithoutParentInput");
const InterestTypeCreateWithoutParentInput_1 = require("../inputs/InterestTypeCreateWithoutParentInput");
const InterestTypeScalarWhereInput_1 = require("../inputs/InterestTypeScalarWhereInput");
const InterestTypeUpdateManyWithWhereWithoutParentInput_1 = require("../inputs/InterestTypeUpdateManyWithWhereWithoutParentInput");
const InterestTypeUpdateWithWhereUniqueWithoutParentInput_1 = require("../inputs/InterestTypeUpdateWithWhereUniqueWithoutParentInput");
const InterestTypeUpsertWithWhereUniqueWithoutParentInput_1 = require("../inputs/InterestTypeUpsertWithWhereUniqueWithoutParentInput");
const InterestTypeWhereUniqueInput_1 = require("../inputs/InterestTypeWhereUniqueInput");
let InterestTypeUpdateManyWithoutParentInput = class InterestTypeUpdateManyWithoutParentInput {
};
__decorate([
    TypeGraphQL.Field(_type => [InterestTypeCreateWithoutParentInput_1.InterestTypeCreateWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestTypeUpdateManyWithoutParentInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestTypeCreateOrConnectWithoutParentInput_1.InterestTypeCreateOrConnectWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestTypeUpdateManyWithoutParentInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestTypeUpsertWithWhereUniqueWithoutParentInput_1.InterestTypeUpsertWithWhereUniqueWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestTypeUpdateManyWithoutParentInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestTypeCreateManyParentInputEnvelope_1.InterestTypeCreateManyParentInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", InterestTypeCreateManyParentInputEnvelope_1.InterestTypeCreateManyParentInputEnvelope)
], InterestTypeUpdateManyWithoutParentInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestTypeWhereUniqueInput_1.InterestTypeWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestTypeUpdateManyWithoutParentInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestTypeWhereUniqueInput_1.InterestTypeWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestTypeUpdateManyWithoutParentInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestTypeWhereUniqueInput_1.InterestTypeWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestTypeUpdateManyWithoutParentInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestTypeWhereUniqueInput_1.InterestTypeWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestTypeUpdateManyWithoutParentInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestTypeUpdateWithWhereUniqueWithoutParentInput_1.InterestTypeUpdateWithWhereUniqueWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestTypeUpdateManyWithoutParentInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestTypeUpdateManyWithWhereWithoutParentInput_1.InterestTypeUpdateManyWithWhereWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestTypeUpdateManyWithoutParentInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestTypeScalarWhereInput_1.InterestTypeScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestTypeUpdateManyWithoutParentInput.prototype, "deleteMany", void 0);
InterestTypeUpdateManyWithoutParentInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], InterestTypeUpdateManyWithoutParentInput);
exports.InterestTypeUpdateManyWithoutParentInput = InterestTypeUpdateManyWithoutParentInput;
