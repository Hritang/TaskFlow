import { useState } from "react";

import Column from "./Column";
import AddTaskForm from "./AddTaskForm";

function Board() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Learn React",
            status: "To Do"
        }
    ]);

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

    );

}

export default Board;