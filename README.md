# CodeLeap Network

Uma aplicação web simples de rede social desenvolvida com Next.js, onde usuários podem criar e visualizar posts após fazer login com um nome de usuário.

## Funcionalidades

- **Login Simples**: Usuários fazem login inserindo um nome de usuário.
- **Criar Posts**: Formulário para criar novos posts com título e conteúdo.
- **Visualizar Posts**: Lista de posts criados, exibindo o autor, título, conteúdo e tempo decorrido desde a publicação.
- **Interface Responsiva**: Design moderno usando Tailwind CSS e componentes reutilizáveis.

## Tecnologias Utilizadas

- **Next.js 16**: Framework React para aplicações web.
- **TypeScript**: Tipagem estática para JavaScript.
- **Tailwind CSS**: Framework CSS para estilização.
- **React Query**: Gerenciamento de estado e cache para requisições API.
- **Axios**: Cliente HTTP para requisições.
- **React Hook Form + Zod**: Validação de formulários.
- **Radix UI**: Componentes de UI acessíveis.
- **Lucide React**: Ícones.
- **Date-fns**: Manipulação de datas.

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd codeleap
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila a aplicação para produção.
- `npm run start`: Inicia o servidor de produção.
- `npm run lint`: Executa o linter ESLint.

## Estrutura do Projeto

```
src/
├── app/
│   ├── api/posts/          # API routes para posts
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de login
│   └── home/
│       └── page.tsx        # Página principal com posts
├── assets/                 # Assets estáticos
├── components/
│   ├── ui/                 # Componentes de UI reutilizáveis
│   ├── postForm.tsx        # Formulário para criar posts
│   ├── postItem.tsx        # Componente para exibir um post
│   ├── postList.tsx        # Lista de posts
│   └── index.ts            # Exportações dos componentes
├── hooks/
│   └── usePosts.tsx        # Hook personalizado para posts
├── models/
│   └── post.ts             # Modelo de dados para posts
├── services/
│   ├── api.ts              # Configuração da API
│   └── react-query-provider.tsx # Provider do React Query
└── utils/
    └── getDistanceToNow.ts # Utilitário para datas
```

## Como Usar

1. Na página inicial, insira um nome de usuário e clique em "ENTER".
2. Na página home, você pode:
   - Criar um novo post usando o formulário no topo.
   - Visualizar posts existentes na lista abaixo.
3. Os posts mostram o nome do autor, título, conteúdo e há quanto tempo foram publicados.

## API

A aplicação utiliza uma API REST para gerenciar posts. As rotas estão definidas em `src/app/api/posts/`.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto é privado e não possui licença pública.
