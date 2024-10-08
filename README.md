# EmoTrack

EmoTrack é uma aplicação de rastreamento de emoções alimentada por IA que analisa a entrada do usuário para determinar o estado emocional do seu dia.

## Começando

Estas instruções ajudarão você a configurar e executar o projeto EmoTrack em sua máquina local.

### Pré-requisitos

- Node.js (v14 ou posterior)
- npm (geralmente vem com o Node.js)
- Git

### Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/willianctti/emotrack-fullstack
   cd emotracker
   ```

2. Instale as dependências:
   ```
   cd backend/emotracker-ia
   npm install
   ```

3. Configure o banco de dados:
   A aplicação usa SQLite, que não requer configuração adicional. O arquivo do banco de dados será criado automaticamente quando você executar a aplicação.

### Executando a Aplicação

1. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

2. Abra seu navegador e acesse `http://localhost:3000`

## Uso

1. Na página principal, você verá um formulário onde pode inserir como foi seu dia.
2. Digite uma descrição do seu dia e clique em "Enviar".
3. A IA analisará sua entrada e fornecerá uma resposta indicando se você teve um dia bom, um dia ruim ou um dia comum.

## Estrutura do Projeto

- `src/components/InteractionForm.tsx`: Contém o formulário para entrada do usuário
- `src/pages/api/interaction.ts`: Lida com o endpoint da API para processar a entrada do usuário
- `src/lib/ia.ts`: Contém a lógica de IA para analisar a entrada do usuário
- `src/lib/db.ts`: Lida com operações de banco de dados

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

## Licença

Este projeto está licenciado sob a Licença ISC.

## Agradecimentos

- Este projeto usa [brain.js](https://github.com/BrainJS/brain.js) para processamento de linguagem natural.
- Construído com [Next.js](https://nextjs.org/) e [React](https://reactjs.org/).
