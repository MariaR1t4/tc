"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FrequenciaController_1 = __importDefault(require("../controller/FrequenciaController"));
const frequenciaRouter = (0, express_1.Router)();
frequenciaRouter.post('/', FrequenciaController_1.default.getInstance().saveFrequencia);
frequenciaRouter.get('/', FrequenciaController_1.default.getInstance().listFrequencia);
frequenciaRouter.get('/:id_frequencia', FrequenciaController_1.default.getInstance().findFrequencia);
frequenciaRouter.delete('/:id_frequencia', FrequenciaController_1.default.getInstance().deleteFrequencia);
frequenciaRouter.put('/:id_frequencia', FrequenciaController_1.default.getInstance().updateFrequencia);
exports.default = frequenciaRouter;
