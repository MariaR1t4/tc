import { NextFunction, Request, Response } from "express";

export async function alunoAtuh(req: Request, res: Response, next: NextFunction){
    const token = req.headers.authorization
    const tipo = req.headers.tipo
    
    console.log(token)
    console.log(tipo)

    if(tipo == 'aluno' || tipo == 'Aluno'){
        next();
        return
    }

    res.status(403)
}

export async function professorauth(req: Request, res: Response, next: NextFunction){
    const token = req.headers.authorization
    const tipo = req.headers.tipo
    console.log('token: `${token}`')
    console.log('tipo: `${tipo}')

    if(tipo == 'Professor' || tipo == 'professor'){
        next();
        return
    }

    res.status(403)
}

export async function secretariaauth(req: Request, res: Response, next: NextFunction){
    const token = req.headers.authorization
    const tipo = req.headers.tipo
    console.log('token: `${token}`')
    console.log('tipo: `${tipo}')

    if(tipo == 'Secretaria' || tipo == 'secretaria'){
        next();
        return
    }

    res.status(403)
}