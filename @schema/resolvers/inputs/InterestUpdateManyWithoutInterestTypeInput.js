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
exports.InterestUpdateManyWithoutInterestTypeInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const InterestCreateOrConnectWithoutInterestTypeInput_1 = require("../inputs/InterestCreateOrConnectWithoutInterestTypeInput");
const InterestCreateWithoutInterestTypeInput_1 = require("../inputs/InterestCreateWithoutInterestTypeInput");
const InterestScalarWhereInput_1 = require("../inputs/InterestScalarWhereInput");
const InterestUpdateManyWithWhereWithoutInterestTypeInput_1 = require("../inputs/InterestUpdateManyWithWhereWithoutInterestTypeInput");
const InterestUpdateWithWhereUniqueWithoutInterestTypeInput_1 = require("../inputs/InterestUpdateWithWhereUniqueWithoutInterestTypeInput");
const InterestUpsertWithWhereUniqueWithoutInterestTypeInput_1 = require("../inputs/InterestUpsertWithWhereUniqueWithoutInterestTypeInput");
const InterestWhereUniqueInput_1 = require("../inputs/InterestWhereUniqueInput");
let InterestUpdateManyWithoutInterestTypeInput = class InterestUpdateManyWithoutInterestTypeInput {
};
__decorate([
    TypeGraphQL.Field(_type => [InterestCreateWithoutInterestTypeInput_1.InterestCreateWithoutInterestTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestUpdateManyWithoutInterestTypeInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestCreateOrConnectWithoutInterestTypeInput_1.InterestCreateOrConnectWithoutInterestTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestUpdateManyWithoutInterestTypeInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestUpsertWithWhereUniqueWithoutInterestTypeInput_1.InterestUpsertWithWhereUniqueWithoutInterestTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestUpdateManyWithoutInterestTypeInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestWhereUniqueInput_1.InterestWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestUpdateManyWithoutInterestTypeInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestWhereUniqueInput_1.InterestWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestUpdateManyWithoutInterestTypeInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestWhereUniqueInput_1.InterestWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestUpdateManyWithoutInterestTypeInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestWhereUniqueInput_1.InterestWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestUpdateManyWithoutInterestTypeInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestUpdateWithWhereUniqueWithoutInterestTypeInput_1.InterestUpdateWithWhereUniqueWithoutInterestTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestUpdateManyWithoutInterestTypeInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestUpdateManyWithWhereWithoutInterestTypeInput_1.InterestUpdateManyWithWhereWithoutInterestTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestUpdateManyWithoutInterestTypeInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [InterestScalarWhereInput_1.InterestScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], InterestUpdateManyWithoutInterestTypeInput.prototype, "deleteMany", void 0);
InterestUpdateManyWithoutInterestTypeInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], InterestUpdateManyWithoutInterestTypeInput);
exports.InterestUpdateManyWithoutInterestTypeInput = InterestUpdateManyWithoutInterestTypeInput;
