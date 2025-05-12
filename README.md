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

## 😎 Efeitos visuais

### 🏠 `index.html` – Home

- Animação em botões da seção principal: os botões ganharam efeito de transição no `hover`, aumentando levemente o tamanho da fonte e simulando um deslocamento para baixo com `transform: translateY`.
- Ícones de patrocinadores rotativos: os logos da seção de patrocinadores giram continuamente ao passar o mouse, usando `@keyframes rodar`.

---

### 📖 `historia.html` – História

- Animação de entrada suave nos parágrafos: todos os parágrafos da seção receberam a classe `.fade-in`, que aplica um efeito de transição leve de opacidade e deslocamento vertical quando o conteúdo entra na tela.
- Barras animadas decorativas: após cada parágrafo, foi adicionada uma `div` com a classe `.barra-animada`, que cresce horizontalmente ao entrar na viewport, simulando uma barra de destaque em movimento.
- JavaScript com IntersectionObserver: um script foi inserido ao final do `body`, utilizando a API `IntersectionObserver` para detectar quando os elementos `.fade-in` e `.barra-animada` se tornam visíveis, adicionando a classe `.visible`.
- Estilo modularizado: todas as animações foram organizadas dentro da seção `/* Efeitos HISTORIA */` no arquivo `efeitos.css`, mantendo a separação lógica e facilitando a manutenção.

---

### 🔐 `login-cadastro.html` – Login

- Classe `.principal` com animação contínua: foi aplicada a propriedade `animation-name` com o valor `roxo_verde`, que define o nome da animação controlada por `@keyframes`.
- Ciclo infinito de execução: com `animation-iteration-count: infinite`, a animação reinicia automaticamente sempre que termina, mantendo o fundo em constante movimento.
- Duração de 3 segundos por ciclo: a propriedade `animation-duration: 3s` determina o tempo de cada ciclo de animação, criando um efeito suave e contínuo.
- Definição da animação com `@keyframes`: o bloco `@keyframes roxo_verde` utiliza percentuais de `0%` a `100%`, alterando o `background-image` com `linear-gradient` em cada estágio para simular uma rotação de cores.
- Animação semelhante na tela de cadastro: o mesmo efeito é aplicado com pequenas variações, utilizando `animation-name: efeito` e `@keyframes efeito`, adaptado ao visual da seção de cadastro.

---

### 🛍️ `produtos.html` – Produtos

- Ícone do carrinho rotaciona no hover: pequenos efeitos de rotação foram aplicados para destacar interações com o ícone de carrinho.
- Linha decorativa em títulos de categorias: a classe `.classificacao h1::before` adiciona uma linha horizontal antes do título, reforçando a hierarquia visual.
- Efeito de brilho em promoções: itens com a classe `.promocao` piscam suavemente com o efeito `@keyframes aparecer`, destacando visuais promocionais.
- Cartões de produto aumentam levemente no hover: animação de escala aplicada em `.cartao:hover` para destacar o item ao passar o mouse.
- Botões com transição e ícone de seta ao lado: os botões da seção possuem transição de cor no hover e inserção dinâmica de seta com `::after`.

---

### 📬 `suporte.html` – Formulário de Contato

- Animação de entrada com `@keyframes slideIn`: o formulário desliza suavemente para a tela ao ser carregado, aplicando uma transição de opacidade e deslocamento horizontal.
- Destaque nos campos ao focar: ao clicar em um campo (`:focus`), ele recebe uma borda destacada e sombra suave, facilitando a visualização da seleção ativa.
- Botão com efeito interativo no hover: ao passar o mouse, o botão de envio aumenta levemente com `transform: scale()`, dando uma sensação de clique iminente.
- Estilo alternado nos campos: os campos ímpares do formulário recebem uma cor de fundo diferenciada usando `:nth-child(odd)`, melhorando a leitura e organização visual.
- Ícone decorativo no título e seleção personalizada: um ícone é inserido no final do título com `::after`, e o estilo da seleção de texto (`::selection`) foi customizado para manter a identidade visual do site.

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