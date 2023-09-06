"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = require("../../../DataBase");
const User_1 = __importDefault(require("../../User"));
const UserRepository = DataBase_1.AppDataSource.getRepository(User_1.default);
exports.default = UserRepository;
