import Column from "./Column";

function Board() {
  return (
    <div className="board">
      <Column title="To Do" />
      <Column title="In Progress" />
      <Column title="Done" />
    </div>
  );
}

export default Board;