import { useState, useEffect } from 'react'
import { marked } from 'marked'
import initialTextPath from './initialText.md'
import { Container, Button, TextField, Paper } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import './App.css'

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
    <Container>
      <Container sx={{ width: '60vw', marginBottom: 2, marginTop: 2 }}>
        <Paper sx={{ backgroundColor: '#CCEA8D' }}>
          <Container sx={{ backgroundColor: '#A6BC09' }}>
            <label htmlFor="editor">Editor</label>
            <Button>{true ? <ExpandMoreIcon /> : <ExpandLessIcon />}</Button>
          </Container>
          <TextField
            multiline
            id="editor"
            fullWidth
            minRows={5}
            maxRows={10}
            color="secondary"
            size="small"
            defaultValue={text}
            onChange={(e) => setText(e.target.value)}
          ></TextField>
        </Paper>
      </Container>
      <Container sx={{ width: '70vw', marginBottom: 2 }}>
        <Paper sx={{ backgroundColor: '#CCEA8D' }}>
          <Container sx={{ backgroundColor: '#A6BC09' }}>
            Previewer
            <Button>{true ? <ExpandMoreIcon /> : <ExpandLessIcon />}</Button>
          </Container>
          <Container sx={{ padding: 1 }}>{renderElements()}</Container>
        </Paper>
      </Container>
    </Container>
  )
}

export default App
