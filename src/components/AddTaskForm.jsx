import { useState } from "react";

function AddTaskForm({ onAddTask }) {

    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("To Do");
    const [priority, setPriority] = useState("Medium");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (title.trim() === "") return;

        onAddTask(
            title,
            status,
            priority,
            dueDate
        );

        setTitle("");
        setStatus("To Do");
        setPriority("Medium");
        setDueDate("");

    };

    return (

        <div className="task-form-container">

            <h2>Create New Task</h2>

            <form
                className="task-form"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    placeholder="Task title..."
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

                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />

                <button type="submit">
                    + Add Task
                </button>

            </form>

        </div>

    );

}

export default AddTaskForm;