import { BiTrash } from "react-icons/bi";
import styleCard from "./card.module.css";
import { IoCheckmarkCircleSharp, IoCloseCircle } from "react-icons/io5";

type TaskCardProps = {
    id: number;
    name: string;
    description: string;
    finished: boolean;
    updateTask: (id: number) => void;
    deleteTask: (id: number) => void;
};

const TaskCard: React.FC<TaskCardProps> = ({ id, name, description, finished, updateTask, deleteTask }) => {
    return (
        <div
            className={`${styleCard["card-task"]} ${
                finished ? styleCard["finished"] : ""
            }`}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styleCard["delete-card-task"]} onClick={() => {
              if(confirm("Are you sure to delete this task?")) deleteTask(id)
              }}>
                <BiTrash/>
            </div>
            <div className={styleCard["toggle-card-task"]} onClick={() => {updateTask(id)}}>
                {finished ? <IoCloseCircle /> : <IoCheckmarkCircleSharp />}
            </div>
        </div>
    );
};

export default TaskCard;
