# Checklist de revisão

## Funcionamento

- Os critérios de aceite foram cumpridos?
- O status HTTP está correto?
- A resposta segue o contrato?
- Casos de erro foram considerados?

## TypeScript

- Há `any`?
- Os tipos representam corretamente os dados?
- Há coerções desnecessárias?
- O compilador está ajudando ou sendo contornado?

## Testes

- O teste verifica comportamento?
- Há caso feliz?
- Há casos de erro relevantes?
- O teste depende de detalhes internos?

## Manutenção

- Os nomes são claros?
- A função possui uma responsabilidade?
- Há duplicação?
- A mudança ficou limitada ao escopo?
