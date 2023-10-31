import TurmaDto from "./TurmaDto";
import AlunoDto from "./AlunoDto";
import { z } from "zod";
import ProfessorDisciplinaDto from "./ProfessorDisciplinaDto";

export default interface FrequenciaDto{
    id_turma: TurmaDto;
   /* id_professor: ProfessorDto;
    id_disciplina: DisciplinaDto;*/
    data:Date;
    professorDisciplina:ProfessorDisciplinaDto
    rm: AlunoDto;
}
export const FrequenciaSchema = z.object({
    id_turma: z.number(),
    /*id_professor: z.number(),
    id_disciplina: z.number(),*/
    data: z.date().nullable(),
    professorDisciplina:z.string(),
    rm: z.number()
})
