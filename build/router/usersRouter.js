"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/UserController"));
const UserRouter = (0, express_1.Router)();
UserRouter.post('/', UserController_1.default.getInstance().saveUser);
UserRouter.get('/', UserController_1.default.getInstance().getUsers);
UserRouter.get('/:id', UserController_1.default.getInstance().getUserById);
UserRouter.delete('/:id', UserController_1.default.getInstance().deleteUserById);
UserRouter.put('/:id', UserController_1.default.getInstance().updateUserById);
exports.default = UserRouter;
