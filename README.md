# Star Wars Favorites - Vue.js Application

## Descrição

Este projeto é uma aplicação web desenvolvida em Vue.js que permite aos usuários explorar personagens do universo Star Wars e gerenciar seus favoritos. A aplicação consome dados da SWAPI (Star Wars API) e permite adicionar imagens personalizadas para os personagens favoritos.

## Tecnologias Utilizadas

-Vue.js 3 (com TypeScript)

-Vue Router (para navegação entre telas)

-Pinia (para gerenciamento de estado)

-SCSS (para estilização)

-Fetch API (para consumo da SWAPI)

## Funcionalidades

-Listagem de personagens da SWAPI

-Adição de personagens aos favoritos

-Possibilidade de adicionar uma imagem para cada personagem favorito

-Remoção de favoritos

-Expansão dos cards para exibir informações detalhadas (nome, altura, peso, ano de nascimento, etc.)

## Estrutura do Projeto
```
star-wars-app/
│── src/
│   ├── assets/            # Imagens, fontes, etc.
│   ├── components/        # Componentes reutilizáveis
│   ├── views/             # Páginas principais
│   ├── store/             # Gerenciamento de estado (Pinia)
│   ├── router/            # Configuração de rotas
│   ├── styles/            # Arquivos SCSS
│   ├── App.vue            # Componente raiz
│   ├── main.ts            # Ponto de entrada do Vue
│── public/                # Arquivos estáticos
│── package.json
│── vite.config.ts         # Configuração do Vite
```
## Como Rodar o Projeto

### 1. Clone este repositório:

```git clone https://github.com/seu-usuario/star-wars-app.git```

### 2. Acesse o diretório do projeto:

```cd star-wars-app```

### 3. Instale as dependências:

```npm install```

### 4. Inicie o servidor de desenvolvimento:

```npm run dev```

### 5. Acesse no navegador:

```http://localhost:5173```

## Contribuição

Sinta-se à vontade para abrir issues e pull requests caso queira contribuir com melhorias no projeto!

## Licença

Este projeto é de uso livre para fins acadêmicos e educacionais.

