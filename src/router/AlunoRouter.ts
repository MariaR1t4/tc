import { Router } from "express";
import AlunoController from "../controller/AlunoController";


const alunoRouter= Router();
//secretaria quem faz
alunoRouter.post('/cria-aluno',AlunoController.getInstance().saveAluno);
alunoRouter.get('/lista-aluno',AlunoController.getInstance().listAluno);
alunoRouter.get('/find-aluno/:rm',AlunoController.getInstance().findAlunoById);
alunoRouter.delete('/delete-aluno/:rm',AlunoController.getInstance().deleteAluno);
alunoRouter.put('/update-aluno/:rm',AlunoController.getInstance().updateAluno);

//frequenciaRouter.post('/',FrequenciaController.getInstance().saveFrequencia);

export default alunoRouter
