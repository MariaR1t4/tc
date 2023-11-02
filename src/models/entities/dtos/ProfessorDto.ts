import {z} from "zod";
import UsuarioDto from "./UsuarioDto";

export default interface ProfessorDto{
    id_professor: string;
    nome: string;
    telefone: string;
    email: UsuarioDto;
    //senha: string;
}
export const ProfessorSchema = z.object({ 
    id_professor: z.string(),
    nome: z.string(),
    telefone: z.string().length(12, {message:"insira apenas números (ex: xx x xxxx xxxx"}),
    //senha: z.string().min(8, {message: "insira uma senha de pelo menos 8 caracteres"})
})