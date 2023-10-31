import { z } from "zod";

export default interface DisciplinaDto{
    id_disciplina:string
    descricao: string;
}
export const DisciplinaSchema = z.object({
    id_disciplina: z.string(),
    descricao: z.string()
})