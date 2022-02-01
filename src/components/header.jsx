import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.header`
  padding: 1em;
  text-align: center;

  h1 {
    font-size: 3.052em;
    font-weight: normal;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <h1 className="HeaderTitle">Leitor de Markdown</h1>
      <p>
        Markdown é uma linguagem de marcação leve com sintaxe de formatação de
        texto simples. Seu principal objetivo é ser muito fácil de ler e
        escrever, mesmo quando não convertido em HTML.
      </p>
      <p>
        Digite um pouco de Markdown à esquerda e veja o HTML renderizado à
        direita.
      </p>
    </HeaderBlock>
  );
};

export { Header };
