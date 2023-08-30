"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../../../pessoas/models/config/Database");
const User_1 = __importDefault(require("../entities/User"));
const UserRepositorie = Database_1.AppDataSource.getRepository(User_1.default);
exports.default = UserRepositorie;
