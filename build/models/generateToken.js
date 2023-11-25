"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateToken = () => {
    let id_aula = [];
    let num = Math.floor(Math.random() * 42) + 48;
    for (let i = 0; i <= 6; i++) {
        num = Math.floor(Math.random() * 42);
        if (num >= 10 && num <= 17)
            num = 0;
        id_aula[i] = String.fromCharCode(num + 48);
    }
    return id_aula.join('');
}; //:string[] | undefined{
//atributo estatico
exports.default = generateToken;
