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

                    {tasks.map((task, index) => (

                        <TaskCard
                            key={task.id}
                            task={task}
                            index={index}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />

                    ))}

                    {provided.placeholder}

                </div>

            )}

        </Droppable>

    );

}

export default Column;