import React from "react";



const Editor = ({ text, setText }) => {

    return (
       
        <textarea 
            id="editor"
            spellCheck="false"
            className="Editor"
            value={text}
            onChange={(e) => setText(e.target.value)}




        />

)




}


export { Editor }