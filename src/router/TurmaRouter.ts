import {Router} from "express"


import TurmaController from "../controller/TurmaController";


const TurmaRouter= Router();

TurmaRouter.post('/cadastra',TurmaController.getInstance().saveTurma);
TurmaRouter.get('/',TurmaController.getInstance().listTurma);
TurmaRouter.get('/:id_turma',TurmaController.getInstance().findTurma);
TurmaRouter.delete('/:id_turma',TurmaController.getInstance().deleteTurma);
TurmaRouter.put('/:id_turma',TurmaController.getInstance().updateTurma);

export default TurmaRouter 
