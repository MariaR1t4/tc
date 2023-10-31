import {Router} from "express"


import TurmaController from "../controller/TurmaController";


const turmaRouter= Router();

turmaRouter.post('/',TurmaController.getInstance().saveTurma);
turmaRouter.get('/list',TurmaController.getInstance().listTurma);
turmaRouter.get('/:id_turma',TurmaController.getInstance().findTurma);
turmaRouter.delete('/:id_turma',TurmaController.getInstance().deleteTurma);
turmaRouter.put('/edita/:id_turma',TurmaController.getInstance().updateTurma);

export default turmaRouter 
