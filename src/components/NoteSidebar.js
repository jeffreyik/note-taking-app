const NoteSidebar = ({ notesData, handleSelect, activeNote, addNote, handleDelete }) => {

    const noteElement = notesData.map(note => {
        return <div className={`note ${activeNote === note.id ? "active" : ""}`}
                onClick={() => handleSelect(note.id)}
                key={note.id}
                onDoubleClick={() => handleDelete(note.id)} >
            <h4 className="note--short-title">
                {note.title === "" ? "Untitled" : note.title.substring(0, 70)}
                {note.title.length > 70 ? "..." : ""}
            </h4>
            <p className="note--short-body">
                {note.body === "" ? "Write your thoughts down..." : note.body.substring(0, 100)}
                {note.body.length > 100 ? "..." : ""}
            </p>
            <p className="date">{note.date}</p>
        </div>
    })

    return (
        <div className="note-preview">
            <h1>Notes App</h1>
            {noteElement}
            <button className="add-note-btn" onClick={addNote}>+</button>
        </div>
    )
}

export default NoteSidebar