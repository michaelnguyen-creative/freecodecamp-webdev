import { marked } from 'marked'
import { useState, useEffect } from 'react'
import React from 'react'
import initialTextPath from './initialText.md'

const App = () => {
  const [text, setText] = useState('')
  const [showEditor, setShowEditor] = useState(false)
  const [showPreviewer, setShowPreviewer] = useState(false)

  useEffect(() => {
    fetch(initialTextPath)
      .then((res) => res.text())
      .then((text) => {
        console.log('md', text)
        setText(text)
      })
  })

  useEffect(() => {}, [showEditor, showPreviewer])

  const renderElements = () => {
    // console.log('text', text)
    const html = marked.parse(text)
    // console.log('html', html)
    return <div id="preview" dangerouslySetInnerHTML={{ __html: html }}></div>
  }

  // To-do: Implement panel expansion functionality
  return (
    <>
      <div style={{ display: !showEditor && 'none' }}>
        <label htmlFor="editor">Editor</label>
        <textarea
          id="editor"
          cols="30"
          rows="10"
          defaultValue={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <button onClick={() => setShowEditor(!showEditor)}>Expand</button>
      <div style={{ display: !showPreviewer && 'none' }}>
        Previewer{renderElements()}
      </div>
      <button onClick={() => setShowPreviewer(!showPreviewer)}>Expand</button>
    </>
  )
}

export default App
