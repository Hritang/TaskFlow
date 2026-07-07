import { useState } from "react";

function TaskCard({ task, onDelete, onEdit }) {

    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(task.title);

    const saveTask = () => {

        onEdit(task.id, title);
        setEditing(false);

    };

    return (

        <div className="task-card">

            {editing ? (

                <>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <button onClick={saveTask}>
                        Save
                    </button>
                </>

            ) : (

                <>
                    <p>{task.title}</p>

                    <button
                        onClick={() => setEditing(true)}
                    >
                        Edit
                    </button>

                    <button
                        className="delete-btn"
                        onClick={() => onDelete(task.id)}
                    >
                        Delete
                    </button>
                </>

            )}

        </div>

    );

}

export default TaskCard;