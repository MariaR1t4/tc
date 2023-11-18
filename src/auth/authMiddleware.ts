import { NextFunction, Request, Response } from "express";

export async function authMiddleware(req: Request, res:Response, next:NextFunction){
    const token = req.query.token || req.headers['x-acess-token'];
    console.log(token)
    res.json(token)

    if(!token){
        return res.status(401).send('Não Autorizado')
    }
    return next();
}