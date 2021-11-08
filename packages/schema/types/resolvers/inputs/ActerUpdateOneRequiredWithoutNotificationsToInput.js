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
exports.ActerUpdateOneRequiredWithoutNotificationsToInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerCreateOrConnectWithoutNotificationsToInput_1 = require("../inputs/ActerCreateOrConnectWithoutNotificationsToInput");
const ActerCreateWithoutNotificationsToInput_1 = require("../inputs/ActerCreateWithoutNotificationsToInput");
const ActerUpdateWithoutNotificationsToInput_1 = require("../inputs/ActerUpdateWithoutNotificationsToInput");
const ActerUpsertWithoutNotificationsToInput_1 = require("../inputs/ActerUpsertWithoutNotificationsToInput");
const ActerWhereUniqueInput_1 = require("../inputs/ActerWhereUniqueInput");
let ActerUpdateOneRequiredWithoutNotificationsToInput = class ActerUpdateOneRequiredWithoutNotificationsToInput {
};
__decorate([
    TypeGraphQL.Field(_type => ActerCreateWithoutNotificationsToInput_1.ActerCreateWithoutNotificationsToInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateWithoutNotificationsToInput_1.ActerCreateWithoutNotificationsToInput)
], ActerUpdateOneRequiredWithoutNotificationsToInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateOrConnectWithoutNotificationsToInput_1.ActerCreateOrConnectWithoutNotificationsToInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateOrConnectWithoutNotificationsToInput_1.ActerCreateOrConnectWithoutNotificationsToInput)
], ActerUpdateOneRequiredWithoutNotificationsToInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpsertWithoutNotificationsToInput_1.ActerUpsertWithoutNotificationsToInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpsertWithoutNotificationsToInput_1.ActerUpsertWithoutNotificationsToInput)
], ActerUpdateOneRequiredWithoutNotificationsToInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerWhereUniqueInput_1.ActerWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", ActerWhereUniqueInput_1.ActerWhereUniqueInput)
], ActerUpdateOneRequiredWithoutNotificationsToInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateWithoutNotificationsToInput_1.ActerUpdateWithoutNotificationsToInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateWithoutNotificationsToInput_1.ActerUpdateWithoutNotificationsToInput)
], ActerUpdateOneRequiredWithoutNotificationsToInput.prototype, "update", void 0);
ActerUpdateOneRequiredWithoutNotificationsToInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerUpdateOneRequiredWithoutNotificationsToInput);
exports.ActerUpdateOneRequiredWithoutNotificationsToInput = ActerUpdateOneRequiredWithoutNotificationsToInput;
