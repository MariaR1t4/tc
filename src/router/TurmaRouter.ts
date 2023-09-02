import {Router} from "express"
import TurmaController from "../controller/TurmaController";


const TurmaRouter= Router();

TurmaRouter.post('/',TurmaController.getInstance().saveTurma);
TurmaRouter.get('/',TurmaController.getInstance().getTurmas);
TurmaRouter.get('/:id_turma',TurmaController.getInstance().getTurmaById);
TurmaRouter.delete('/:id_turma',TurmaController.getInstance().deleteTurmaById);
TurmaRouter.put('/:id_turma',TurmaController.getInstance().updateTurmaById);

export default TurmaRouter 
