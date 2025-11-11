import { useState } from 'react';
import './App.css';

function App() {

  //states
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const changeNoteTitle = (event) => {
    setNoteTitle(event.target.value);
  };
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  //event handlers
  //const createHandler = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    if (noteTitle === "") return;
    if (editMode) {
      updateHandler();
    } else {
      const newNote = {
        id: Date.now() + "",
        title: noteTitle,
      };
      setNotes([...notes, newNote]);
      setNoteTitle("");
    }
  };

  const removeHandler = (noteId) => {
    const filteredNotes = notes.filter((note) => note.id !== noteId);
    setNotes(filteredNotes);
  };

  const editHandler = (note) => {
    setEditMode(true);
    setEditableNote(note);
    setNoteTitle(note.title);
  };

  const updateHandler = () => {
    const updatedNotes = notes.map((note) =>
      note.id === editableNote.id ? { ...note, title: noteTitle } : note
    );
    setNotes(updatedNotes);
    setEditMode(false);
    setEditableNote(null);
    setNoteTitle("");
  };

  return ( 
    <div className="App">
      <h1>Note Taking App</h1>
      <p>This is a simple note-taking application.</p>
      <form onSubmit={handleSubmit}>
        <input value={noteTitle} type="text" onChange={changeNoteTitle} style={{ width: "200px", height: "50px", fontSize: "18px", padding: "5px" }}/>
        <br />
        <button type="submit">{editMode ? "Update Note" : "Add a Note"}</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.title}</span>
            <button onClick={() => editHandler(note)}>Edit</button>
            <button onClick={() => removeHandler(note.id)}>Remove</button>
          </li>
        ))}
      </ul>

    </div>

  )
}

export default App
