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
const UserRepositorie_1 = __importDefault(require("../models/entities/repositories/UserRepositorie"));
class UserService {
    constructor() {
    }
    criaPessoas(user) {
        throw new Error('User was not implemented');
    }
    //create a new instance
    static getInstance() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        ;
        return UserService.instance;
    }
    //save a instance
    saveUser(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserRepositorie_1.default.save(obj);
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserRepositorie_1.default.find();
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserRepositorie_1.default.findOneBy({ randomNumber: id });
        });
    }
    deleteUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield UserRepositorie_1.default.delete(id);
        });
    }
    updateUserById(id, User) {
        return __awaiter(this, void 0, void 0, function* () {
            const UserNow = yield UserRepositorie_1.default.findOneBy(({ randomNumber: id }));
            if (UserNow) {
                //            UserNow.rm = User.rm;
                UserNow.name = User.name;
                UserNow.email = User.email;
                UserNow.telefone = User.telefone;
                UserNow.password = User.password;
                yield UserRepositorie_1.default.save(UserNow);
            }
            Promise.resolve();
        });
    }
}
exports.default = UserService;
