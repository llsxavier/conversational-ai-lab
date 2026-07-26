# Arquitetura inicial

A primeira versão utiliza uma estrutura simples:

```text
HTTP route
   ↓
repository em memória
   ↓
dados
```

À medida que o projeto evoluir, serão introduzidos:

```text
route
  ↓
controller
  ↓
service
  ↓
repository
  ↓
database
```

A arquitetura será ampliada somente quando uma tarefa justificar a mudança.
