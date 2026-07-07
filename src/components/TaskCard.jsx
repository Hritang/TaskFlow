import { useState } from "react";
import { Draggable } from "@hello-pangea/dnd";

function TaskCard({ task, index, onDelete, onEdit }) {

    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(task.title);

    const saveTask = () => {

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

            )}

        </Draggable>

    );

}

export default TaskCard;