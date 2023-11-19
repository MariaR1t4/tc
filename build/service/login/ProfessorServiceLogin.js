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
const sha256_1 = __importDefault(require("crypto-js/sha256"));
const hmac_sha512_1 = __importDefault(require("crypto-js/hmac-sha512"));
const enc_base64_1 = __importDefault(require("crypto-js/enc-base64"));
const jwt = __importStar(require("jsonwebtoken"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const logger_1 = __importDefault(require("../../configs/logger"));
const Professor_1 = __importDefault(require("../../models/entities/Professor"));
const ProfessorRepository_1 = __importDefault(require("../../models/entities/repositories/ProfessorRepository"));
class ProfessorServiceLogin {
    getProfessorFromData(email, senha, nome, telefone) {
        const newProf = new Professor_1.default();
        newProf.nome = nome;
        newProf.usuario = email;
        newProf.telefone = telefone;
        const hashDigest = (0, sha256_1.default)(senha);
        logger_1.default.debug("HashAntes: ", hashDigest);
        const privateKey = "FIEC2023";
        const hmacDigest = enc_base64_1.default.stringify((0, hmac_sha512_1.default)(hashDigest, privateKey));
        logger_1.default.debug("HashDepos: ", hashDigest);
        return newProf;
    }
    loginProf(usuario, senha) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashDigest = (0, sha256_1.default)(senha);
            logger_1.default.debug("HashAntes: ", hashDigest);
            const privateKey = "FIEC2023";
            const SenhaHasehd = enc_base64_1.default.stringify((0, hmac_sha512_1.default)(hashDigest, privateKey));
            const foundProf = yield ProfessorRepository_1.default.findOneBy({ usuario }); // quando for passar pra SenhaHashed (linha acima ☝️) colocar senha: SenhaHaseh
            if (foundProf) {
                const token = jwt.sign({ email: foundProf === null || foundProf === void 0 ? void 0 : foundProf.usuario, }, 'sua_senha', { expiresIn: 300 });
                return token;
            }
            throw new Error("Professor not found");
        });
    }
    signUpProf(usuario, senha, name, telefone) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProf = this.getProfessorFromData(usuario, senha, name, telefone);
            yield ProfessorRepository_1.default.save(newProf);
        });
    }
    signUpProfessorInBatch(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = req.file;
            const Professor = [];
            if (file != null) {
                fs_1.default.createReadStream(file.path)
                    .pipe((0, csv_parser_1.default)({ separator: ';' }))
                    //.on('data', (data) => Professor.push(this.getProfessorFromData(data.nome, data.telefone, data.email)))
                    .on('end', () => {
                    console.log(Professor);
                    ProfessorRepository_1.default.save(Professor);
                });
            }
        });
    }
}
exports.default = ProfessorServiceLogin;
