import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';


import { hide } from "../../constants";

export  async function validator(req: Request, res: Response, next: NextFunction){
    const bearerHeader = req.headers['authorization'];
    const bearer = bearerHeader?.split(' ');
    const barearToken = !!bearer &&  bearer.length > 1 && bearer[1];
    try{
    const token = await jwt.verify(barearToken || '', hide) as any;
    
    (req as any).authUser = {id: token.id};
    console.log(req.headers.authUser);

    if(token) {
        next();
        return;
    }
        res.status(403).send("User not allowed");
    } catch(err){
        res.status(403).send("User not allowed");
    }
    

}