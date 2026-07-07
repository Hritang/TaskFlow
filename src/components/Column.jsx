import { useState } from "react";
import TaskCard from "./TaskCard";

function Column(props) {

  const [tasks, setTasks] = useState([
    "Learn React"
  ]);

  return (
    <div className="column">

      <h2>{props.title}</h2>

      {tasks.map((task) => (
        <TaskCard
          key={task}
          title={task}
        />
      ))}

    </div>
  );
}

export default Column;