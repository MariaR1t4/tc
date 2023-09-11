"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_config_1 = require("../configs/multer-config");
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const userRouter = (0, express_1.Router)();
userRouter.put('/update-image', multer_config_1.upload.single('image'), new user_controller_1.default().updateUserImage);
exports.default = userRouter;
