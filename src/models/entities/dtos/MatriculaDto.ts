import AlunoDto from "./AlunoDto";
import TurmaDto from "./TurmaDto";
import { z } from 'zod';

export default interface MatriculaDto{
  id_matricula: number;
  rm: AlunoDto;
  id_turma: TurmaDto;
  semestre: string;
  ano: string;
}
export const Matricula = z.object({
  id_matricula: z.number(),
  rm: z.number(),
  id_turma: z.number(),
  semestre: z.number(),
  ano: z.string().length(4, {message: 'insira o ano com 4 dígitos - AAAA'})
})