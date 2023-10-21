import { Router } from "express";
import { rm } from "fs";
import { OAuth2Client } from "google-auth-library";
import jwt from 'jsonwebtoken';
import { v4 } from "uuid";
import { number } from "zod";
import Aluno from "../../models/entities/Aluno";
import AlunoRepository from "../../models/entities/repositories/AlunoRepository";

const google_login = Router();
const client = new OAuth2Client();

google_login.post('/login',async (req, res) => {
    const ticket = await client.verifyIdToken({
        idToken: req.body.token,
        audience: "368441154494-7ol8baksev6n3lgra7n6a0lcclqt3v82.apps.googleusercontent.com",  // Specify the CLIENT_ID of the app that accesses the backend
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
   
    let foundUser = await AlunoRepository.findOneBy({ email });
    if (!foundUser) {
        const user = new Aluno();
        user.fcmToken = req.body.fcmToken;
        user.email = email || '';
        user.nome = payload?.name || '';
        user.googleId = userId || '';
        user.ImageUrl = payload?.picture || '';
        //user.rm = rm || number;
        foundUser = await AlunoRepository.save(user);
       
    }
    // 300s => 5 minutos . voce pode colocar mais tempo se quiser
    const jwtToken = jwt.sign({ email: foundUser?.email, rm: foundUser?.rm }, "SUA_SENHA", { expiresIn: 300 })
    res.json({ token: jwtToken });

})

export default google_login
