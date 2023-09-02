import {z} from "zod";

export default interface TurmaDto{
    id_turma: number;
    curso: string;
    periodo: string;
    modulo: string;
    descricao: string;
}
export const TurmaSchema = z.object({
    id_turma: z.number(),
    curso: z.string(),
    periodo: z.string(),
    modulo: z.string(),
    descricao: z.string(),
})
