"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
    }
    static getInstance() {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }
        return UserController.instance;
    }
    saveUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = userService_1.default.getInstance();
            const user = req.body;
            const usercreated = yield userService.saveUser(user);
            console.log(usercreated);
            res.json(usercreated);
        });
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = userService_1.default.getInstance();
            res.json(yield userService.getUsers());
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = userService_1.default.getInstance();
            const { id } = req.params;
            res.json(yield userService.getUserById(parseInt(id)));
        });
    }
    deleteUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = userService_1.default.getInstance();
            const id = req.params.id;
            yield userService.deleteUserById(parseInt(id));
            res.json('ok');
        });
    }
    updateUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = userService_1.default.getInstance();
            const id = req.params.id;
            const user = req.body;
            yield userService.updateUserById(parseInt(id), user);
            res.json('ok');
        });
    }
}
exports.default = UserController;
