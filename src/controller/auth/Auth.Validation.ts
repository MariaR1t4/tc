import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';


import { hide } from "../../auth/constants";

export  async function validatorProfessor(req: Request, res: Response, next: NextFunction){
    const bearerHeader = req.headers['authorization'];
    const bearer = bearerHeader?.split(' ');
    const barearToken = !!bearer &&  bearer.length > 1 && bearer[1];
    try{
    const token = await jwt.verify(barearToken || '', hide) as any;
    console.log(token);

    (req as any).authUser = {id: token.id};
    console.log(req.headers.authUser);
    req.body.authUser = {email: token.email, id: token.id}

    if(token) {
        next();
        return;
    }
        res.status(403).send("User not allowed");
    } catch(err){
        res.status(403).send("User not allowed");
    }
    

}

export  async function validatorAluno(req: Request, res: Response, next: NextFunction){
    const bearerHeader = req.headers['authorization'];
    const bearer = bearerHeader?.split(' ');
    const barearToken = !!bearer &&  bearer.length > 1 && bearer[1];
    try{
    const token = await jwt.verify(barearToken || '', hide) as any;
    console.log(token);

    (req as any).authUser = {id: token.id, rm: token.rm};
    console.log(req.headers.authUser);
    req.body.authUser = {rm: token.rm, id: token.id}

    if(token) {
        next();
        return;
    }
        res.status(403).send("User not allowed");
    } catch(err){
        res.status(403).send("User not allowed");
    }}
    
    export  async function validatorSecretaria(req: Request, res: Response, next: NextFunction){
        const bearerHeader = req.headers['authorization'];
        const bearer = bearerHeader?.split(' ');
        const barearToken = !!bearer &&  bearer.length > 1 && bearer[1];
        try{
        const token = await jwt.verify(barearToken || '', hide) as any;
        console.log(token);
    
        (req as any).authUser = {id: token.id, rm: token.rm};
        console.log(req.headers.authUser);
        req.body.authUser = {email: token.email, id: token.id}
    
        if(token) {
            next();
            return;
        }
            res.status(403).send("User not allowed");
        } catch(err){
            res.status(403).send("User not allowed");
        } 
}