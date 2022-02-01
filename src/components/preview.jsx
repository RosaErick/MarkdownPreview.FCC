import React from 'react'
import DOMpurify from 'dompurify'
import ReactMarkdown from 'react-markdown'


export default function Preview ({ text }) {
    
    const textcleaner = DOMpurify.sanitize(text);
    return (
        <>
    <div
      id="preview"
      aria-live="polite"
      className="Preview"

            >
                <ReactMarkdown>{text}</ReactMarkdown>
            
            </div>

</>




    )






}

