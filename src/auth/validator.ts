import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import UsuarioRepository from "../models/entities/repositories/UsuarioRepository";
import Usuario from "../models/entities/Usuario";


import { hide } from "./constants";

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
    const email:string = "";
    const foundUsuario = await UsuarioRepository.findOneBy({email});

    if(foundUsuario){
        if(foundUsuario.tipo === "Aluno" || "aluno"){
            if(token) {
                next();
                return;
            }
        }
        res.status(403).send("User not allowed");
    }}catch(err){
        res.status(403).send("User not allowed");
    }}

    export  async function validatorProfessor(req: Request, res: Response, next: NextFunction){
        const bearerHeader = req.headers['authorization'];
        const bearer = bearerHeader?.split(' ');
        const barearToken = !!bearer &&  bearer.length > 1 && bearer[1];
        try{
        const token = await jwt.verify(barearToken || '', hide) as any;
        console.log(token);

        (req as any).authUser = {id: token.id, randomNumber: token.randomNumber};
        (req as any).authUser = {id: token.id};
        console.log(req.headers.authUser);
        req.body.authUser = {email: token.email, id: token.id}
        const email:string = "";
        const foundUsuario = await UsuarioRepository.findOneBy({email});
    
        if(foundUsuario){
            if(foundUsuario.tipo === "Professor" || "Professor"){
                if(token) {
                    next();
                    return;
                }
            }
            res.status(403).send("User not allowed");
        }}catch(err){
            res.status(403).send("User not allowed");
        }}

        export  async function validatorSecretaria(req: Request, res: Response, next: NextFunction){
            const bearerHeader = req.headers['authorization'];
            const bearer = bearerHeader?.split(' ');
            const barearToken = !!bearer &&  bearer.length > 1 && bearer[1];
            try{
            const token = await jwt.verify(barearToken || '', hide) as any;
            console.log(token);
        
            (req as any).authUser = {id: token.id, randomNumber: token.randomNumber};
            (req as any).authUser = {id: token.id};
            console.log(req.headers.authUser);
            req.body.authUser = {email: token.email, id: token.id}
            const email:string = "";
            const foundUsuario = await UsuarioRepository.findOneBy({email});
    
            if(foundUsuario){
                if(foundUsuario.tipo === "Secreataria" || "Secretaria"){
                    if(token) {
                        next();
                        return;
                    }
                }
                res.status(403).send("User not allowed");
            }}catch(err){
                res.status(403).send("User not allowed");
            }}
    

