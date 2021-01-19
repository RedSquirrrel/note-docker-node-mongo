import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/notes';
import Notification from './components/Notification';
import Footer from './components/Footer';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    noteService.getAll().then(initialNotes => {
      setNotes(initialNotes);
    });
  }, []);
  // console.log('render', notes.length, 'notes');

  const addNote = event => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    noteService.create(noteObject).then(returnedNote => {
      setNotes(notes.concat(returnedNote));
      setNewNote('');
    });
  };

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important };
    console.log('CHANGED:', changedNote);

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => (note.id !== id ? note : returnedNote)));
        console.log('Returned Note-1', returnedNote);
        /*
    ! The map method HERE 👆 creates a new array by mapping every item from the old array into an item in the new array. In our example, the new array is created conditionally so that if note.id !== id is true, we simply copy the item from the old array into the new array. If the condition is false, then the note object returned by the server is added to the array instead.
    */
      })
      .catch(error => {
        setErrorMessage(`Note '${note.content}' was already deleted from server`);
        // alert(`The note '${note.content}' was already deleted from server`)
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNotes(notes.filter(n => n.id !== id));
      });
  };

  // ! we NOT need to call the event.prevetDefault() method here. This is because there is no default action that occurs on input change, unlike on a form submission.
  const handleNoteChange = event => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
      </div>
      <ul>
        {notesToShow.map((note, i) => (
          <Note key={i} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>save</button>
      </form>

      <Footer />
    </div>
  );
};

export default App;
