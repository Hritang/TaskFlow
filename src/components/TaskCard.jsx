import { useState } from "react";
import { Draggable } from "@hello-pangea/dnd";

function TaskCard({ task, index, onDelete, onEdit }) {

    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(task.title);

    const saveTask = () => {

        if (title.trim() === "") return;

        onEdit(task.id, title);
        setEditing(false);

    };

    return (

        <Draggable
            draggableId={task.id.toString()}
            index={index}
        >

            {(provided) => (

                <div
                    className="task-card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >

                    {editing ? (

                        <>

                            <input
                                className="edit-input"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />

                            <button
                                className="save-btn"
                                onClick={saveTask}
                            >
                                Save
                            </button>

                        </>

                    ) : (

                        <>

                            <h3 className="task-title">
                                {task.title}
                            </h3>

                            <span
                                className={`priority ${task.priority.toLowerCase()}`}
                            >
                                {task.priority}
                            </span>

                            <div className="task-actions">

                                <button
                                    className="edit-btn"
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

                            </div>

                        </>

                    )}

                </div>

            )}

        </Draggable>

    );

}

export default TaskCard;