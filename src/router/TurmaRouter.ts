import {Router} from "express"


import TurmaController from "../controller/TurmaController";


const turmaRouter= Router();

turmaRouter.post('/cria-turma',TurmaController.getInstance().saveTurma);
turmaRouter.get('/lista-turma',TurmaController.getInstance().listTurma);
turmaRouter.get('/encontra-turma/:id_turma',TurmaController.getInstance().findTurma);
turmaRouter.delete('/deleta-turma/:id_turma',TurmaController.getInstance().deleteTurma);
turmaRouter.put('/edita-turma/:id_turma',TurmaController.getInstance().updateTurma);

export default turmaRouter 
