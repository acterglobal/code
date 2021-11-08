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
exports.NotificationScalarFieldEnum = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var NotificationScalarFieldEnum;
(function (NotificationScalarFieldEnum) {
    NotificationScalarFieldEnum["id"] = "id";
    NotificationScalarFieldEnum["type"] = "type";
    NotificationScalarFieldEnum["url"] = "url";
    NotificationScalarFieldEnum["createdAt"] = "createdAt";
    NotificationScalarFieldEnum["updatedAt"] = "updatedAt";
    NotificationScalarFieldEnum["sendTo"] = "sendTo";
    NotificationScalarFieldEnum["sentAt"] = "sentAt";
    NotificationScalarFieldEnum["viewedAt"] = "viewedAt";
    NotificationScalarFieldEnum["toActerId"] = "toActerId";
    NotificationScalarFieldEnum["onActerId"] = "onActerId";
    NotificationScalarFieldEnum["postId"] = "postId";
    NotificationScalarFieldEnum["activityId"] = "activityId";
})(NotificationScalarFieldEnum = exports.NotificationScalarFieldEnum || (exports.NotificationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(NotificationScalarFieldEnum, {
    name: "NotificationScalarFieldEnum",
    description: undefined,
});
