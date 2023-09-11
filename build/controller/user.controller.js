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
const UserServiceLogin_1 = __importDefault(require("../service/login/UserServiceLogin"));
class UserLoginController {
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const token = yield new UserServiceLogin_1.default().loginUser(email, password);
                res.json({ token });
            }
            catch (err) {
                res.status(401).send("Login failed");
            }
        });
    }
    signUpUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            yield new UserServiceLogin_1.default().signUpUser(email, password);
            res.json('Cadastro criado com sucesso!');
        });
    }
    signUpUsersInBatch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.file);
            yield new UserServiceLogin_1.default().signUpUsersInBatch(req);
            res.json('OK!');
        });
    }
    updateUserImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.file);
            yield new UserServiceLogin_1.default().updateUserImage(req);
            res.json('OK!');
        });
    }
}
exports.default = UserLoginController;
