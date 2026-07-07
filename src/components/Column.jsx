import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

function Column({ title, tasks, onDelete, onEdit }) {

    return (

        <Droppable droppableId={title}>

            {(provided) => (

                <div
                    className="column"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >

                    <h2>{title}</h2>

                    {tasks.length === 0 ? (

                        <div className="empty-column">

                            <div className="empty-icon">
                                📋
                            </div>

                            <h3>No Tasks</h3>

                            <p>
                                Drag a task here
                            </p>

                        </div>

                    ) : (

                        tasks.map((task, index) => (

                            <TaskCard
                                key={task.id}
                                task={task}
                                index={index}
                                onDelete={onDelete}
                                onEdit={onEdit}
                            />

                        ))

                    )}

                    {provided.placeholder}

                </div>

            )}

        </Droppable>

    );

}

export default Column;