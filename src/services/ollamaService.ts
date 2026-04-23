import { Ollama } from "ollama";
import fs from "fs";
import path from "path";
import "dotenv/config";

const ollama = new Ollama({
  host: "https://ollama.com",
  headers: {
    Authorization: "Bearer " + process.env.OLLAMA_API_KEY,
  },
});

const sTemplate = fs.readFileSync(
  path.resolve(process.cwd(), "src", "docs", "criterio.md"),
  "utf-8"
);

export const gerarResposta = async (dados: any) => {
  const sPrompt = `
${sTemplate}

Dados:
CHA: ${dados.cha}
Descrição: ${dados.descricao}
Atualizações: ${dados.atualizacoes}
Link: ${dados.link}
Pasta: ${dados.pasta}
Solução: ${dados.solucao}
Testes: ${Array.isArray(dados.testes) ? dados.testes.join("\n") : dados.testes}

⚠️ IMPORTANTE:
Retorne SOMENTE o critério de aceite final.
Não escreva nenhuma frase como "Template para o criterio de aceite" antes ou depois"
`;

  const response = await ollama.chat({
    model: "gpt-oss:120b",
    messages: [
      { role: "system", content: "Você é especialista em critérios de aceite." },
      { role: "user", content: sPrompt }
    ],
    stream: false
  });

  return response.message.content;
};