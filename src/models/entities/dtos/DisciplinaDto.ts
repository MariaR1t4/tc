import { z } from "zod";

export default interface DisciplinaDto{
    descricao: string;
}
export const DisciplinaSchema = z.object({
    descricao: z.string()
})