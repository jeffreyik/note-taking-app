const NoteEditor = ({ notesData, activeNote, handleChange, handleDelete }) => {

    const noteElement = notesData.map(note => {
        if (activeNote === note.id) {
            return <div className="note-editor--pane" key={note.id}>
                <textarea
                    className="note-editor--title textarea" 
                    value={note.title} 
                    onChange={handleChange}    
                    name="title"
                    placeholder="Title"
                 />
                <textarea 
                    className="note-editor--body" 
                    value={note.body} 
                    onChange={handleChange} 
                    name="body"
                    placeholder="Write your thoughts down..." 
                />
            </div>
        }
        
    })

    return (
        <div className="note-editor">
            <div className="note-editor--controls">
                <button onClick={handleDelete}>Delete</button>
            </div>
        {noteElement}
        </div>
    )
}

export default NoteEditor