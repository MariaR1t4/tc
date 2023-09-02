import {Router} from "express"
import PessoaController from "../controller/PessoasController";

const pessoaRouter= Router();

pessoaRouter.post('/',PessoaController.getInstance().savePessoa);
pessoaRouter.get('/',PessoaController.getInstance().getPessoa);
pessoaRouter.get('/:id',PessoaController.getInstance().getPessoaById);
pessoaRouter.delete('/:id',PessoaController.getInstance().deletePessoaById);
pessoaRouter.put('/:id',PessoaController.getInstance().updatePessoaById);

export default pessoaRouter 
