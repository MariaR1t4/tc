import {Router} from "express"
import FrequenciaController from "../controller/FrequenciaController";

const frequenciaRouter= Router();

frequenciaRouter.post('/',FrequenciaController.getInstance().saveFrequencia);
frequenciaRouter.get('/',FrequenciaController.getInstance().listFrequencia);
frequenciaRouter.get('/:id_frequencia',FrequenciaController.getInstance().findFrequencia);
frequenciaRouter.delete('/:id_frequencia',FrequenciaController.getInstance().deleteFrequencia);
frequenciaRouter.put('/:id_frequencia',FrequenciaController.getInstance().updateFrequencia);

export default frequenciaRouter 
