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
      <h1 className="HeaderTitle">Markdown Previewer</h1>
      <p>
        Markdown is a lightweight markup language with plain-text-formatting
        syntax. Its main goal is to be very easy to read and write, even when
        not converted to HTML.
      </p>
      <p>
        Type some Markdown on the left and see the HTML rendered on the right.
      </p>
    </HeaderBlock>
  );
};

export { Header };
