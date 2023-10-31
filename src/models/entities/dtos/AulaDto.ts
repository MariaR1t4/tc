import { z } from "zod";

export default interface AulaDto {
  id_aula: string;
  professor_disciplina:string
  descricao:string;
} 

export const AulaSchema = z.object({
  id_aula:z.string(),
  professor_disciplina:z.string(),
  descricao: z.string(),
})