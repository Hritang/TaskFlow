import Column from "./Column";

function Board() {

  const columns = [
    "To Do",
    "In Progress",
    "Done"
  ];

  return (
    <div className="board">

      {columns.map((title) => (
        <Column
          key={title}
          title={title}
        />
      ))}

    </div>
  );
}

export default Board;