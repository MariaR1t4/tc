import {Router} from "express"
import FrequenciaController from "../controller/FrequenciaController";

const frequenciaRouter= Router();

frequenciaRouter.post('/',FrequenciaController.getInstance().saveFrequencia);
frequenciaRouter.get('/',FrequenciaController.getInstance().getFrequencias);
frequenciaRouter.get('/:id',FrequenciaController.getInstance().getFrequenciaById);
frequenciaRouter.delete('/:id',FrequenciaController.getInstance().deleteFrequenciaById);
frequenciaRouter.put('/:id',FrequenciaController.getInstance().updateFrequenciaById);

export default frequenciaRouter 
