import {z} from "zod";

export default interface DisciplinaDto{
    id_disciplina: number;
    descricao: string;
}
export const DisciplinaSchema = z.object({
    id_disciplina: z.number(),
    descricao: z.string()
})