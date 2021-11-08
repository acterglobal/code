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
exports.PostUpdateManyWithoutParentInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PostCreateManyParentInputEnvelope_1 = require("../inputs/PostCreateManyParentInputEnvelope");
const PostCreateOrConnectWithoutParentInput_1 = require("../inputs/PostCreateOrConnectWithoutParentInput");
const PostCreateWithoutParentInput_1 = require("../inputs/PostCreateWithoutParentInput");
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyWithWhereWithoutParentInput_1 = require("../inputs/PostUpdateManyWithWhereWithoutParentInput");
const PostUpdateWithWhereUniqueWithoutParentInput_1 = require("../inputs/PostUpdateWithWhereUniqueWithoutParentInput");
const PostUpsertWithWhereUniqueWithoutParentInput_1 = require("../inputs/PostUpsertWithWhereUniqueWithoutParentInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateManyWithoutParentInput = class PostUpdateManyWithoutParentInput {
};
__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutParentInput_1.PostCreateWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutParentInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutParentInput_1.PostCreateOrConnectWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutParentInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutParentInput_1.PostUpsertWithWhereUniqueWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutParentInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateManyParentInputEnvelope_1.PostCreateManyParentInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", PostCreateManyParentInputEnvelope_1.PostCreateManyParentInputEnvelope)
], PostUpdateManyWithoutParentInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutParentInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutParentInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutParentInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutParentInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutParentInput_1.PostUpdateWithWhereUniqueWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutParentInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutParentInput_1.PostUpdateManyWithWhereWithoutParentInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutParentInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostScalarWhereInput_1.PostScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutParentInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutParentInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], PostUpdateManyWithoutParentInput);
exports.PostUpdateManyWithoutParentInput = PostUpdateManyWithoutParentInput;
