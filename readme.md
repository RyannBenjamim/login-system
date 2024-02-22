# Sistema de Login com ReactJS, Styled Components e Fastify

Este repositório contém um sistema de login desenvolvido com ReactJS e Styled Components para o frontend, e Fastify um framework Node.js, para o backend. A API conecta a interface com um banco de dados MySQL para guardar os dados dos usuários.

## Funcionalidades

- **Login**: Página de autenticação onde os usuários podem fazer login.

- **Cadastro**: Funcionalidade que permite os usuários se cadastrarem no sistema.

## Tecnologias Utilizadas

- **Frontend**: ReactJS e Styled Components.

- **Backend**: Fastify (Node.js).

- **Banco de Dados**: MySQL.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- Node.js
- npm
- MySQL

## Configuração do Banco de Dados

1. Crie um banco de dados no MySQL para armazenar as informações dos usuários.

2. Configure as credenciais do banco de dados em um arquivo `.env`:

```env
HOST=seu_host
USER=seu_usuario
PASSWORD=sua_senha
DATABASE=seu_banco_de_dados
```

3. Crie um segredo para os tokens em um arquivo `.env`:

```env
TOKENSECRET=seu_segredo
```

## Instalação

1. Clone este repositório:

```
git clone https://github.com/RyannBenjamim/login-system
```

2. Instale as dependências do frontend:

```
cd front-end
npm install
```

3. Instale as dependências do backend:

```
cd api
npm install
```

## Execução

1. Execute o backend:

```
cd api
npm run dev
```

1. Execute o frontend:

```
cd front-end
npm run dev
```

## Screenshots

![screencapture-localhost-5173-2024-02-22-13_12_42](https://github.com/RyannBenjamim/login-system/assets/87036259/26dbc08f-8e06-477f-89ff-c59bd1ea70f9)

![screencapture-localhost-5173-signup-2024-02-22-13_13_04](https://github.com/RyannBenjamim/login-system/assets/87036259/fa3b1619-e63a-4441-9899-58d43521a52a)

## Contato

Se você tiver alguma dúvida ou sugestão sobre este projeto, sinta-se à vontade para entrar em contato com Ryan Costa Benjamim via [meu site](https://ryancostaportfolio.netlify.app/)

Espero que este README ajude você a entender melhor o projeto! Sinta-se à vontade para personalizá-lo de acordo com suas necessidades e informações específicas.
