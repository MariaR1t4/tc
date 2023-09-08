import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';

import { SECRET } from "../../auth/constants";

export  async function validator(req: Request, res: Response, next: NextFunction){
    const bearearHeader = req.headers['authorization'];
    const bearer = bearearHeader?.split("");
    const barearToken = !!bearer &&  bearer.length > 1 && bearer[1];
    try{
    const token = await jwt.verify(barearToken || '', SECRET);
    if(token) {
        next();
        return;
    }
        res.status(403).send("User not allowed");
    } catch(err){
        res.status(403).send("User not allowed");
    }
    

}