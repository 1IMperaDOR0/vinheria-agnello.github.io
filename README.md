# Front-End - Vinheria Agnello

## 🧠 1. Descrição

A Vinheria Agnello é uma empresa familiar com mais de 15 anos de tradição no mercado de vinhos, localizada em São Paulo. Fundada e dirigida por Giulio Agnello, com o apoio de sua filha Bianca, a vinheria conta com uma equipe dedicada de 6 colaboradores, atuando nas áreas de administração, estoque e vendas em sua loja física.

Com a chegada da pandemia e as restrições de mobilidade, a empresa enfrentou desafios significativos, especialmente pela ausência de uma presença online. Tradicional e relutante quanto ao mundo digital, o sr. Giulio sempre priorizou um atendimento próximo e humanizado, que acreditava ser difícil replicar em um ambiente virtual.

A Vinheria Agnello está, agora, pronta para expandir sua atuação, levando toda sua tradição, cuidado e excelência para o ambiente digital — sem abrir mão do acolhimento e da sofisticação que sempre foram sua marca registrada.

---

## 🧭 2. Estrutura geral/padronizada (comum em todas as páginas)

### Cabeçalho (`<header>`)
- Logo clicável que redireciona para a página da história.
- Menu de navegação com links para: Home, História, Produtos, Login/Cadastro, Suporte.
- Menu responsivo com `menu-icon` e `menu-icon-close` ativado via JavaScript.
- A navegação se adapta com media queries (`max-width: 710px`).

### Rodapé (`<footer>`)
- Presente em todas as páginas.
- Mensagem de copyright.

### JavaScript
- Um único script (`script.js`) gerencia a abertura/fechamento do menu mobile.
- `home.js` é específico para o carrossel da página inicial.

---

## 📄 3. Páginas e funções específicas

### 🏠 `index.html` – Home
> Apresenta a Vinheria, produtos, planos e canal.

Seções principais:
- Carrossel: com imagem, título, promoção e um botão lincado a produtos.
- Conquistas: destaque para vinhos premiados com imagem e um botão lincado a produtos.
- Apresentação: fala sobre a vinheria e sua transição para o digital e um botão lincado para história.
- Planos: mostra uma tabela de assinatura e lista de benefícios com um botão lincado a nada.
- Canal: vídeo de apresentação do YouTube e uma breve explicação sobre os conteúdos postados.
- Patrocinadores: logos clicáveis de parceiros.

---

### 📖 `historia.html` – História
> Narra toda a trajetória da empresa desde 1950.

Estrutura:
- Texto rico e emocional dividido em parágrafos, com imagens ilustrativas.
- Conta a origem da vinícola, o legado da família Agnello e a evolução da marca.

---

### 🛍️ `produtos.html` – Vinhos
> Apresenta vinhos organizados por categoria: promoção, premium, gerais.

Estrutura:
- Usa seções com `<h1>` e `<div class="cards">` para mostrar os vinhos.
- Cada vinho tem imagem + nome.

---

### 🔐 `login-cadastro.html` – Login
> Página de login com opção para lembrar senha e link para cadastro.

Estrutura:
- Formulário com e-mail, senha e checkbox “lembrar senha”.
- Link para “Esqueci minha senha”.
- Link para “Crie sua conta”.

---

### 📝 `cadastro.html` – Cadastro
> Página de criação de conta (formulário simples com e-mail e senha).

Estrutura:
- Formulário direto com botão “Enviar código”.
- Link de volta para o login.

---

### 📬 `suporte.html` – Formulário de Contato
> Formulário de contato com campos para nome, e-mail, assunto e mensagem.

Estrutura:
- Campo `textarea` para descrever o problema.
- Botão de envio.

---

## 🎯 Resumo da estrutura

| Página                | Propósito                                           | Destaques                                        |
|-----------------------|-----------------------------------------------------|--------------------------------------------------|
| `index.html`          | Apresentação geral                                  | Carrossel, planos e vídeo                        |
| `historia.html`       | Construção de marca e conexão emocional             | Narrativa visual e texto envolvente              |
| `produtos.html`       | Catálogo de produtos                                | Imagens e categorias separadas                   |
| `login-cadastro.html` | Entrada de usuário                                  | Login com link para cadastro                     |
| `cadastro.html`       | Criação de conta                                    | Formulário simples com link para login           |
| `suporte.html`        | Contato com a vinheria                              | Formulário simples                               |

---

## 😎 Efeitos Visuais

### 🏠 `index.html` – Home


---

### 📖 `historia.html` – História


---

### 🛍️ `produtos.html` – Vinhos


---

### 🔐 `login-cadastro.html` – Login


---

### 📝 `cadastro.html` – Cadastro


---

### 📬 `suporte.html` – Formulário de Contato


---

## 👥 Integrantes A-Z

- Gabriel Oliveira Amaral
- Guilherme de Melo Sorrilha
- Guilherme Rodrigues de Andrade
- Lucas Henrique Viana Estevam Sena
- Rafael Tavares Santos

---

## Links

- Solution URL: (https://github.com/1IMperaDOR0/vinheria-agnello.github.io)
- Live Site URL: (https://1imperador0.github.io/vinheria-agnello.github.io/index.html)