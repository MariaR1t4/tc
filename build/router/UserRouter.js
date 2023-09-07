"use strict";
<<<<<<< HEAD
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/UserController"));
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const multer_config_1 = require("../models/config/multer-config");
const userRouter = (0, express_1.Router)();
userRouter.post('/', UserController_1.default.getInstance().saveuser);
userRouter.get('/', UserController_1.default.getInstance().listUser);
userRouter.get('/:rm', UserController_1.default.getInstance().getUserById);
userRouter.delete('/:rm', UserController_1.default.getInstance().deleteUserById);
userRouter.put('/:rm', UserController_1.default.getInstance().updateUserById);
userRouter.put('/update-image/:id', multer_config_1.upload.single('image'), new user_controller_1.default().updateUserImage);
exports.default = userRouter;
=======
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
>>>>>>> 8e71852d88985ae45487ec3c01bac48c82ef3b07
