import { marked } from 'marked'
import { useState, useEffect } from 'react'
import React from 'react'
import initialTextPath from './initialText.md'

const App = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    fetch(initialTextPath)
      .then((res) => res.text())
      .then((text) => {
        setText(text)
      })
  })

  const renderElements = () => {
    marked.use({ breaks: true })
    const html = marked.parse(text)
    return <div id="preview" dangerouslySetInnerHTML={{ __html: html }}></div>
  }

  // To-do: Implement panel expansion functionality
  return (
    <>
      <div>
        <label htmlFor="editor">Editor</label>
        <textarea
          id="editor"
          cols="30"
          rows="10"
          defaultValue={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button>Expand</button>
      </div>
      <div>
        <div>
          Previewer
          <button>Expand</button>
        </div>
        {renderElements()}
      </div>
    </>
  )
}

export default App
