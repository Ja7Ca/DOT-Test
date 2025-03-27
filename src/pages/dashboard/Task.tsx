import { useEffect, useState } from "react";
import HeadContent from "../../components/app/content/HeadContent";
import { addTask, deleteTask, getTask, updateTask } from "../../service/TaskService";
import TaskCard from "../../components/app/card/TaskCard";
import toast from "react-hot-toast";
import ButtonMain from "../../components/app/button/ButtonMain";
import InputBlock from "../../components/app/form/InputBlock";
import LabelField from "../../components/app/form/LabelFiled";
import InputField from "../../components/app/form/InputField";

type TaskType = {
    id: number;
    name: string;
    description: string;
    finished: boolean;
    user: string;
};

const Task = () => {
    const [userLog, setUserLog] = useState<string | null>(null);
    const [dataTask, setDataTask] = useState<TaskType[]>([]);
    const [formAdd, setFormAdd] = useState({nameTask: "", descTask: ""});

    const updateDataTask = () => {
        const tasks = getTask(userLog || "");
        setDataTask(tasks);
    };

    const handleAddTask = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if(!formAdd.nameTask || !formAdd.descTask){
        return toast.error("Nama Task dan Deskripsi Task tidak boleh kosong")
      }
      try {
        const result = addTask({name: formAdd.nameTask, description: formAdd.descTask, user: userLog || ""})
        if (result.success) {
          toast.success(result.message)
          setFormAdd({nameTask: "", descTask: ""})
          updateDataTask()
        } else {
          toast.error(result.message)
        }
      } catch (error) {
        toast.error("Something Went Wrong")
        console.log(error)
      }
    }

    const toggleFinished = (id: number) => {
        try {
            const result = updateTask(id);
            if (result.success) {
                toast.success(result.message);
                updateDataTask();
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error("Something Went Wrong");
            console.log(error);
        }
    };

    const handleDeleteTask = (id: number) => {
        try {
            const result = deleteTask(id);
            if (result.success) {
                toast.success(result.message);
                updateDataTask();
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error("Something Went Wrong");
            console.log(error);
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        setUserLog(storedUser);
    }, []);

    useEffect(() => {
        if (userLog) {
            updateDataTask();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userLog]);

    return (
        <HeadContent title="Task Management">
            <div>
                <InputBlock>
                  <LabelField title="Nama Task" htmlFor="nameTask"/>
                  <InputField id="nameTask" name="nameTask" value={formAdd.nameTask} onChange={(e) => setFormAdd({...formAdd, [e.target.name]: e.target.value})} />
                </InputBlock>
                <InputBlock>
                  <LabelField title="Deskripsi Task" htmlFor="descTask"/>
                  <InputField id="descTask" name="descTask" value={formAdd.descTask} onChange={(e) => setFormAdd({...formAdd, [e.target.name]: e.target.value})}/>
                </InputBlock>
                <ButtonMain
                    label="Tambah Task"
                    style={{ display: "inline", width: "auto" }}
                    onClick={handleAddTask}
                />
            </div>
            <h3>Task Belum Selesai</h3>
            <div
                style={{
                    marginBottom: "20px",
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(15rem, 1fr))",
                    gap: "1.25rem",
                }}>
                {dataTask?.filter((el) => !el.finished).length > 0 ? (
                    dataTask
                        .filter((el) => !el.finished)
                        .map((el) => (
                            <TaskCard
                                key={el.id}
                                id={el.id}
                                name={el.name}
                                description={el.description}
                                finished={el.finished}
                                updateTask={toggleFinished}
                                deleteTask={handleDeleteTask}
                            />
                        ))
                ) : (
                    <p>Tidak ada task yang belum selesai</p>
                )}
            </div>
            <h3>Task Selesai</h3>
            <div
                style={{
                    marginBottom: "20px",
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(15rem, 1fr))",
                    gap: "1.25rem",
                }}>
                {dataTask?.filter((el) => el.finished).length > 0 ? (
                    dataTask
                        .filter((el) => el.finished)
                        .map((el) => (
                            <TaskCard
                                key={el.id}
                                id={el.id}
                                name={el.name}
                                description={el.description}
                                finished={el.finished}
                                updateTask={toggleFinished}
                                deleteTask={handleDeleteTask}
                            />
                        ))
                ) : (
                    <p>Tidak ada task yang selesai</p>
                )}
            </div>
        </HeadContent>
    );
};

export default Task;
