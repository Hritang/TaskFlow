import { useEffect, useState } from "react";

import Column from "./Column";
import AddTaskForm from "./AddTaskForm";
import { DragDropContext } from "@hello-pangea/dnd";

function Board() {

    const [tasks, setTasks] = useState(() => {

    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
        ? JSON.parse(savedTasks)
        : [
            {
                id: 1,
                title: "Learn React",
                status: "To Do"
            }
        ];

});
    useEffect(() => {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}, [tasks]);

    const addTask = (title, status) => {

        const newTask = {

            id: Date.now(),
            title,
            status

        };

        setTasks([...tasks, newTask]);

    };
    const deleteTask = (id) => {

    setTasks(tasks.filter(task => task.id !== id));

};
    const editTask = (id, newTitle) => {

    setTasks(

        tasks.map(task =>

            task.id === id
                ? { ...task, title: newTitle }
                : task

        )

    );

};

    return (

    <DragDropContext
        onDragEnd={(result) => {
            console.log(result);
        }}
    >

        <>

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

        </>

    </DragDropContext>

);

}

export default Board;