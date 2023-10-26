import { Router } from "express";
import { rm } from "fs";
import { OAuth2Client } from "google-auth-library";
import jwt from 'jsonwebtoken';
import { v4 } from "uuid";
import { number } from "zod";
import UsuarioRepository from "../../models/entities/repositories/UsuarioRepository";
import Usuario from "../../models/entities/Usuario";

const google_login = Router();
const client = new OAuth2Client();

google_login.post('/login',async (req, res) => {
    const ticket = await client.verifyIdToken({
        idToken: req.body.token,
        audience: "368441154494-3vdnb96fu0l592uau5bgrmpcqnc164de.apps.googleusercontent.com",  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userId = payload?.sub;
    console.log(payload);
    console.log(userId);
    const email = payload?.email;
    if(!email) {
        res.status(401).send();
        return;
    }
   
    let foundUser = await UsuarioRepository.findOneBy({ email });
    if (!foundUser) {
        const user = new Usuario();
        user.fcmToken = req.body.fcmToken;
        user.email = email || '';
        user.googleId = userId || '';
        user.ImageUrl = payload?.picture || '';
        foundUser = await UsuarioRepository.save(user);
       
    }
    // 300s => 5 minutos . voce pode colocar mais tempo se quiser
    const jwtToken = jwt.sign({ email: foundUser?.email}, "SUA_SENHA", { expiresIn: 300 })
    res.json({ token: jwtToken });

})

export default google_login
