import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(title, content) {
        setNotes(prevNotes => [...prevNotes, { title, content }]);
    }

    function deleteNote(index) {
        setNotes(prevNotes => prevNotes.filter((note, i) => i !== index));
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => (
                <Note
                    key={index}
                    title={note.title}
                    content={note.content}
                    onDelete={() => deleteNote(index)}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;
