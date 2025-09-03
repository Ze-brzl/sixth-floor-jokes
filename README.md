# 🎭 Sixth Floor Jokes

Uma aplicação web para gerenciar e compartilhar piadas, desenvolvida com Next.js e TypeScript.

## ✨ Funcionalidades

- **Buscar Piadas**: Pesquise piadas por número de identificação
- **Contador de Piadas**: Sistema para contar quantas vezes cada piada foi contada
- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela
- **API RESTful**: Endpoints para gerenciar piadas

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 14, React, TypeScript
- **Estilização**: Tailwind CSS
- **Backend**: API Routes do Next.js
- **Banco de Dados**: Sistema de dados integrado
- **Deploy**: Vercel (recomendado)

## 📋 Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

## 🛠️ Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/sixth-floor-jokes.git
cd sixth-floor-jokes
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Execute o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

### 4. Acesse a aplicação

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📱 Como Usar

1. **Página Inicial**: Navegue pela aplicação
2. **Buscar Piada**: Acesse `/find-joke` e digite o número da piada
3. **Nova Piada**: Acesse `/new-joke` para adicionar novas piadas
4. **Contador**: Clique em "Aumentar contagem" para registrar que a piada foi contada

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── api/jokes/          # API endpoints para piadas
│   ├── components/          # Componentes reutilizáveis
│   ├── find-joke/          # Página de busca de piadas
│   ├── new-joke/           # Página para adicionar piadas
│   └── lib/                # Utilitários e configurações
├── models/                  # Modelos de dados
└── globals.css             # Estilos globais
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub ao Vercel
2. O deploy será automático a cada push
3. Acesse: [https://vercel.com](https://vercel.com)

### Outras Plataformas

- **Netlify**: Compatível com Next.js
- **Railway**: Deploy simples e rápido
- **AWS/GCP**: Para projetos empresariais

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Seu Nome** - [GitHub](https://github.com/seu-usuario)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
