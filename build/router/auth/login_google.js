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
const express_1 = require("express");
const google_auth_library_1 = require("google-auth-library");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Aluno_1 = __importDefault(require("../../models/entities/Aluno"));
const AlunoRepository_1 = __importDefault(require("../../models/entities/repositories/AlunoRepository"));
const google_login = (0, express_1.Router)();
const client = new google_auth_library_1.OAuth2Client();
google_login.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ticket = yield client.verifyIdToken({
        idToken: req.body.token,
        audience: "368441154494-7ol8baksev6n3lgra7n6a0lcclqt3v82.apps.googleusercontent.com", // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userId = payload === null || payload === void 0 ? void 0 : payload.sub;
    console.log(payload);
    console.log(userId);
    const email = payload === null || payload === void 0 ? void 0 : payload.email;
    if (!email) {
        res.status(401).send();
        return;
    }
    let foundUser = yield AlunoRepository_1.default.findOneBy({ email });
    if (!foundUser) {
        const user = new Aluno_1.default();
        user.fcmToken = req.body.fcmToken;
        user.email = email || '';
        user.nome = (payload === null || payload === void 0 ? void 0 : payload.name) || '';
        user.googleId = userId || '';
        user.ImageUrl = (payload === null || payload === void 0 ? void 0 : payload.picture) || '';
        //user.rm = rm || number;
        foundUser = yield AlunoRepository_1.default.save(user);
    }
    // 300s => 5 minutos . voce pode colocar mais tempo se quiser
    const jwtToken = jsonwebtoken_1.default.sign({ email: foundUser === null || foundUser === void 0 ? void 0 : foundUser.email, rm: foundUser === null || foundUser === void 0 ? void 0 : foundUser.rm }, "SUA_SENHA", { expiresIn: 300 });
    res.json({ token: jwtToken });
}));
exports.default = google_login;
