// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import admin from 'firebase-admin';
import {Router, Request, Response} from 'express';
import dotenv from 'dotenv';
import UsuarioRepository from "../../models/entities/repositories/UsuarioRepository";

dotenv.config();
const serviceAccount = require ('../../../serviceAccount.json');


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASURMENT_ID
};

// Initialize Firebase

const firebaseApp = initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE
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