import { Router } from "express";
import AlunoController from "../controller/AlunoController";
import AlunoService from "../service/AlunoService";
import { upload } from "../configs/multer-config";


const alunoRouter= Router();
//secretaria quem faz
alunoRouter.post('/cria-aluno',AlunoController.getInstance().saveAluno);
alunoRouter.post('/cria-aluno/csv', upload.single('csvFile'), AlunoController.getInstance().singUpBatchAluno)
alunoRouter.get('/lista-aluno',AlunoController.getInstance().listAluno);
alunoRouter.get('/find-aluno/:rm',AlunoController.getInstance().findAlunoById);
alunoRouter.delete('/delete-aluno/:rm',AlunoController.getInstance().deleteAluno);
alunoRouter.put('/update-aluno/:rm',AlunoController.getInstance().updateAluno);

//frequenciaRouter.post('/',FrequenciaController.getInstance().saveFrequencia);

export default alunoRouter
