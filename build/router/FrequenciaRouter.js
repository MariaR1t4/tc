"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FrequenciaController_1 = __importDefault(require("../controller/FrequenciaController"));
const frequenciaRouter = (0, express_1.Router)();
frequenciaRouter.post('/', FrequenciaController_1.default.getInstance().saveFrequencia);
frequenciaRouter.get('/', FrequenciaController_1.default.getInstance().getFrequencias);
frequenciaRouter.get('/:id', FrequenciaController_1.default.getInstance().getFrequenciaById);
frequenciaRouter.delete('/:id', FrequenciaController_1.default.getInstance().deleteFrequenciaById);
frequenciaRouter.put('/:id', FrequenciaController_1.default.getInstance().updateFrequenciaById);
exports.default = frequenciaRouter;
