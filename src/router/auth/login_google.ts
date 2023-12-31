import { Router } from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from 'jsonwebtoken';
import UsuarioRepository from "../../models/entities/repositories/UsuarioRepository";
import Usuario from "../../models/entities/Usuario";
import { token } from "morgan";
import ProfessorRepository from "../../models/entities/repositories/ProfessorRepository";
import { string } from "zod";
import { equal } from "assert";
import { Equal } from "typeorm";

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
    const googleId = payload?.sub;
    const ImageUrl = payload?.picture;

    console.log(payload);
    console.log(googleId);
    const email = payload?.email;

    if(!email) {
        res.status(401).send();
        return;
    }

    const foundUser = await UsuarioRepository.findOneBy({ email });

    if (foundUser) {
        foundUser.fcmToken = req.body.fcmToken;
        foundUser.googleId = googleId || '';
        foundUser.ImageUrl =  ImageUrl || '';
        
        await UsuarioRepository.save(foundUser);
    }

    // 300s => 5 minutos . voce pode colocar mais tempo se quiser
    const jwtToken = jwt.sign({ email: foundUser?.email, tipo: foundUser?.tipo }, 'sua_senha', { expiresIn: 300 })
    const type = foundUser?.tipo
    
    /*if(type == 'Professor'|| type == 'professor'){
        const foundUser = UsuarioRepository.findOneBy({email})
        const string = foundUser.toString();
        const usuario = string.email;
        const foundProf = await ProfessorRepository.findOneBy({usuario})
        const nomeprof = foundProf?.nome
        res.json({ token: jwtToken, tipo: type, nome: nomeprof})
    } else*/

    res.json({token: jwtToken, tipo: type})

    
    })

    
export default google_login