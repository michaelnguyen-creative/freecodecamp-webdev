import { useState, useEffect } from 'react'
import { marked } from 'marked'
import initialTextPath from './initialText.md'
import { Container, TextField } from '@mui/material'
import './App.css'
import { Panel } from './components/Panel'

const App = () => {
  const [text, setText] = useState('')
  const [editorIsExpanded, setEditorIsExpanded] = useState(false)
  const [previewerIsExpanded, setPreviewerIsExpanded] = useState(false)

  useEffect(() => {
    fetch(initialTextPath)
      .then((res) => res.text())
      .then((text) => {
        setText(text)
      })
  })

  const handleInput = (e) => {
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
      <div style={{ display: previewerIsExpanded ? 'none' : '' }}>
        <Panel
          label="editor"
          style={{ width: '60vw', marginBottom: 2, marginTop: 2 }}
          expand={() => setEditorIsExpanded(!editorIsExpanded)}
          isExpanded={editorIsExpanded}
        >
          <TextField
            multiline
            id="editor"
            fullWidth
            minRows={5}
            maxRows={15}
            color="secondary"
            size="small"
            defaultValue={text}
            onChange={handleInput}
          ></TextField>
        </Panel>
      </div>
      <div style={{ display: editorIsExpanded ? 'none' : '' }}>
        <Panel
          label="previewer"
          style={{ width: '70vw', marginBottom: 2 }}
          isExpanded={previewerIsExpanded}
          expand={() => setPreviewerIsExpanded(!previewerIsExpanded)}
        >
          <Container sx={{ padding: 1 }}>{renderElements()}</Container>
        </Panel>
      </div>
    </Container>
  )
}

export default App
