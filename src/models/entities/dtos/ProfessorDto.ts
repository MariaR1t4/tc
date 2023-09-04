import {z} from "zod";

export default interface ProfessorDto{
    id_tabela_professor: number;
    id_professor: string;
    name: string;
    email: string;
    password: string;
    telefone: string;
}
export const ProfessorSchema = z.object({ 
    id_tabela_professor: z.number(),
    id_professor: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8, {message: "insira uma senha de pelo menos 8 caracteres"}),
    telefone: z.string().length(12, {message:"insira apenas números (ex: xx x xxxx xxxx"})
})