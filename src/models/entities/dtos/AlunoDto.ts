import { z } from "zod";

export default interface AlunoDto {
  nome: string;
  telefone: string;
  email: string;
  senha: string;
} 

export const AlunoSchema = z.object({
  nome: z.string(),
  telefone: z.string().length(12, {message:"insira apenas números (ex: xx x xxxx xxxx"}),
  email: z.string().email(),
  senha: z.string().min(8, {message: "insira uma senha de pelo menos 8 caracteres"}),
})