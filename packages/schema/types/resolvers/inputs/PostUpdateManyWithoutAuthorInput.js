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
exports.PostUpdateManyWithoutAuthorInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PostCreateManyAuthorInputEnvelope_1 = require("../inputs/PostCreateManyAuthorInputEnvelope");
const PostCreateOrConnectWithoutAuthorInput_1 = require("../inputs/PostCreateOrConnectWithoutAuthorInput");
const PostCreateWithoutAuthorInput_1 = require("../inputs/PostCreateWithoutAuthorInput");
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/PostUpdateManyWithWhereWithoutAuthorInput");
const PostUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/PostUpdateWithWhereUniqueWithoutAuthorInput");
const PostUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/PostUpsertWithWhereUniqueWithoutAuthorInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateManyWithoutAuthorInput = class PostUpdateManyWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutAuthorInput_1.PostCreateWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutAuthorInput_1.PostCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutAuthorInput_1.PostUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateManyAuthorInputEnvelope_1.PostCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", PostCreateManyAuthorInputEnvelope_1.PostCreateManyAuthorInputEnvelope)
], PostUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutAuthorInput_1.PostUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutAuthorInput_1.PostUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostScalarWhereInput_1.PostScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], PostUpdateManyWithoutAuthorInput);
exports.PostUpdateManyWithoutAuthorInput = PostUpdateManyWithoutAuthorInput;
