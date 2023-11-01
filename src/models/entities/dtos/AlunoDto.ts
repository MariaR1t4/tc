import { z } from "zod";
import Usuario from "../Usuario";

export default interface AlunoDto {
  nome: string;
  telefone: string;
  usuario: Usuario
  //senha: string;
} 

export const AlunoSchema = z.object({
  nome: z.string(),
  telefone: z.string().length(12, {message:"insira apenas números (ex: xx x xxxx xxxx"}),
  email: z.string().email(),
  //senha: z.string().min(8, {message: "insira uma senha de pelo menos 8 caracteres"}),
  ImageUrl: z.string().nullable()
})