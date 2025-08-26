# PROJETO DASHBOARD PARA GERENCIAR CONTEÚDOS

Esse repositório trabalha em conjunto com um repositório FRONTEND para consultar os dados, caso queira ver o repositório front end [clique aqui](https://github.com/GustavoCosta00/Hexagon-Frontend)

### `Como ele funciona`

Esse repositório tem a finalidade de criar o `BACKEND` de uma aplicação com STRAPI, aqui dentro você vai encontrar muitas coisas já prontas como: ROTAS, USUÁRIOS, ESTRUTURA DE PASTAS, ESTURURA DE ARQUIVOS e muito mais.


### `Primeiros Passos`

Clone esse repositório em sua máquina, abra o terminal do VS CODE e depois utilize o comando:

```
npm install
```
Esse comando leva em torno de 5 minutos, pois é necessário instalar muitas dependências

Depois crie um arquivo `.env` e coloque dentro dele:

```
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=zXWQt3Y9JWCkJiob9R5olw==,XB2UzuKvgBz4a0DMp2IMFA==,y8XBJIRAIbGmlrBIeUAtXA==,0m5eZq3GyBpl8F0TuKnB3Q==
API_TOKEN_SALT=o0SVYzqxrE+S4QJLeLoA8g==
ADMIN_JWT_SECRET=V17FMpezFSRoNWrjtygeUg==
TRANSFER_TOKEN_SALT=viqFi7W24S0gunRDHj6HKw==
ENCRYPTION_KEY=UWshpc0WMMTWSxGQ8xvmTw==

# Database
DATABASE_CLIENT=sqlite
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=false
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=6NVhcGbP8FoMsamTCLZk9Q==

```

Após isso, no seu terminal utilize o comando:

```
npm run dev
```
Em sua primeira vez rodando esse comando ele tente a levar um pouco mais de tempo

Você deverá ver uma tela parecida com essa:

<img width="1351" height="629" alt="Captura de Tela (44)" src="https://github.com/user-attachments/assets/81f21697-cd3f-4484-b791-cbca3d0fbf6e" />

## Após isso utilize as credenciais: adm@email.com & Hexagon123
Pronto! Você logou no sistema do administrador!



### `Como funciona dentro do STRAPI?`

Agora que você fez login, você terá uma página para editar os dados, localizado na lateral esquerda com um símbolo de *PENA*

Após clicar nessa PENA (com a HomePage selecionada) você verá 3 itens com diferentes ID´S, cada um deles representa um elemento diferente da HOMEPAGE sendo eles

1 -> BANNER

21 -> Seção HERO-MAIN-SECTION

10 -> Postagens


### `Como editar os dados?`

Em todos esses elementos você verá diferentes dados, você pode editá-los e depois clicar em **salvar** e depois **publicar**, dessa forma, os dados enviados em uma requisição serão esses atualizados

### `Como adicionar mais elementos?`

Por questões de segurança, legibilidade e UX/UI eu recomento não criar mais elementos, e sim apenas modificálos. Contudo, dentro do id **10** você pode criar mais postagens clicando em **Add a component to Home** e depois selecione **HeroSection** simbolizado por um foguete. Com isso você pode adicionar mais e mais conteúdos, além de poder trocar a ordem desses elementos segurando e arrastando com o botão localizado ao lado da **lixeira**

## RECADOS IMPORTANTES

- Os textos vão mudar a cor dentro do front end;
- Sempre que for adicionar uma imagem, procure adicionar uma imagem de tamanho grande;

