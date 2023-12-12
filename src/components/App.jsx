import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNote] = React.useState([]);

    function addNote(title, content) {
        setNote((prevNotes) => [...prevNotes, { title, content }]);
    }

    function deleteNote(id) {
        setNote(() => {
            return notes.filter((note, index) => index !== id);
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAddNote={addNote} />
            {notes.map((note, index) => {
                return (
                    <Note
                        title={note.title}
                        content={note.content}
                        key={index}
                        onDelete={() => deleteNote(index)}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
