import {z} from 'zod'
export default interface SecretariaDto{
  nome: string;
  email: string;
  senha: string;
}
export const SecretariaSchema = z.object({
  nome: z.string(),
  email: z.string().email(),
  senha: z.string().min(8, {message: "insira uma senha de pelo menos 8 caracteres"}),
})
