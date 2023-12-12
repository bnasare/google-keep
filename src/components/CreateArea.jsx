import React from "react";

function CreateArea(props) {
    const [note, setNote] = React.useState({ title: "", content: "" });

    function updateNote(event) {
        const { name, value } = event.target;
        setNote(prevNote => ({ ...prevNote, [name]: value }));
    }

    function submitNote() {
        if (note.title === "" || note.content === "") return;
        props.onAdd(note.title, note.content);
        setNote({ title: "", content: "" });
    }

    return (
        <div>
            <form>
                <input
                    onChange={updateNote}
                    name="title"
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    onChange={updateNote}
                    name="content"
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button type="button" onClick={submitNote}>
                    Add
                </button>
            </form>
        </div>
    );
}

export default CreateArea;
