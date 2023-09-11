"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_config_1 = require("../../configs/multer-config");
const user_controller_1 = __importDefault(require("../../controller/user.controller"));
const authRouter = (0, express_1.Router)();
authRouter.post('/login', new user_controller_1.default().loginUser);
authRouter.post('/sign-up', new user_controller_1.default().signUpUser);
authRouter.post('/batch-sign-up', multer_config_1.upload.single('csvFile'), new user_controller_1.default().signUpUsersInBatch);
exports.default = authRouter;
