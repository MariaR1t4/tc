import {Router} from "express";


import FrequenciaController from "../controller/FrequenciaController";

const frequenciaRouter= Router();

frequenciaRouter.post('/cria-frequencia',FrequenciaController.getInstance().saveFrequencia);
frequenciaRouter.get('/lista-frequencia',FrequenciaController.getInstance().listFrequencia);
frequenciaRouter.get('/encontra-frequencia/:id_frequencia',FrequenciaController.getInstance().findFrequencia);
frequenciaRouter.delete('/deleta-frequencia/:id_frequencia',FrequenciaController.getInstance().deleteFrequencia);
frequenciaRouter.put('/edita-frequencia/:id_frequencia',FrequenciaController.getInstance().updateFrequencia);

//frequenciaRouter.post('/presenca', FrequenciaController.getInstance().frequencia);

export default frequenciaRouter 
