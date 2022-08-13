# Agenda Telefônica
## Tecnologias utilizadas:

- React 
- React Router Dom
- Node
- Sequelize
- Postgre SQL Elephant 
- HTML/CSS

## Motivação:
Projeto realizado com intuito de aprofundar meus conhecimentos em back-end e front-end, utilizando a linguagem Javascript

## Armazenamento de dados:
Os dados são persistidos em uma instancia em nuvem do Postgre Elephant SQL<br/>
A instância possui uma tabela que está estruturada da seguinte forma:
<table><td>id</td><td>name</id><td>phone</td><td>email</id><td>image</td></table>

## Funcionalidades:
As açoes que o usuário poderá realizar são: 
- Adicionar contato (nome, telefone, email, foto)
- Editar contato
- Exluir contato

## Atualizações futuras
Ainda não é possível carregar uma salvar imagens para os contatos, o sistema salva apenas textos digitados manualmente no campo input de imagem.
Futuramente, as imagens ficarão salvas em uma pasta no servidor com a referência salva no banco de dados

## Para baixar o projeto:
```
Clone o repositorio:
$ git clone https://github.com/evertonnasac/agenda-telefonica-react-node

Instale as dependências
$ npm install

Entre no diretório backend para subir o servidor:
$ cd backend

Execute o comando
$ node index.js

Entre no diretório frontend:
$ cd frontend

Execute o comando
$ npm start


```



