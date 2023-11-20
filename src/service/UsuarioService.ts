import fs from "fs";
import * as jwt from "jsonwebtoken";
import csvParser from "csv-parser";
import { Request, Response } from "express";


import Usuario from "../models/entities/Usuario";
import UsuarioRepository from "../models/entities/repositories/UsuarioRepository";
import { parse } from "url";

class UsuarioService {
  private constructor() {}

  getUserfromData(email: string, tipo: string): Usuario {
    const newUser = new Usuario();
    newUser.email = email;
    newUser.tipo = tipo;
    return newUser;
  }

  criaUsuario(usuario: Usuario[]) {
    throw new Error("Usuario não foi cadastrado");
  }

  private static instance: UsuarioService;
  public static getInstance() {
    if (!UsuarioService.instance) {
      UsuarioService.instance = new UsuarioService();
    }
    return UsuarioService.instance;
  }

   async saveUsuario(obj: Usuario): Promise<Usuario> {
    return await UsuarioRepository.save(obj);
  }

   async listaUsuario(): Promise<Usuario[]> {
    return await UsuarioRepository.find();
  }

   async deleteUsuario(email: string): Promise<void> {
    await UsuarioRepository.delete(email);
  }

  async updateUsuario(email:string, usuario: Usuario): Promise<void>{
    const usuarioAlterado = await UsuarioRepository.findOneBy(({email}));
    if(usuarioAlterado){
      usuarioAlterado.email = usuario.email;
      await UsuarioRepository.save(usuarioAlterado);
    }
    Promise.resolve();
  }

  async signUpInBatch(req: Request) {
    const file = req.file;
    const usuario: Usuario[] = [];
    if (file != null) {
      fs.createReadStream(file.path)
        .pipe(csvParser({separator : ';'}))
        .on("data", (data) =>
          usuario.push(this.getUserfromData(data.email, data.tipo))
          )
          .on("end", () => {
            
            try{
              for(const row of usuario){
                  let email:string | undefined;
                  if('email' in row){
                    email = row['email']
                  }
                  
                  }
                  
                  UsuarioRepository.save(usuario);
              }
            
              finally{

              }})
    }
  }
}

export default UsuarioService;
