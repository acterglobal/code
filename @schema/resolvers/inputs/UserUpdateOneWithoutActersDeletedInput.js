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
exports.UserUpdateOneWithoutActersDeletedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserCreateOrConnectWithoutActersDeletedInput_1 = require("../inputs/UserCreateOrConnectWithoutActersDeletedInput");
const UserCreateWithoutActersDeletedInput_1 = require("../inputs/UserCreateWithoutActersDeletedInput");
const UserUpdateWithoutActersDeletedInput_1 = require("../inputs/UserUpdateWithoutActersDeletedInput");
const UserUpsertWithoutActersDeletedInput_1 = require("../inputs/UserUpsertWithoutActersDeletedInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutActersDeletedInput = class UserUpdateOneWithoutActersDeletedInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutActersDeletedInput_1.UserCreateWithoutActersDeletedInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateWithoutActersDeletedInput_1.UserCreateWithoutActersDeletedInput)
], UserUpdateOneWithoutActersDeletedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutActersDeletedInput_1.UserCreateOrConnectWithoutActersDeletedInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateOrConnectWithoutActersDeletedInput_1.UserCreateOrConnectWithoutActersDeletedInput)
], UserUpdateOneWithoutActersDeletedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutActersDeletedInput_1.UserUpsertWithoutActersDeletedInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpsertWithoutActersDeletedInput_1.UserUpsertWithoutActersDeletedInput)
], UserUpdateOneWithoutActersDeletedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutActersDeletedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserUpdateOneWithoutActersDeletedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserUpdateOneWithoutActersDeletedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutActersDeletedInput_1.UserUpdateWithoutActersDeletedInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateWithoutActersDeletedInput_1.UserUpdateWithoutActersDeletedInput)
], UserUpdateOneWithoutActersDeletedInput.prototype, "update", void 0);
UserUpdateOneWithoutActersDeletedInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpdateOneWithoutActersDeletedInput);
exports.UserUpdateOneWithoutActersDeletedInput = UserUpdateOneWithoutActersDeletedInput;