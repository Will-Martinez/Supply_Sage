# Supply_Sage

## Descrição
Aplicação web usada para controle de estoque de uma papelaria. Para esse projeto, foi feito o uso de programação orientada a objetos no back-end e de padrões de projetos para a criação dos produtos.

## Como iniciar o projeto
- Use dois terminais da forma que achar melhor. Navegue até o diretório Server dentro do projeto e rode o comando "npm start" para iniciar o servidor, depois no outro terminal,
  acesse o diretório Client e rode o comando "npm run dev". Prints abaixo exemplificando as instruções:

  - Server
  ![image](./Prints/Server_Terminal.PNG)

  - Client
  ![image](./Prints/Client_Terminal.PNG)

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
  ![image](./Prints/enviroment.PNG)

## Funcionamento da aplicação
- Criado no React rotas de Home e Products, conforme mostra nos prints abaixo.
- Rota home: Usuário tem acesso aos módulos do sistemas para escolher qual acessar (apenas o de estoque foi implementado, o restante é para exemplificar como seria a interface da aplicação)
- Rota products: Usuário tem acesso a uma tabela contendo todos os produtos cadastrados. Através dela é possível filtrar por texto, ordenar os dados de forma crescente ou decrescente,
  controlar número de cadastros por página, cadastrar novos produtos, atualizar produtos e deletar produtos.
  
  - Página Home
  ![image](./Prints/Home_Page.PNG)

  - Página Products:
  ![image](./Prints/Products_Page.PNG)

  - Exemplo de cadastro de um produto:
  ![image](./Prints/Create_Example.PNG)

  - Exemplo de remoção de um produto:
  ![image](./Prints/Delete_example.PNG)

  - Exemplo de filtro:
  ![image](./Prints/Filter_Example.PNG)

  Exemplo de dados mostrados por modal ao clicar em action de cada linha: 
  ![image](./Prints/Action_Example.PNG)

