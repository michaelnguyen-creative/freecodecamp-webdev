import { useState, useEffect } from 'react'
import { marked } from 'marked'
import initialTextPath from './initialText.md'
import { Container, TextField } from '@mui/material'
import './App.css'
import { Panel } from './components/Panel'

const App = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    fetch(initialTextPath)
      .then((res) => res.text())
      .then((text) => {
        setText(text)
      })
  })

  const handleClick = (e) => {
    setText(e.target.value)
  }

  const renderElements = () => {
    marked.use({ breaks: true })
    const html = marked.parse(text)
    return <div id="preview" dangerouslySetInnerHTML={{ __html: html }}></div>
  }

  // To-do: Implement panel expansion functionality
  return (
    <Container>
      <Panel label="editor" style={{ width: '60vw', marginBottom: 2, marginTop: 2 }}>
        <TextField
          multiline
          id="editor"
          fullWidth
          minRows={5}
          maxRows={10}
          color="secondary"
          size="small"
          defaultValue={text}
          onChange={handleClick}
        ></TextField>
      </Panel>
      <Panel label="previewer" style={{ width: '70vw', marginBottom: 2 }}>
        <Container sx={{ padding: 1 }}>{renderElements()}</Container>
      </Panel>
    </Container>
  )
}

export default App
