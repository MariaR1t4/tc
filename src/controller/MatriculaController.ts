import { Request, Response } from "express";

import MatriculaService from "../service/MatriculaService";

export default class MatriculaController {
    private static instance: MatriculaController;

    private constructor() {}

    public static getInstance() {
        if (!MatriculaController.instance) {
            MatriculaController.instance = new MatriculaController();
        }
        return MatriculaController.instance;
    }

    public async saveMatricula(req: Request, res: Response) {
        try {
            const matriculaService = MatriculaService.getInstance();
            const matricula = req.body;
            const matriculaCriada = await matriculaService.saveMatricula(matricula);
            res.json(matriculaCriada);
        } catch (err) {
            console.log(err);
            return res.status(400).send({ err: "nao foi possivel criar matrícula" });
        }
    }
    public async listMatricula(req: Request, res: Response) {
        try {
            const matriculaService = MatriculaService.getInstance();
            res.json(await matriculaService.listMatricula());
        } catch (err) {
            return res.json(400).send({ erro: "Não foi possivel listar matrículas" });
        }
    }

    public async findMatriculaById(req: Request, res: Response) {
        try {
            const matriculaService = MatriculaService.getInstance();
            const id_matricula = req.params.id_matricula;
            if (!id_matricula) {
                res.status(400).send({ err: "id nao encontrado" });
            }
            res.json(await matriculaService.findMatriculaById(id_matricula));
        } catch (err) {
            console.log(err);
            return res.status(400).send({ err: "nao foi possivel encontrar matrícula" });
        }
    }
    public async deleteMatricula(req: Request, res: Response) {
        try {
            const matriculaService = MatriculaService.getInstance();
            const id_matricula = req.params.id_matricula;
            await matriculaService.deleteMatricula(id_matricula);
            res.json("Matrícula deletada");
        } catch (err) {
            console.log(err);
            return res.status(400).send({ err: "nao foi possivel encontrar matrícula" });
        }
    }
}