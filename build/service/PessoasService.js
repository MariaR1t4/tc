"use strict";
/*import Pessoas from "../models/entities/Professor";
import PessoaRepositorie from "../models/entities/repositories/ProfessorRepository";


export default class PessoaService {
    private constructor() {

    }
    criaPessoas(pessoas: Pessoas[]) {
        throw new Error('Method not implemented.');
    }
    private static instance: PessoaService;
    //create a new instance
    public static getInstance() {
        if (!PessoaService.instance) {
            PessoaService.instance = new PessoaService();
        };
        return PessoaService.instance;
    }
    //save a instance
    public async savePessoas(obj: Pessoas): Promise<Pessoas> {
        return await PessoaRepositorie.save(obj);
    }
    public async getPessoas(): Promise<Pessoas[]> {
        return await PessoaRepositorie.find();
    }
    public async deletePessoasById(id: number): Promise<void> {
        await PessoaRepositorie.delete(id);
    }
    public async getPessoasById(id: number): Promise<Pessoas> {
        const PessoasNow = await PessoaRepositorie.findOneBy({ id });
        if (PessoasNow) {

            return Promise.resolve(PessoasNow);
        }
        return Promise.reject();
    }
    public async updatePessoasById(id: number, pessoas: Pessoas): Promise<void> {
        const PessoasNow = await PessoaRepositorie.findOneBy({ id: id });
        if (PessoasNow) {
            PessoasNow.email = pessoas.email;
            PessoasNow.password = pessoas.password;
            await PessoaRepositorie.save(PessoasNow)
        }
    }
}*/ 
