import { z } from 'zod';
export default interface SecretariaDto{
  id_secretaria: number;
  nome: string;
  email: string;
  senha: string;
}
export const SecretariaSchema = z.object({
  id_secretaria: z.number(),
  nome: z.string(),
  email: z.string().email(),
  senha: z.string().min(8, {message: "insira uma senha de pelo menos 8 caracteres"}),
})
