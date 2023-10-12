import TurmaDto from "./TurmaDto";
import AlunoDto from "./AlunoDto";
import { z } from "zod";
import ProfessorDto from "./ProfessorDto";
import DisciplinaDto from "./DisciplinaDto";

export default interface FrequenciaDto{
    id_turma: TurmaDto;
    rm: AlunoDto;
    id_professor: ProfessorDto;
    id_disciplina: DisciplinaDto;
    descricao:string;
}
export const FrequenciaSchema = z.object({
    id_turma: z.number(),
    rm: z.number(),
    id_professor: z.number(),
    id_disciplina: z.number(),
    descricao:z.string()
})
