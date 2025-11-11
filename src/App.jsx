import { useState } from 'react';
import './App.css';

function App() {
  const [noteTitle, setNoteTitle] = useState("Note Title...");
  const changeNoteTitle = (event) => {
    setNoteTitle(event.target.value);
  };

  return ( 
    <div className="App">
      <h1>Note Taking App</h1>
      <p>This is a simple note-taking application.</p>
      <form>
        <input value={noteTitle} type="text" onChange={changeNoteTitle} />
        <br />
        <button type="submit">Add a Note</button>
      </form>

    </div>

  )
}

export default App
