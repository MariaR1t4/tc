import ProfessorService from "../service/ProfessorService";

import { Request, Response } from "express";
import ProfessorServiceLogin from "../service/login/ProfessorServiceLogin";

export default class ProfessorController {
  private static instance: ProfessorController;

  private constructor() {}

  public static getInstance() {
    if (!ProfessorController.instance) {
      ProfessorController.instance = new ProfessorController();
    }
    return ProfessorController.instance;
  }

  public async saveProfessor(req: Request, res: Response) {
    try {
      const professorService = ProfessorService.getInstance();
      const professor = req.body;
      const professorCriado = await professorService.saveProfessor(professor);
      res.json(professorCriado);
    } catch (err) {
      return res.json(400).send({ erro: "Não foi possivel criar professor" });
    }
  }

  public async listProfessor(req: Request, res: Response) {
    

    try {
      const professorService = ProfessorService.getInstance();
      res.json(await professorService.listProfessor());
    } catch (err) {
      return res.json(400).send({ erro: "Não foi possivel listar professor" });
    }
  }

  public async findProfessor(req: Request, res: Response) {
    try {
      const professorService = ProfessorService.getInstance();
      const id_professor = req.params.id_professor;
      res.json(await professorService.findProfessor(id_professor));
    } catch (err) {
      return res
        .json(400)
        .send({ erro: "Não foi possivel encontrar professor" });
    }
  }

  public async deleteProfessor(req: Request, res: Response) {
    try {
      const professorService = ProfessorService.getInstance();
      const id_professor = req.params.id_professor;
      await professorService.deleteProfessor(id_professor);
      res.json("Professor deletado");
    } catch (err) {
      return res.json(400).send({ erro: "Não foi possivel deletar professor" });
    }
  }

  public async updateProfessor(req: Request, res: Response) {
    try {
      const professorService = ProfessorService.getInstance();
      const id_professor = req.params.id_professor;
      const professor = req.body;
      await professorService.updateProfessor(id_professor, professor);
      res.json("Update feito");
    } catch (err) {
      return res.json(400).send({ erro: "Não foi possivel criar professor" });
    }
  }

  public async singUpBatchProfessor(req: Request, res: Response){
    console.log(req.file);
    await new ProfessorServiceLogin().signUpProfessorInBatch(req);
    res.json('ok')
  }
}
