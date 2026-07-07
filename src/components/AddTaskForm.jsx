import { useState } from "react";

function AddTaskForm({ onAddTask }) {

    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("To Do");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (title.trim() === "") return;

        onAddTask(title, status);

        setTitle("");
        setStatus("To Do");

    };

    return (

        <form className="task-form" onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
            </select>

            <button type="submit">
                Add Task
            </button>

        </form>

    );

}

export default AddTaskForm;