// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import admin from 'firebase-admin';
import {Router, Request, Response} from 'express';


import UsuarioRepository from "../../models/entities/repositories/UsuarioRepository";

const serviceAccount = require ('../auth/serviceAccount.json')
    
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

const firebaseApp = initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://alumnus-402118-default-rtdb.firebaseio.com/"
});

const messaging = getMessaging(firebaseApp);

const fire = Router();

fire.post('/notification', async (req: Request, res: Response) => {
    const email = req.params.email;
    const notification = req.body;
    const foundUser = await UsuarioRepository.findOneBy({ email });
    const registrationToken = foundUser?.fcmToken || [];

    const options = {
        priority: "high"
    }

    const payload = {
        notification: {
            title: notification.title,
            body: notification.body,
            content_available: "true",
            image: "https://i.ytimg.com/vi/iosNuIdQoy8/maxresdefault.jpg&quot;"
        }
    }

    try {
        await messaging.sendToDevice(registrationToken, payload, options)

        res.send('message succesfully sent !')

    } catch (err) {
        res.send(err).status(500)
    };
})

export default fire