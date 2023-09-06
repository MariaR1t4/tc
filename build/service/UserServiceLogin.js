"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const jimp_1 = __importDefault(require("jimp"));
const sha256_1 = __importDefault(require("crypto-js/sha256"));
const hmac_sha512_1 = __importDefault(require("crypto-js/hmac-sha512"));
const enc_base64_1 = __importDefault(require("crypto-js/enc-base64"));
const jwt = __importStar(require("jsonwebtoken"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const User_1 = __importDefault(require("../models/entities/User"));
const logger_1 = __importDefault(require("../models/config/logger"));
const UserRepository_1 = __importDefault(require("../models/entities/dtos/repositories/UserRepository"));
const constants_1 = require("../auth/constants");
class UserServiceLogin {
    getUserFromData(name, email, password) {
        const newUser = new User_1.default();
        newUser.email = email;
        newUser.password = password;
        const hashDigest = (0, sha256_1.default)(password);
        logger_1.default.debug("HashAntes: ", hashDigest);
        const privateKey = "FIEC2023";
        const hmacDigest = enc_base64_1.default.stringify((0, hmac_sha512_1.default)(hashDigest, privateKey));
        logger_1.default.debug("HashDepos: ", hashDigest);
        newUser.password = hmacDigest;
        return newUser;
    }
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashDigest = (0, sha256_1.default)(password);
            logger_1.default.debug("HashAntes: ", hashDigest);
            const privateKey = "FIEC2023";
            const passwordHasehd = enc_base64_1.default.stringify((0, hmac_sha512_1.default)(hashDigest, privateKey));
            const foundUser = yield UserRepository_1.default.findOneBy({ email, password: passwordHasehd });
            if (foundUser) {
                const token = jwt.sign({ email: foundUser === null || foundUser === void 0 ? void 0 : foundUser.email, id: foundUser === null || foundUser === void 0 ? void 0 : foundUser.randomNumber }, constants_1.SECRET, { expiresIn: 300 });
                return token;
            }
            throw new Error("User not found");
        });
    }
    signUpUser(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = this.getUserFromData(name, email, password);
            yield UserRepository_1.default.save(newUser);
        });
    }
    signUpUsersInBatch(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = req.file;
            const users = [];
            if (file != null) {
                fs_1.default.createReadStream(file.path)
                    .pipe((0, csv_parser_1.default)())
                    .on('data', (data) => users.push(this.getUserFromData(data.randomNumber, data.email, data.password)))
                    .on('end', () => {
                    console.log(users);
                    UserRepository_1.default.insert(users);
                });
            }
        });
    }
    updateUserImage(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = req.file;
            const randomNumber = req.params;
            const foundUser = yield UserRepository_1.default.findOneBy({ randomNumber });
            if (file != null && foundUser != null) {
                const image = yield jimp_1.default.read(file.path);
                yield image.resize(600, 600);
                yield image.write('uploads/' + file.originalname);
                foundUser.ImageUrl = file.originalname;
                yield UserRepository_1.default.save(foundUser);
            }
        });
    }
}
exports.default = UserServiceLogin;
