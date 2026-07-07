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
                    priority: "High"
                }
            ];

    });

    useEffect(() => {

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

    }, [tasks]);

    const addTask = (title, status, priority) => {

        const newTask = {

            id: Date.now(),
            title,
            status,
            priority

        };

        setTasks(prevTasks => [...prevTasks, newTask]);

    };

    const deleteTask = (id) => {

        setTasks(prevTasks =>
            prevTasks.filter(task => task.id !== id)
        );

    };

    const editTask = (id, newTitle) => {

        setTasks(prevTasks =>

            prevTasks.map(task =>

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

        setTasks(prevTasks =>

            prevTasks.map(task =>

                task.id.toString() === draggableId
                    ? {
                        ...task,
                        status: destination.droppableId
                    }
                    : task

            )

        );

    };

    return (

        <DragDropContext onDragEnd={handleDragEnd}>

            <AddTaskForm onAddTask={addTask} />

            <div className="board">

                <Column
                    title="To Do"
                    tasks={tasks.filter(task => task.status === "To Do")}
                    onDelete={deleteTask}
                    onEdit={editTask}
                />

                <Column
                    title="In Progress"
                    tasks={tasks.filter(task => task.status === "In Progress")}
                    onDelete={deleteTask}
                    onEdit={editTask}
                />

                <Column
                    title="Done"
                    tasks={tasks.filter(task => task.status === "Done")}
                    onDelete={deleteTask}
                    onEdit={editTask}
                />

            </div>

        </DragDropContext>

    );

}

export default Board;