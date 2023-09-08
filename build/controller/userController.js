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
const UserService_1 = __importDefault(require("../service/UserService"));
class UserController {
    constructor() {
    }
    static getInstance() {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }
        return UserController.instance;
    }
    saveuser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = UserService_1.default.getInstance();
            const user = req.body;
            const usercreated = yield userService.saveUser(user);
            res.json(usercreated);
        });
    }
    listUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = UserService_1.default.getInstance();
            res.json(yield userService.listUser());
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = UserService_1.default.getInstance();
            const randomNumber = req.params.randomNumber;
            res.json(yield userService.getUserById(parseInt(randomNumber)));
        });
    }
    deleteUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = UserService_1.default.getInstance();
            const randomNumber = req.params.randomNumber;
            yield userService.deleteUserById(parseInt(randomNumber));
            res.json('user deletada');
        });
    }
    updateUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = UserService_1.default.getInstance();
            const randomNumber = req.params.randomNumber;
            const user = req.body;
            yield userService.updateUserById(parseInt(randomNumber), user);
            res.json('ok');
        });
    }
}
exports.default = UserController;
