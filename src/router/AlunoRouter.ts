import { Router } from "express";


import AlunoController from "../controller/AlunoController";


const alunoRouter= Router();

alunoRouter.post('/',AlunoController.getInstance().saveAluno);
alunoRouter.get('/',AlunoController.getInstance().listAluno);
alunoRouter.get('/:rm',AlunoController.getInstance().findAlunoById);
alunoRouter.delete('/:rm',AlunoController.getInstance().deleteAluno);
alunoRouter.put('/:rm',AlunoController.getInstance().updateAluno);

export default alunoRouter 
