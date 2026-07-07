import { useState } from "react";

import Column from "./Column";

function Board() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      status: "To Do"
    }
  ]);

  const addTask = () => {

    const newTask = {
      id: Date.now(),
      title: "New Task",
      status: "To Do"
    };

    setTasks([...tasks, newTask]);

  };

  return (

    <>
      <button onClick={addTask}>
        + Add Task
      </button>

      <div className="board">

        <Column
          title="To Do"
          tasks={tasks.filter(task => task.status === "To Do")}
        />

        <Column
          title="In Progress"
          tasks={tasks.filter(task => task.status === "In Progress")}
        />

        <Column
          title="Done"
          tasks={tasks.filter(task => task.status === "Done")}
        />

      </div>

    </>

  );

}

export default Board;