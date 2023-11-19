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
const UsuarioService_1 = __importDefault(require("../service/login/UsuarioService"));
class UsuarioController {
    constructor() {
    }
    static getInstance() {
        if (!UsuarioController.instance) {
            UsuarioController.instance = new UsuarioController();
        }
        return UsuarioController.instance;
    }
    saveUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioService = UsuarioService_1.default.getInstance();
            const usuario = req.body;
            const user = yield usuarioService.saveUsuario(usuario);
            res.json(user);
        });
    }
    listUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = UsuarioService_1.default.getInstance();
            res.json(yield usuario.listaUsuario());
        });
    }
    updateUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioService = UsuarioService_1.default.getInstance();
                const email = req.params.rm;
                const usuario = req.body;
                yield usuarioService.updateUsuario(email, usuario);
                res.json("Atualização feita com sucesso!");
            }
            catch (err) {
                console.log(err);
                return res.status(400).send({ err: "nao foi possivel encontrar aluno" });
            }
        });
    }
    deleteusuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = UsuarioService_1.default.getInstance();
            const email = req.params.email;
            yield usuario.deleteUsuario(email);
            res.json('Usuario deletado');
        });
    }
    cadastroBatch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.file);
            yield UsuarioService_1.default.getInstance().signUpInBatch(req);
            res.json('usuario');
        });
    }
}
exports.default = UsuarioController;
/*

// Initialize Firebase Admin SDK
const serviceAccount = require('/path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Authenticate a user with Firebase Authentication
admin.auth().signInWithEmailAndPassword(email, password)
  .then(userCredential => {
    // User is authenticated
    const user = userCredential.user;
    console.log(`User ${user.email} is authenticated`);
  })
  .catch(error => {
    // Authentication failed
    console.error('Authentication failed:', error);
  })*/
