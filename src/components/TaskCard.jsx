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

    const today = new Date().toISOString().split("T")[0];

    const isOverdue =
        task.dueDate &&
        task.status !== "Done" &&
        task.dueDate < today;

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
                >

                    <div
                        className="drag-handle"
                        {...provided.dragHandleProps}
                    >
                        ⋮⋮
                    </div>

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
                                className={`priority ${(task.priority || "Medium").toLowerCase()}`}
                            >
                                {task.priority || "Medium"}
                            </span>

                            {task.dueDate && (

                                <div className="due-date">
                                    📅 {task.dueDate}
                                </div>

                            )}

                            {isOverdue && (

                                <div className="overdue">
                                    ⚠ OVERDUE
                                </div>

                            )}

                            <div className="task-actions">

                                <button
                                    className="edit-btn"
                                    onClick={() => setEditing(true)}
                                >
                                    ✏ Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => onDelete(task.id)}
                                >
                                    🗑 Delete
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