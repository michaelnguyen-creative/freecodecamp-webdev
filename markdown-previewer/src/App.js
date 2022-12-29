import { marked } from 'marked'
import { useState } from 'react'
import React from 'react'

const App = () => {
  const [text, setText] = useState('')

  const renderElements = () => {
    const html = marked.parse(text)
    return (
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    )
  }
  
  return (
    <>
      <div>Markdown Previewer</div>
      <label htmlFor="editor">Editor</label>
      <button>Expand</button>
      <textarea
        id="editor"
        cols="30"
        rows="10"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <label htmlFor="previewer">Previewer</label>
      <div>{renderElements()}</div>
      <button>Expand</button>
    </>
  )
}

export default App
