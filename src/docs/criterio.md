# 📄 Padrão de Critério de Aceite

Este documento define o padrão utilizado neste chat para criação de critérios de aceite.

---

## 🧩 Estrutura padrão

```txt
Template para o criterio de aceite
-----------------------------------------------
cha: XXXXXXX - Descricao do problema
⏳ Chamado do suporte, tipo problema.
🔄 Atualizações: xxx.exe
📎 Arquivos: [numero do chamado](link)

🛠️ Solução:
Descrição da solução implementada

✅ Validações:
Validações que o QA deve realizar

🧪 Verificações e Teste
Mapa de testes para o QA:

Passo a passo detalhado

🔗 [suporte](link)
📁 [pasta com arquivos](link)
```

---

## 📌 Regras importantes

### 📎 Arquivos

* Sempre utilizar o formato de link:

  * `[numero do chamado](link)`

### 🔗 Links finais

* Sempre incluir:

  * Suporte
  * Pasta de arquivos
* **Não incluir link do Discord**

### 🛠️ Solução

* Deve ser clara e objetiva
* Explicar **causa + correção aplicada**

### ✅ Validações

* Devem ser diretas
* Focadas no comportamento esperado

### 🧪 Testes

* Sempre em formato de passo a passo
* Verbos no infinitivo (ex: *Acessar, Selecionar, Validar*)
* Evitar termos vagos
* Incluir exemplos quando necessário

### ⚠️ Observações

* Manter informações críticas do teste quando necessário (ex: códigos de produto, DOC, etc.)
* Incluir observações como:

  * uso de backup
  * necessidade de API

---

## 🎯 Boas práticas

* Evitar textos longos demais
* Ser técnico, mas claro
* Garantir que o QA consiga executar sem contexto adicional
* Sempre validar cenário real do problema

---

## 🧠 Padrão de emojis

| Seção        | Emoji |
| ------------ | ----- |
| Chamado      | ⏳     |
| Atualizações | 🔄    |
| Arquivos     | 📎    |
| Solução      | 🛠️   |
| Validações   | ✅     |
| Testes       | 🧪    |
| Suporte      | 🔗    |
| Pasta        | 📁    |

---

## ✅ Resultado esperado

O critério de aceite deve:

* Explicar o problema
* Mostrar a solução
* Permitir validação clara
* Guiar o QA no teste

---

Se seguir esse padrão, o critério fica consistente, claro e reutilizável 🚀
