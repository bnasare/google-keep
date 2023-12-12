import React from "react";

function CreateArea(props) {
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    function updateTitle(event) {
        setTitle(event.target.value);
    }

    function updateContent(event) {
        setContent(event.target.value);
    }

    function onAddNote() {
        if (title === "" || content === "") return;
        props.onAddNote(title, content);
        setContent("");
        setTitle("");
    }

    return (
        <div>
            <form>
                <input
                    onChange={updateTitle}
                    name="title"
                    placeholder="Title"
                    value={title}
                />
                <textarea
                    onChange={updateContent}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={content}
                />
                <button onClick={onAddNote} type="button">
                    Add
                </button>
            </form>
        </div>
    );
}

export default CreateArea;
