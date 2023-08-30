"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Pessoa_1 = __importDefault(require("../entities/Pessoa"));
const User_1 = __importDefault(require("../entities/User"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "alumnus",
    synchronize: true,
    logging: true,
    entities: [User_1.default, Pessoa_1.default],
    subscribers: [],
    migrations: []
});
