import TaskCard from "./TaskCard";

function Column(props) {

  return (
    <div className="column">

      <h2>{props.title}</h2>

      <TaskCard title="Learn React" />

    </div>
  );

}

export default Column;