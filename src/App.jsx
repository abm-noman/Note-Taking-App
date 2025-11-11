import { useState } from 'react';
import './App.css';

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const changeNoteTitle = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (noteTitle.trim() === "") return;
    const newNote = {
      id: Date.now + "",
      title: noteTitle,
    };
    setNotes([...notes, newNote]);
    setNoteTitle("");
  };

  const removeHandler = (NoteId) => {
    const filteredNotes = notes.filter((note) => note.id !== NoteId);
    setNotes(filteredNotes);
  };

  return ( 
    <div className="App">
      <h1>Note Taking App</h1>
      <p>This is a simple note-taking application.</p>
      <form onSubmit={handleSubmit}>
        <input value={noteTitle} type="text" onChange={changeNoteTitle} style={{ width: "200px", height: "50px", fontSize: "18px", padding: "5px" }}/>
        <br />
        <button type="submit">Add a Note</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.title}</span>
            <button>Edit</button>
            <button onClick={() => removeHandler(note.id)}>Remove</button>
          </li>
        ))}
      </ul>

    </div>

  )
}

export default App
