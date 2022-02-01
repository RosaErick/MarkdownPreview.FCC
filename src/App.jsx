import React, { useState } from 'react'
import { Header } from './components/header'
import Preview  from './components/preview'
import { Editor } from './components/editor'
import styled from 'styled-components'


const Wrapper = styled.div`



`

const placeholder = 'blakblak'



export default function App() {

  const [text, setText] = useState(placeholder);

  return (

    <>
    <Wrapper>
        <Header />
        <Editor text={text} setText={setText} /> 
        
        <Preview text={text} />
          




</Wrapper>
    </>




  )






}