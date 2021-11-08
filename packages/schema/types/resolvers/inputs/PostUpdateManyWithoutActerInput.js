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
exports.PostUpdateManyWithoutActerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PostCreateManyActerInputEnvelope_1 = require("../inputs/PostCreateManyActerInputEnvelope");
const PostCreateOrConnectWithoutActerInput_1 = require("../inputs/PostCreateOrConnectWithoutActerInput");
const PostCreateWithoutActerInput_1 = require("../inputs/PostCreateWithoutActerInput");
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyWithWhereWithoutActerInput_1 = require("../inputs/PostUpdateManyWithWhereWithoutActerInput");
const PostUpdateWithWhereUniqueWithoutActerInput_1 = require("../inputs/PostUpdateWithWhereUniqueWithoutActerInput");
const PostUpsertWithWhereUniqueWithoutActerInput_1 = require("../inputs/PostUpsertWithWhereUniqueWithoutActerInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateManyWithoutActerInput = class PostUpdateManyWithoutActerInput {
};
__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutActerInput_1.PostCreateWithoutActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutActerInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutActerInput_1.PostCreateOrConnectWithoutActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutActerInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutActerInput_1.PostUpsertWithWhereUniqueWithoutActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutActerInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateManyActerInputEnvelope_1.PostCreateManyActerInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", PostCreateManyActerInputEnvelope_1.PostCreateManyActerInputEnvelope)
], PostUpdateManyWithoutActerInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutActerInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutActerInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutActerInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutActerInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutActerInput_1.PostUpdateWithWhereUniqueWithoutActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutActerInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutActerInput_1.PostUpdateManyWithWhereWithoutActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutActerInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostScalarWhereInput_1.PostScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PostUpdateManyWithoutActerInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutActerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], PostUpdateManyWithoutActerInput);
exports.PostUpdateManyWithoutActerInput = PostUpdateManyWithoutActerInput;
