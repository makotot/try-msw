function App() {
  const request = async () => {
    const response = await (await fetch('/hello')).json()
    console.log(response)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>

      <button type="button" onClick={request}>
        hello
      </button>
    </div>
  )
}

export default App
