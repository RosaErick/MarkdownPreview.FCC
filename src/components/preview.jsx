import React from "react";
import DOMpurify from "dompurify";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const PreviewBlock = styled.div`
  div {
    padding: 1rem;
    padding-top: 0;
    overflow-wrap: break-word;
  }
`;

export default function Preview({ text }) {
  const textcleaner = DOMpurify.sanitize(text);
  return (
    <PreviewBlock>
      <div id="preview" aria-live="polite" className="Preview">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </PreviewBlock>
  );
}
