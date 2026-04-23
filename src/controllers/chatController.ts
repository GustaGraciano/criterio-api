import type { Request, Response } from "express";
import { gerarResposta } from "../services/ollamaService.js";
import type { CriterioDTO } from "../dtos/criterioDTO.js";

export const chat = async (req: Request, res: Response) => { 
  try {
    const dados = req.body as CriterioDTO;

    if (!dados.cha || !dados.descricao) {
      return res.status(400).json({
        erro: "Campos obrigatórios não informados"
      });
    }

    const sResposta = await gerarResposta(dados);

    return res.json({ resposta: sResposta });

  } catch (erro) {
    console.error(erro);

    return res.status(500).json({
      erro: "Erro ao gerar resposta"
    });
  }
};