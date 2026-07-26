# API-001 — Listar clientes

## História

Como atendente, quero consultar os clientes cadastrados para identificá-los
durante um atendimento.

## Situação inicial

O endpoint existe, mas responde com HTTP 501.

O repositório em memória já possui uma função `listCustomers`.

## Critérios de aceite

- `GET /customers` deve responder com HTTP 200;
- a resposta deve conter `data`;
- a resposta deve conter `total`;
- quando não houver clientes, `data` deve ser um array vazio;
- quando não houver clientes, `total` deve ser zero;
- o teste automatizado deve passar;
- `npm run typecheck` deve terminar sem erros.

## Restrições

- não usar `any`;
- não instalar bibliotecas;
- não alterar o teste para fazê-lo passar;
- usar a função existente no repositório;
- não implementar novas rotas.

## Definição de pronto

- critérios de aceite atendidos;
- testes passando;
- TypeScript sem erros;
- código revisado;
- retrospectiva preenchida.

## Retrospectiva

Preencha ao concluir:

### O que estava errado?

### Como investiguei?

### Qual solução escolhi?

### Que conceito aprendi?

### O que faria diferente?
