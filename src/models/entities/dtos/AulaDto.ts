import { z } from "zod";

export default interface AulaDto {
  id_aula: string;
  id_professor: string;
  id_disciplina: string;
  id_turma:string;
  descricao:string;
} 

export const AulaSchema = z.object({
  id_aula:z.string(),
  id_professor: z.string(),
  id_disciplina: z.string(),
  id_turma: z.string(),
  descricao: z.string(),
})