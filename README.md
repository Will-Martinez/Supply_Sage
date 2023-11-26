# Supply_Sage

## Descrição
Aplicação web usada para controle de estoque de uma papelaria.

## Como iniciar o projeto
- Use dois terminais da forma que achar melhor. Navegue até o diretório Server dentro do projeto e rode o comando "npm start" para iniciar o servidor, depois no outro terminal,
  acesse o diretório Client e rode o comando "npm run dev". Prints abaixo exemplificando as instruções:

  - Server
  ![image](./prints/Server_Terminal.PNG)

  - Client
  ![image](./prints/Client_Terminal.PNG)

## Tecnologias utilizadas

- Aplicação construída usando requisições somente http por conta de praticidade.
- Utilizado no back-end Nodejs e Typescript na versão 20.9.0 e como base de dados o PostgreSQL na versão 16
  - Links para instalação de ambos ( https://nodejs.org/en/download, https://www.postgresql.org/download/ )
- Utilizado no front-end React e Vite em sua versão 5.0

## Requisitos para o funcionamento do projeto
- Ter o Nodejs em sua versão 18+, junto com o npm.
- Ter instalado o PostgreSQL como serviço para uso local.
- Configurar um arquivo .env conforme mostra o print abaixo, ou modificar a classe que retorna a configuração de conexão com o banco.

  - arquivo .env de exemplo:
  ![image](./prints/enviroment.PNG)

## Funcionamento da aplicação
- Criado no React rotas de Home e Products, conforme mostra nos prints abaixo.
  aqui vai o print de home e products
- Rota home: Usuário tem acesso aos módulos do sistemas para escolher qual acessar (apenas o de estoque foi implementado, o restante é para exemplificar como seria a interface da aplicação)
- Rota products: Usuário tem acesso a uma tabela contendo todos os produtos cadastrados. Através dela é possível filtrar por texto, ordenar os dados de forma crescente ou decrescente,
  controlar número de cadastros por página, cadastrar novos produtos, atualizar produtos e deletar produtos.
  
  - Página Home
  ![image](./prints/Home_Page.PNG)

  - Página Products:
  ![image](./prints/Products_Page.PNG)

  - Exemplo de cadastro de um produto:
  ![image](./prints/Create_Example.PNG)

  - Exemplo de remoção de um produto:
  ![image](./prints/Delete_Example.PNG)

  - Exemplo de filtro:
  ![image](./prints/Filter_Example.PNG)

  Exemplo de dados mostrados por modal ao clicar em action de cada linha: 
  ![image](./prints/Action_Example.PNG)

