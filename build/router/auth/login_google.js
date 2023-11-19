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
const UsuarioRepository_1 = __importDefault(require("../../models/entities/repositories/UsuarioRepository"));
const google_login = (0, express_1.Router)();
const client = new google_auth_library_1.OAuth2Client();
google_login.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ticket = yield client.verifyIdToken({
        idToken: req.body.token,
        audience: "368441154494-3vdnb96fu0l592uau5bgrmpcqnc164de.apps.googleusercontent.com", // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const googleId = payload === null || payload === void 0 ? void 0 : payload.sub;
    const ImageUrl = payload === null || payload === void 0 ? void 0 : payload.picture;
    console.log(payload);
    console.log(googleId);
    const email = payload === null || payload === void 0 ? void 0 : payload.email;
    if (!email) {
        res.status(401).send();
        return;
    }
    const foundUser = yield UsuarioRepository_1.default.findOneBy({ email });
    if (foundUser) {
        foundUser.fcmToken = req.body.fcmToken;
        foundUser.googleId = googleId || '';
        foundUser.ImageUrl = ImageUrl || '';
        yield UsuarioRepository_1.default.save(foundUser);
    }
    // 300s => 5 minutos . voce pode colocar mais tempo se quiser
    const jwtToken = jsonwebtoken_1.default.sign({ email: foundUser === null || foundUser === void 0 ? void 0 : foundUser.email, tipo: foundUser === null || foundUser === void 0 ? void 0 : foundUser.tipo }, 'sua_senha', { expiresIn: 300 });
    const type = foundUser === null || foundUser === void 0 ? void 0 : foundUser.tipo;
    res.json({ token: jwtToken, tipo: type });
}));
exports.default = google_login;
