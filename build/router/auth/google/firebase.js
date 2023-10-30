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
// Import the functions you need from the SDKs you need
const app_1 = require("firebase-admin/app");
const messaging_1 = require("firebase-admin/messaging");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const express_1 = require("express");
const UsuarioRepository_1 = __importDefault(require("../../../models/entities/repositories/UsuarioRepository"));
const serviceAccount = require('../auth/serviceAccount.json');
const firebaseConfig = {
    apiKey: "AIzaSyDFdan43fXzt2fHF7ep6qfcMlm907W-vMk",
    authDomain: "alumnus-402118.firebaseapp.com",
    projectId: "alumnus-402118",
    storageBucket: "alumnus-402118.appspot.com",
    messagingSenderId: "368441154494",
    appId: "1:368441154494:web:2965eb0b8470d7ec7a77ef",
    measurementId: "G-3M6SPN6028"
};
// Initialize Firebase
const firebaseApp = (0, app_1.initializeApp)({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    databaseURL: "https://alumnus-402118-default-rtdb.firebaseio.com/"
});
const messaging = (0, messaging_1.getMessaging)(firebaseApp);
const fire = (0, express_1.Router)();
fire.post('/notification/send/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    const notification = req.body;
    const foundUser = yield UsuarioRepository_1.default.findOneBy({ email });
    const registrationToken = (foundUser === null || foundUser === void 0 ? void 0 : foundUser.fcmToken) || [];
    const options = {
        priority: "high"
    };
    const payload = {
        notification: {
            title: notification.title,
            body: notification.body,
            content_available: "true",
            image: "https://i.ytimg.com/vi/iosNuIdQoy8/maxresdefault.jpg&quot;"
        }
    };
    try {
        yield messaging.sendToDevice(registrationToken, payload, options);
        res.send('message succesfully sent !');
    }
    catch (err) {
        res.send(err).status(500);
    }
    ;
}));
exports.default = fire;
