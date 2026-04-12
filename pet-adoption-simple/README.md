# 🐾 PetAdoção - Plataforma de Doação de Animais

Uma plataforma simples e elegante para facilitar a doação de animais, construída com **HTML, CSS e JavaScript puro**.

## ✨ Características

- **Interface Vibrante**: Design moderno com cores alegres (vermelho, rosa, roxo, ciano)
- **Busca Interativa**: Filtro por tipo de animal e região
- **Galeria de Cards**: Exibição elegante dos animais disponíveis
- **Detalhes do Animal**: Página com informações completas
- **Formulário de Adoção**: Coleta de dados pessoais e upload de vídeo
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Simples**: Sem frameworks complexos, apenas JavaScript vanilla

## 🚀 Como Usar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Iniciar o Servidor
```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`

### 3. Acessar no Navegador
Abra seu navegador e acesse:
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
pet-adoption-simple/
├── index.html          # Página HTML principal
├── styles.css          # Estilos CSS
├── app.js              # Lógica JavaScript
├── server.js           # Servidor Express
├── package.json        # Dependências
├── candidates.json     # Dados de candidatos (gerado automaticamente)
├── uploads/            # Pasta para vídeos enviados (criada automaticamente)
└── README.md           # Este arquivo
```

## 🎯 Funcionalidades

### 1. Página Inicial
- Busca por nome ou raça do animal
- Filtro por tipo de animal (Cão, Gato, Coelho, etc.)
- Filtro por região (São Paulo, Rio de Janeiro, etc.)
- Galeria de cards com 10 animais de exemplo

### 2. Detalhes do Animal
- Foto do animal
- Informações completas (raça, idade, peso, região)
- Descrição detalhada
- Botão "Veja se você é apto" para iniciar processo de adoção

### 3. Formulário de Adoção
- Campo para nome completo
- Campo para email
- Campo para telefone
- Campo para endereço completo
- Upload de vídeo do local onde o animal viverá
- Validação de campos obrigatórios
- Mensagem de sucesso após envio

## 📊 Dados de Animais

O projeto vem com 10 animais de exemplo pré-carregados:
- Luna (Gato Persa)
- Max (Cão Golden Retriever)
- Bella (Cão Labrador)
- Miau (Gato Siamês)
- Rex (Cão Pastor Alemão)
- Snowball (Coelho Angorá)
- Tweety (Pássaro Canário)
- Shelly (Tartaruga Terrestre)
- Fluffy (Gato Angorá)
- Charlie (Cão Poodle)

## 💾 Armazenamento de Dados

### Candidatos
Os dados das candidaturas são salvos em `candidates.json` com as seguintes informações:
- ID do animal
- Nome completo
- Email
- Telefone
- Endereço
- Nome do arquivo de vídeo (se enviado)
- Status (pending, approved, rejected)
- Data de criação

### Vídeos
Os vídeos enviados são salvos na pasta `uploads/` com nomes únicos para evitar conflitos.

## 🎨 Personalização

### Adicionar Novos Animais
Edite o array `petsData` no arquivo `app.js`:

```javascript
{
    id: 11,
    name: "Seu Animal",
    type: "Tipo",
    breed: "Raça",
    age: "Idade",
    weight: "Peso",
    region: "Região",
    description: "Descrição",
    image: "URL da imagem"
}
```

### Alterar Cores
Modifique as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-red: #FF6B6B;
    --primary-pink: #FF8C9B;
    --primary-purple: #9B59B6;
    /* ... outras cores ... */
}
```

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- **Desktop**: Layout em grid de 3 colunas
- **Tablet**: Layout em grid de 2 colunas
- **Mobile**: Layout em 1 coluna

## 🔒 Validação

- Campos obrigatórios do formulário são validados
- Apenas arquivos de vídeo são aceitos no upload
- Limite de tamanho: 100MB por vídeo
- Email é validado como formato correto

## 📝 API Endpoints

### POST `/api/submit-adoption`
Envia uma candidatura de adoção com dados do candidato e vídeo.

**Parâmetros (FormData):**
- `petId` (número): ID do animal
- `fullName` (texto): Nome completo
- `email` (texto): Email
- `phone` (texto): Telefone
- `address` (texto): Endereço
- `videoFile` (arquivo): Vídeo do local (opcional)

**Resposta:**
```json
{
    "success": true,
    "message": "Candidatura enviada com sucesso!",
    "candidate": { ... }
}
```

### GET `/api/candidates`
Retorna lista de todas as candidaturas.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript ES6
- **Backend**: Node.js, Express.js
- **Upload**: Multer
- **CORS**: Habilitado para requisições cross-origin

## 📄 Licença

MIT

## 👨‍💻 Autor

Desenvolvido com ❤️ para facilitar a adoção de animais.

---

**Dúvidas ou sugestões?** Sinta-se livre para contribuir ou relatar problemas!
