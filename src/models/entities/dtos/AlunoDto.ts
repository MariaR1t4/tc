import { z } from "zod";
import Usuario from "../Usuario";
import UsuarioDto from "./UsuarioDto";

export default interface AlunoDto {
  nome: string;
  telefone: string;
  usuario: UsuarioDto
  //senha: string;
} 

export const AlunoSchema = z.object({
  nome: z.string(),
  telefone: z.string().length(12, {message:"insira apenas números (ex: xx x xxxx xxxx"}),
  //senha: z.string().min(8, {message: "insira uma senha de pelo menos 8 caracteres"}),
  ImageUrl: z.string().nullable()
})