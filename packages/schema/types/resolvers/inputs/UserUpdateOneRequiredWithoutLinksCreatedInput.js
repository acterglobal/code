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
exports.UserUpdateOneRequiredWithoutLinksCreatedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserCreateOrConnectWithoutLinksCreatedInput_1 = require("../inputs/UserCreateOrConnectWithoutLinksCreatedInput");
const UserCreateWithoutLinksCreatedInput_1 = require("../inputs/UserCreateWithoutLinksCreatedInput");
const UserUpdateWithoutLinksCreatedInput_1 = require("../inputs/UserUpdateWithoutLinksCreatedInput");
const UserUpsertWithoutLinksCreatedInput_1 = require("../inputs/UserUpsertWithoutLinksCreatedInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutLinksCreatedInput = class UserUpdateOneRequiredWithoutLinksCreatedInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLinksCreatedInput_1.UserCreateWithoutLinksCreatedInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateWithoutLinksCreatedInput_1.UserCreateWithoutLinksCreatedInput)
], UserUpdateOneRequiredWithoutLinksCreatedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLinksCreatedInput_1.UserCreateOrConnectWithoutLinksCreatedInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateOrConnectWithoutLinksCreatedInput_1.UserCreateOrConnectWithoutLinksCreatedInput)
], UserUpdateOneRequiredWithoutLinksCreatedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutLinksCreatedInput_1.UserUpsertWithoutLinksCreatedInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpsertWithoutLinksCreatedInput_1.UserUpsertWithoutLinksCreatedInput)
], UserUpdateOneRequiredWithoutLinksCreatedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutLinksCreatedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutLinksCreatedInput_1.UserUpdateWithoutLinksCreatedInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateWithoutLinksCreatedInput_1.UserUpdateWithoutLinksCreatedInput)
], UserUpdateOneRequiredWithoutLinksCreatedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutLinksCreatedInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutLinksCreatedInput);
exports.UserUpdateOneRequiredWithoutLinksCreatedInput = UserUpdateOneRequiredWithoutLinksCreatedInput;
