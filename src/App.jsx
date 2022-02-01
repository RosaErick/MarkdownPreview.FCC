import React, { useState } from "react";
import { Header } from "./components/header";
import Preview from "./components/preview";
import { Editor } from "./components/editor";
import styled, { keyframes } from "styled-components";

const GitHubIconArm = styled.path`
  transform-origin: 8em 6em;
  fill: #f9f9f9;
`;

const GitHubAnimation = keyframes`
  0%, 100% {
    transform: rotate(0);
  }
  20%, 60% {
    transform: rotate(-25deg);
  }
  40%, 80% {
    transform: rotate(10deg);
  }
`;

const GitHubIcon = styled.svg`
  fill: #a30b37;
  height: 4.375em;
  width: 4.375em;
`;

const GitHubLink = styled.a`
  border: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.2s ease-in-out;
  &:hover ${GitHubIconArm} {
    animation: ${GitHubAnimation} 0.5s ease-in-out;
  }
  &:hover {
    opacity: 0.9;
  }
  &:active ${GitHubIcon} {
    fill: #a30b37;
  }
  &:focus ${GitHubIcon} {
    fill: #a30b37;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr 1fr;
  min-height: 100vh;
`;

const placeholder = `**Guia de sintaxe de Markdown**

### Títulos

Para criar um título, adicione entre 1 e 6 \`#\` na frente da palavra ou frase. O \`#\` corresponderá ao nível do título.

# Nível de título 1

## Nível de título 2

### Nível de título 3

#### Nível de título 4

##### Nível de título 5

###### Nível de título 6


### Parágrafos

Para criar um parágrafo, use uma linha em branco para separar uma ou mais linhas de texto.
### Quebras de linha

Para criar uma quebra de linha, termine uma linha com dois ou mais espaços e, em seguida, pressione return/enter.
Esta é a primeira linha.
Esta é a segunda linha


### Ênfase

Para colocar uma palavra ou frase em itálico, adicione um asterisco ou sublinhado antes e depois de uma palavra ou frase.

*Este texto ficará em itálico.*

_Este texto também ficará em itálico._
Para colocar uma palavra ou frase em negrito, adicione dois asteriscos ou sublinhados antes e depois de uma palavra ou frase.

**Este texto estará em negrito.**

__Este texto também estará em negrito.__


### Citações em bloco

Para criar uma citação em bloco, adicione um > na frente de um parágrafo. Se você precisar ter uma citação em bloco com vários parágrafos, você pode adicionar um > nas linhas em branco entre os parágrafos.
Se você precisar aninhar citações em bloco, adicione um >> na frente do parágrafo que deseja aninhar.
> O Markdown pretende ser tão fácil de ler e escrever quanto possível.
>
> A legibilidade, no entanto, é enfatizada acima de tudo. Um documento formatado por Markdown deve ser publicável como está, como texto simples, sem parecer que foi marcado com tags ou instruções de formatação.
>


### Listas

- Você pode organizar itens em listas não ordenadas e ordenadas.


#### Listas não ordenadas

Para criar uma lista não ordenada, adicione traços (-), asteriscos (*) ou sinais de adição (+) na frente dos itens de linha.
- Item 1
- Item 2
  - Item 2.1
  - Item 2.2
- Item 3


#### Listas ordenadas

Para criar uma lista ordenada, adicione números seguidos por períodos e itens de linha.
1. Item 1
2. Item 2
3. Item 3
  1. Item 3.1
  2. Item 3.2
4. Item 4


### Blocos de código

Normalmente são recuados quatro espaços ou uma tabulação.
Você pode envolver seu código com \`\`\` para criar um bloco de código e, adicionando um idioma opcional, seu código terá realce de sintaxe.
Você pode recuar cada linha do bloco em pelo menos quatro espaços ou uma tabulação.
\`\`\`js
console.log("Olá mundo!");
\`\`\`
    <html>
      <head></head>
      <corpo>
        <h1>Olá Mundo</h1>
      </body>
    </html>

### Regras horizontais

Para criar uma régua horizontal, use três ou mais asteriscos (***), traços (---) ou sublinhados (___) em uma linha.
***


### Imagens

Para adicionar uma imagem, adicione um ponto de exclamação (!), seguido por um texto alternativo entre colchetes e o caminho ou URL para o recurso de imagem.

![Logo](http://blog.joeybronner.fr/wp-content/uploads/2014/02/markdown_logo_large.png)

Para adicionar um link a uma imagem, coloque o Markdown da imagem entre colchetes e adicione o link entre parênteses

![Status da Netlify](https://api.netlify.com/api/v1/badges/4f96a8ed-8cd8-437e-8179-0f654debd772/deploy-status)

### Links

Para criar um link, coloque o texto do link entre colchetes e siga-o imediatamente com o URL entre parênteses.
Para adicionar um título, coloque-o entre parênteses após o URL.
Este é um [link](https://github.com/RosaErick/markdown-preview-fcc) para o repositório.
Você pode ler mais sobre Markdown [aqui](https://www.markdownguide.org/basic-syntax "Markdown Guide").

### URLs e endereços de e-mail

Para transformar um URL ou endereço de e-mail em um link, coloque-o entre colchetes angulares.
<https://daringfireball.net/projects/markdown/syntax>
<seunome@exemplo.com>

### Listas de tarefas
- [x] este é um item completo
- [ ] este é um item incompleto

### Tabelas

| Cabeçalho | Cabeçalho |
| -------- |:--------:|
| Conteúdo | Conteúdo |
`;

export default function App() {
  const [text, setText] = useState(placeholder);

  return (
    <>
      <GitHubLink
        href="https://github.com/RosaErick/random-quote-generator-fcc"
        aria-label="View source on GitHub"
      >
        <GitHubIcon viewBox="0 0 250 250" aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
          <GitHubIconArm d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" />
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="#f9f9f9"
          />
        </GitHubIcon>
      </GitHubLink>
      <Header />
      <Wrapper>
        <Editor text={text} setText={setText} />
        <Preview text={text} />
      </Wrapper>
    </>
  );
}
