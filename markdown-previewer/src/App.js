import { marked } from 'marked'
import { useState, useEffect } from 'react'
import React from 'react'
import initialTextPath from './initialText.md'

const App = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    fetch(initialTextPath)
      .then(res => res.text())
      .then(text => {
        console.log('md', text)
        setText(text)
      })
  })

  const renderElements = () => {
    // console.log('text', text)
    const html = marked.parse(text)
    // console.log('html', html)
    return (
      <div id="preview" dangerouslySetInnerHTML={{__html: html}}></div>
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
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div>Previewer{renderElements()}</div>
      <button>Expand</button>
    </>
  )
}

export default App
