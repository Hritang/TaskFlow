import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import Column from "./Column";
import AddTaskForm from "./AddTaskForm";

function Board() {

    const [tasks, setTasks] = useState(() => {

        const savedTasks = localStorage.getItem("tasks");

        return savedTasks
            ? JSON.parse(savedTasks)
            : [
                {
                    id: 1,
                    title: "Learn React",
                    status: "To Do",
                    priority: "High",
                    dueDate: ""
                }
            ];

    });

    const [search, setSearch] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("All");

    useEffect(() => {

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

    }, [tasks]);

    const addTask = (title, status, priority, dueDate) => {

        const newTask = {

            id: Date.now(),
            title,
            status,
            priority,
            dueDate

        };

        setTasks(prev => [...prev, newTask]);

    };

    const deleteTask = (id) => {

        setTasks(prev =>
            prev.filter(task => task.id !== id)
        );

    };

    const editTask = (id, newTitle) => {

        setTasks(prev =>

            prev.map(task =>

                task.id === id
                    ? {
                        ...task,
                        title: newTitle
                    }
                    : task

            )

        );

    };

    const handleDragEnd = (result) => {

        const { destination, draggableId } = result;

        if (!destination) return;

        setTasks(prev =>

            prev.map(task =>

                task.id.toString() === draggableId
                    ? {
                        ...task,
                        status: destination.droppableId
                    }
                    : task

            )

        );

    };

    const filteredTasks = tasks.filter(task => {

        const matchesSearch =
            task.title.toLowerCase().includes(search.toLowerCase());

        const matchesPriority =
            priorityFilter === "All" ||
            task.priority === priorityFilter;

        return matchesSearch && matchesPriority;

    });

    return (

        <DragDropContext onDragEnd={handleDragEnd}>

            <div className="dashboard">

                <div className="dashboard-card">
                    <h3>📌 Total Tasks</h3>
                    <p>{tasks.length}</p>
                </div>

                <div className="dashboard-card">
                    <h3>📝 To Do</h3>
                    <p>{tasks.filter(t => t.status === "To Do").length}</p>
                </div>

                <div className="dashboard-card">
                    <h3>⚡ In Progress</h3>
                    <p>{tasks.filter(t => t.status === "In Progress").length}</p>
                </div>

                <div className="dashboard-card">
                    <h3>✅ Completed</h3>
                    <p>{tasks.filter(t => t.status === "Done").length}</p>
                </div>

            </div>

            <div className="filters">

                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                >
                    <option>All</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

            </div>

            <AddTaskForm onAddTask={addTask} />

            <div className="board">

                <Column
                    title="To Do"
                    tasks={filteredTasks.filter(task => task.status === "To Do")}
                    onDelete={deleteTask}
                    onEdit={editTask}
                />

                <Column
                    title="In Progress"
                    tasks={filteredTasks.filter(task => task.status === "In Progress")}
                    onDelete={deleteTask}
                    onEdit={editTask}
                />

                <Column
                    title="Done"
                    tasks={filteredTasks.filter(task => task.status === "Done")}
                    onDelete={deleteTask}
                    onEdit={editTask}
                />

            </div>

        </DragDropContext>

    );

}

export default Board;