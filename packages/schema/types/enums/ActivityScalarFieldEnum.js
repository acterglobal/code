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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityScalarFieldEnum = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var ActivityScalarFieldEnum;
(function (ActivityScalarFieldEnum) {
    ActivityScalarFieldEnum["id"] = "id";
    ActivityScalarFieldEnum["startAt"] = "startAt";
    ActivityScalarFieldEnum["endAt"] = "endAt";
    ActivityScalarFieldEnum["isOnline"] = "isOnline";
    ActivityScalarFieldEnum["isAllDay"] = "isAllDay";
    ActivityScalarFieldEnum["activityTypeId"] = "activityTypeId";
    ActivityScalarFieldEnum["createdByUserId"] = "createdByUserId";
    ActivityScalarFieldEnum["createdAt"] = "createdAt";
    ActivityScalarFieldEnum["updatedAt"] = "updatedAt";
    ActivityScalarFieldEnum["acterId"] = "acterId";
    ActivityScalarFieldEnum["organiserId"] = "organiserId";
})(ActivityScalarFieldEnum = exports.ActivityScalarFieldEnum || (exports.ActivityScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ActivityScalarFieldEnum, {
    name: "ActivityScalarFieldEnum",
    description: undefined,
});
