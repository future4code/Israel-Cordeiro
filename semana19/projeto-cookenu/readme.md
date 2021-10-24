

## Projeto Cookenu

## Desenvolvedor

Israel Martins Cordeiro

## Tecnologias utilizadas

TypeScript 

## Funcionalidades

-Endpoint de Criar um Usuário

-Endpoint de fazer Login 

-Endpoint de buscar Informações do seu Perfil

-Endpoint de buscar Informações de outros usuários através do ID

-Endpoint de Criar Receitas

-Endpoint de buscar receitas através do ID


## Fluxo de criação

-Primeiro criei um usuário, logo após bati no endpoint de criar login com o email e senha, logo após buscaquei informações do meu perfil com o token que foi gerado no login, depois busquei informações de outros usuários pelo ID e pelo Token que foi gerado. Criei o endpoint de criar receitas  passando um token no headers válido e chamando o body, logo após busquei a receita que criei com o id da receita e um token de usuário válido.

## Status do Projeto 
- Funcionalidades Básicas OK
- Criar Usuário - Ok
- Fazer Login -OK
- Buscar Informações do meu perfil -OK
- Buscar Informações dos usuários -OK
- Criar Receita -OK
- Buscar receita através do ID - OK

## Tabelas

-No arquivo Migrations você terá acesso as tabelas que criei e pode baixa-las no seu banco e usar, rode com o comando npm run migrations.



## Fotos Postman 


# Criando um Usuário : endpoint : http://localhost:3003/signup


# Fazendo Login : endpoint : http://localhost:3003/login


# Buscando Informações do seu Perfil : endpoint: http://localhost:3003//user/profile



# Buscando Informações dos Usuários: endpoint : http://localhost:3003//user/:id



# Criando Receita : endpoint : http://localhost:3003/recipe


# Buscando Receita pelo ID  : endpoint : http://localhost:3003/recipe/:id


## Link do deploy
https://git.heroku.com/labenusystem04.git