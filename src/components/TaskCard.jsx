function TaskCard({ task, onDelete }) {

    return (

        <div className="task-card">

            <p>{task.title}</p>

            <button
                className="delete-btn"
                onClick={() => onDelete(task.id)}
            >
                Delete
            </button>

        </div>

    );

}

export default TaskCard;