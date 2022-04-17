# Teste E2E

Pequena aplicação em Node.js desenvolvida com o objetivo de escrever testes E2E utilizando Jest como ferramente de escrita de testes


## Stack utilizada

- [Node.JS](https://nodejs.org/en/)
- [Jest](https://jestjs.io/pt-BR/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)

## Instalação

Faça o clone do projeto e acesse a pasta

```bash
  cd teste_e2e
  yarn install
```
    
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

```bash
DATABASE_URL
```

Em seguida criar o arquivo .env.testing
```bash
DATABASE_USER
DATABASE_PASS
DATABASE_HOST
DATABASE_PORT
DATABASE_NAME
```
## Rodando os Testes

Para rodar os testes, rode o seguinte comando

```bash
  yarn run test
```

Para rodar os testes E2E, rode o seguinte comando

```bash
  yarn run test:e2e
```