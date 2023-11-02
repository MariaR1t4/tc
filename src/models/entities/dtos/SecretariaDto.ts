import {z} from 'zod'
import UsuarioDto from './UsuarioDto';

export default interface SecretariaDto{
  nome: string;
  email: UsuarioDto;
}
export const SecretariaSchema = z.object({
  nome: z.string(),
})
