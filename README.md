# Backend Projeto Card Game - Ethernal Duel

<div align="center">

![EtheraelDuel](assets/logo.png)

### Projeto de um básico card game feito por mim! - Vinicius Araujo
"Imagens by IA"

</div>

## Índice
- <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a>
- <a href="#funcionalidades">Funcionalidades</a>
- <a href="#como-rodar-este-projeto">Como rodar este projeto?</a>
- <a href="#outras-informações">Outras informações</a>

## Tecnologias Utilizadas

1. [Node.js](https://nodejs.org/en)
2. [Express](https://expressjs.com/pt-br/)
3. [Prisma](https://www.prisma.io/)
4. [JWT](https://jwt.io/)

## Funcionalidades

 - [x] Disponibilizar rotas para o funcionamento do Aplicativo Mobile

## Como rodar este projeto

```bash
# Clone este repositorio
$ git clone https://github.com/galvao22/cardGame_trunfo_backend.git

# Instale as dependencias
$ npm install

# Execute a aplicaçao
$ npm run dev
```

## Outras informações

Para o cadastro de cartas salve as imagens em 'src/assets/cards_pokemon'. Utilize o insominia ou outro programa de sua escolha, fazendo uma requisição post com os atributos a seguir para 'http://XXXX:3333/carta'
```JSON
{
	"descricao": "Nome",
	"img_carta": "imagem.png",
	"poder_ataque": 10,
	"poder_defesa": 8
}
```

- OBS: Não esqueça de passar o 'Bearer token' retornardo na requisição de login.

- OBS²: Modifique no arquivo .env o DATABASE_URL de acordo com as configurações do seu banco.

- Autor: Vinicius Araujo
- [Linkedin](https://www.linkedin.com/in/vinicius-araujo-galvao-de-sousa-9b8a48125/)