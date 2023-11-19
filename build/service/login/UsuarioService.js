"use strict";
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
const csv_parser_1 = __importDefault(require("csv-parser"));
const Usuario_1 = __importDefault(require("../../models/entities/Usuario"));
const UsuarioRepository_1 = __importDefault(require("../../models/entities/repositories/UsuarioRepository"));
class UsuarioService {
    constructor() { }
    getUserfromData(email, tipo) {
        const newUser = new Usuario_1.default();
        newUser.email = email;
        newUser.tipo = tipo;
        return newUser;
    }
    criaUsuario(usuario) {
        throw new Error("Usuario não foi cadastrado");
    }
    static getInstance() {
        if (!UsuarioService.instance) {
            UsuarioService.instance = new UsuarioService();
        }
        return UsuarioService.instance;
    }
    saveUsuario(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UsuarioRepository_1.default.save(obj);
        });
    }
    listaUsuario() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UsuarioRepository_1.default.find();
        });
    }
    deleteUsuario(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield UsuarioRepository_1.default.delete(email);
        });
    }
    updateUsuario(email, usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioAlterado = yield UsuarioRepository_1.default.findOneBy(({ email }));
            if (usuarioAlterado) {
                usuarioAlterado.email = usuario.email;
                yield UsuarioRepository_1.default.save(usuarioAlterado);
            }
            Promise.resolve();
        });
    }
    signUpInBatch(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = req.file;
            const usuario = [];
            if (file != null) {
                fs_1.default.createReadStream(file.path)
                    .pipe((0, csv_parser_1.default)({ separator: ';' }))
                    .on("data", (data) => usuario.push(this.getUserfromData(data.email, data.tipo)))
                    .on("end", () => {
                    console.log(usuario);
                    UsuarioRepository_1.default.insert(usuario);
                });
            }
        });
    }
}
exports.default = UsuarioService;
