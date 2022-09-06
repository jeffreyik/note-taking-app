import NoteEditor from "./components/NoteEditor";
import NoteSidebar from "./components/NoteSidebar";

import { useEffect, useState } from "react";

const App = () => {

  const [notesData, setNotesData] = useState(() => {
    const notes = localStorage.getItem("notes-data" || "[]")
    return JSON.parse(notes) || []
  })

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notesData))
  }, [notesData])

  const [activeNote, setActiveNote] = useState(notesData.length === 0 ? null : notesData[0].id)

  const selectNote = (id) => {
      setActiveNote(id)
  }

  const addNote = () => {
      setNotesData(prevNotesData => {
        return [
          {
            title: "",
            body: "",
            id: notesData.length + 1,
            date: new Date().toLocaleTimeString(),
          },
          ...prevNotesData
        ]
      })
      setActiveNote(notesData.length + 1)
  }

  const deleteNote = () => {
    setNotesData(notesData.filter(note => note.id !== activeNote))
  }

  const editNote = (event) => {
    const { name, value } = event.target

    const newNote = notesData.map(note => {
      return { 
        ...note,
        [name]: note.id === activeNote ? value : note[name],
        date: note.id === activeNote ? new Date().toLocaleTimeString() : note.date,
      }
    })
    setNotesData(newNote)
  }

  return (
    <div className="App">
      {notesData.length === 0 ? 
      <div className="no-notes">
        <h1>No Notes Found </h1>
        <h4>Write down your ideas and thoughts now :)</h4>
        <button onClick={addNote}>Add New Note</button>
      </div> :
        <>
        <NoteSidebar
        notesData={notesData} 
        activeNote={activeNote}  
        handleSelect={selectNote} 
        addNote={addNote}
        handleDelete={deleteNote}
      />
      <NoteEditor 
        notesData={notesData} 
        activeNote={activeNote} 
        handleChange={editNote}
        handleDelete={deleteNote}
      />
      </>
      }
    </div>
  )
}

export default App;