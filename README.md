# Help - Plataforma Digital de Processos (PDP)

Este repositório contém o código-fonte de uma página de ajuda estática para a **Plataforma Digital de Processos (PDP)**, um sistema utilizado pela Secretaria de Economia de Goiás. A página serve como um guia completo para os usuários, detalhando os procedimentos necessários para acessar e utilizar a plataforma.

## 📜 Visão Geral do Projeto

A página de ajuda é um recurso single-page, construído com HTML, CSS e JavaScript, que oferece aos cidadãos e procuradores um manual detalhado sobre como interagir com a PDP. O conteúdo aborda desde o cadastro inicial e acesso ao portal até a criação e o acompanhamento de solicitações processuais, além de uma seção de perguntas frequentes.

O projeto foi desenvolvido para ser intuitivo e acessível, garantindo que usuários com diferentes níveis de familiaridade com tecnologia possam navegar e encontrar as informações de que precisam.

## ✨ Funcionalidades

A página de ajuda inclui as seguintes funcionalidades para melhorar a experiência do usuário:

- **Menu Lateral Colapsável:** Um menu de navegação que pode ser expandido ou recolhido, com o estado salvo no navegador para manter a preferência do usuário.
- **Navegação por Tópicos:** O menu permite navegar rapidamente para seções específicas do guia.
- **Lazy Loading:** O conteúdo e as imagens da página são carregados de forma assíncrona (on-demand) à medida que o usuário rola a página, otimizando o tempo de carregamento inicial.
- **Zoom em Imagens:** Funcionalidade de zoom que amplia imagens ao passar o mouse sobre elas, permitindo visualizar detalhes das capturas de tela do sistema.
- **Design Responsivo:** A interface se adapta para garantir uma boa experiência de visualização, independentemente do estado do menu lateral.
- **Alertas Visuais:** Seções de destaque para informações importantes, avisos e dicas, com cores e ícones distintos.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Para a estruturação do conteúdo.
- **CSS3:** Para a estilização, layout e animações.
- **JavaScript (ES6):** Para a interatividade da página, como o menu, o lazy loading e o efeito de zoom.

## 🚀 Como Utilizar

Este é um projeto de site estático. Para visualizá-lo, basta abrir o arquivo `index.html` em qualquer navegador de internet moderno. Não é necessário um servidor web ou processo de build.

## 📂 Estrutura do Projeto

O repositório está organizado da seguinte forma:

```
/
├── 📄 index.html        # Arquivo principal com toda a estrutura e conteúdo da página.
├── 📁 styles/
│   └── 📄 styles.css     # Folha de estilos para a formatação visual.
├── 📁 scripts/
│   └── 📄 script.js       # Código JavaScript para as funcionalidades interativas.
└── 📁 images/
    ├── 🖼️ pdp_icon.ico    # Ícone da página (favicon).
    └── 🖼️ *.png           # Imagens e capturas de tela utilizadas no guia.
```

- **`index.html`**: Contém todo o texto e a estrutura da página de ajuda.
- **`styles/styles.css`**: Define a aparência visual, incluindo cores, fontes, layout e a responsividade do site.
- **`scripts/script.js`**: Adiciona as funcionalidades dinâmicas da página.
- **`images/`**: Armazena todas as imagens e ícones exibidos na página.
