const App = () => {
  return (
    <>
      <div>Markdown Previewer</div>
      <label htmlFor="editor">Editor</label>
      <button>Expand</button>
      <textarea id="editor" cols="30" rows="10"></textarea>
      <label htmlFor="previewer">Previewer</label>
      <textarea id="previewer" cols="30" rows="10"></textarea>
      <button>Expand</button>
    </>
  )
}

export default App
