import {z} from "zod";

export default interface ProfessorDto{
    name: string;
    telefone: string;
    email: string;
    senha: string;
}
export const ProfessorSchema = z.object({ 
    name: z.string(),
    telefone: z.string().length(12, {message:"insira apenas números (ex: xx x xxxx xxxx"}),
    email: z.string().email(),
    password: z.string().min(8, {message: "insira uma senha de pelo menos 8 caracteres"})
})