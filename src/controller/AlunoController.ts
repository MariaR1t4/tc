import { Request, Response } from "express";

import AlunoService from "../service/AlunoService";
import AlunoServiceLogin from "../service/login/AlunoServiceLogin";

export default class AlunoController {
  private static instance: AlunoController;

  private constructor() {}

  public static getInstance() {
    if (!AlunoController.instance) {
      AlunoController.instance = new AlunoController();
    }
    return AlunoController.instance;
  }

  public async saveAluno(req: Request, res: Response) {
    try {
      const alunoService = AlunoService.getInstance();
      const aluno = req.body;
      const alunoCriado = await alunoService.saveAluno(aluno);
      res.json(alunoCriado);
    } catch (err) {
      console.log(err);
      return res.status(400).send({ err: "nao foi possivel criar aluno" });
    }
  }
  public async listAluno(req: Request, res: Response) {
    try {
      const alunoService = AlunoService.getInstance();
      res.json(await alunoService.listAluno());
    } catch (err) {
      return res.json(400).send({ erro: "Não foi possivel listar aluno" });
    }
  }

  public async findAlunoById(req: Request, res: Response) {
    try {
      const alunoService = AlunoService.getInstance();
      const rm = req.params.rm;
      if (!rm) {
        res.status(400).send({ err: "rm nao encontrado" });
      }
      res.json(await alunoService.findAlunoById(parseInt(rm)));
    } catch (err) {
      console.log(err);
      return res.status(400).send({ err: "nao foi possivel encontrar aluno" });
    }
  }
  public async deleteAluno(req: Request, res: Response) {
    try {
      const alunoService = AlunoService.getInstance();
      const rm = req.params.rm;
      await alunoService.deleteAluno(parseInt(rm));
      res.json("Aluno deletado");
    } catch (err) {
      console.log(err);
      return res.status(400).send({ err: "nao foi possivel encontrar aluno" });
    }
  }

  public async updateAluno(req: Request, res: Response) {
    try {
      const alunoService = AlunoService.getInstance();
      const rm = req.params.rm;
      const aluno = req.body;
      await alunoService.updateAluno(parseInt(rm), aluno);
      res.json("Atualização feita com sucesso!");
    } catch (err) {
      console.log(err);
      return res.status(400).send({ err: "nao foi possivel encontrar aluno" });
    }
  }

  public async singUpBatchAluno(req: Request, res: Response){
    console.log(req.file);
    await new AlunoServiceLogin().signUpAlunosInBatch(req);
    res.json('ok')
  }
}
