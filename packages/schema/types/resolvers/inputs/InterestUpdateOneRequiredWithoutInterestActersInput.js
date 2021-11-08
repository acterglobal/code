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
exports.InterestUpdateOneRequiredWithoutInterestActersInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const InterestCreateOrConnectWithoutInterestActersInput_1 = require("../inputs/InterestCreateOrConnectWithoutInterestActersInput");
const InterestCreateWithoutInterestActersInput_1 = require("../inputs/InterestCreateWithoutInterestActersInput");
const InterestUpdateWithoutInterestActersInput_1 = require("../inputs/InterestUpdateWithoutInterestActersInput");
const InterestUpsertWithoutInterestActersInput_1 = require("../inputs/InterestUpsertWithoutInterestActersInput");
const InterestWhereUniqueInput_1 = require("../inputs/InterestWhereUniqueInput");
let InterestUpdateOneRequiredWithoutInterestActersInput = class InterestUpdateOneRequiredWithoutInterestActersInput {
};
__decorate([
    TypeGraphQL.Field(_type => InterestCreateWithoutInterestActersInput_1.InterestCreateWithoutInterestActersInput, {
        nullable: true
    }),
    __metadata("design:type", InterestCreateWithoutInterestActersInput_1.InterestCreateWithoutInterestActersInput)
], InterestUpdateOneRequiredWithoutInterestActersInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestCreateOrConnectWithoutInterestActersInput_1.InterestCreateOrConnectWithoutInterestActersInput, {
        nullable: true
    }),
    __metadata("design:type", InterestCreateOrConnectWithoutInterestActersInput_1.InterestCreateOrConnectWithoutInterestActersInput)
], InterestUpdateOneRequiredWithoutInterestActersInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestUpsertWithoutInterestActersInput_1.InterestUpsertWithoutInterestActersInput, {
        nullable: true
    }),
    __metadata("design:type", InterestUpsertWithoutInterestActersInput_1.InterestUpsertWithoutInterestActersInput)
], InterestUpdateOneRequiredWithoutInterestActersInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestWhereUniqueInput_1.InterestWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", InterestWhereUniqueInput_1.InterestWhereUniqueInput)
], InterestUpdateOneRequiredWithoutInterestActersInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => InterestUpdateWithoutInterestActersInput_1.InterestUpdateWithoutInterestActersInput, {
        nullable: true
    }),
    __metadata("design:type", InterestUpdateWithoutInterestActersInput_1.InterestUpdateWithoutInterestActersInput)
], InterestUpdateOneRequiredWithoutInterestActersInput.prototype, "update", void 0);
InterestUpdateOneRequiredWithoutInterestActersInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], InterestUpdateOneRequiredWithoutInterestActersInput);
exports.InterestUpdateOneRequiredWithoutInterestActersInput = InterestUpdateOneRequiredWithoutInterestActersInput;
