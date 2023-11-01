import fs from "fs";
import * as jwt from "jsonwebtoken";
import csvParser from "csv-parser";
import { Request, Response } from "express";

import Usuario from "../../models/entities/Usuario";
import UsuarioRepository from "../../models/entities/repositories/UsuarioRepository";

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

  public async saveUsuario(obj: Usuario): Promise<Usuario> {
    return await UsuarioRepository.save(obj);
  }

  public async listaUsuario(): Promise<Usuario[]> {
    return await UsuarioRepository.find();
  }

  public async deleteUsuario(email: string): Promise<void> {
    await UsuarioRepository.delete(email);
  }

  async signUpInBatch(req: Request) {
    const file = req.file;
    const usuario: Usuario[] = [];
    if (file != null) {
      fs.createReadStream(file.path)
        .pipe(csvParser({ separator: ";" }))
        .on("data", (data) =>
          usuario.push(this.getUserfromData(data.email, data.tipo))
        )
        .on("end", () => {
          console.log(usuario);
          UsuarioRepository.save(usuario);
        })
        .on("error", () => {
          console.log("Deu ruim amigão");
        });
    }
  }
}

export default UsuarioService;
