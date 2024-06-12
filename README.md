# Sistema de Registro de Ponto dos Funcionários

Este é um sistema de registro de ponto dos funcionários construído com NestJS. O sistema permite que os funcionários registrem seus pontos e mantém o controle de seus horários de entrada. Inclui funcionalidades para gerenciar funcionários e seus registros de ponto.

## Tecnologias Utilizadas

- **NestJS**: Um framework Node.js  para construção de aplicações eficientes, confiáveis e escaláveis.
- **TypeScript**: Um superconjunto sintático estrito de JavaScript que adiciona tipagem estática opcional.
- **Docker**: Containers para o banco de dados.
- **PostgreSQL**: Um banco de dados relacional open-source.
- **Jest**: Um framework de testes JavaScript focado na simplicidade.
- **TypeORM**: Um ORM para TypeScript e JavaScript (ES7, ES6, ES5).

## Funcionalidades

- Gerenciamento de funcionários (criar, ler, atualizar, excluir).
- Gerenciamento de registros de ponto (registrar e visualizar pontos).
- Integração com banco de dados relacional usando TypeORM.
- Autenticação JWT (melhoria opcional).

## Começando

### Pré-requisitos

- Node.js (>= 14.x)
- npm (>= 6.x)
- PostgreSQL

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seuusuario/employee-clockin-system.git
   cd employee-clockin-system

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Suba o banco de dados via Docker:
   ```sh
   docker-compose up -d
   ```

4. Inicie a aplicação NestJS:
   ```sh
   npm run start
   ```

5. Para modo de desenvolvimento com recarregamento automático:
   ```sh
   npm run start:dev
  ```



   ### Endpoints da API

#### Funcionários

- **GET /employees**: Recuperar todos os funcionários.
- **GET /employees/:id**: Recuperar um funcionário pelo ID.
- **POST /employees**: Criar um novo funcionário.
  - Corpo da Requisição: `{ "name": "string", "email": "string" }`
- **PUT /employees/:id**: Atualizar um funcionário pelo ID.
  - Corpo da Requisição: `{ "name": "string", "email": "string" }`
- **DELETE /employees/:id**: Excluir um funcionário pelo ID.

#### Registros de Ponto

- **GET /clock-ins**: Recuperar todos os registros de ponto.
- **GET /clock-ins/employee/:employeeId**: Recuperar todos os registros de ponto para um funcionário específico.
- **POST /clock-ins/:employeeId**: Registrar um ponto para um funcionário.
