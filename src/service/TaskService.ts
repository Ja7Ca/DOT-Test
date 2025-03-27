import TaskJson from "../data/Task.json";

const dataTask = TaskJson;

export const getTask = (user: string) => {
  return dataTask.filter((task) => task.user === user);
}

export const addTask = (task: { name: string; description: string; user: string }) => {
  const newTask = { ...task, id: dataTask.length + 1, finished: false };
  dataTask.push(newTask);
  return { success: true, message: "Add Task successfully", data: newTask };
}

export const updateTask = (id: number) => {
  const task = dataTask.find((task) => task.id === id);
  if (task) {
    task.finished = !task.finished;
    return { success: true, message: "Update Task successfully", data: task };
  } else {
    return { success: false, message: "Update Task successfully", data: null };
  }
}

export const deleteTask = (id: number) => {
  const index = dataTask.findIndex((task) => task.id === id);
  if (index !== -1) {
    dataTask.splice(index, 1);
    return { success: true, message: "Delete Task successfully" };
  } else {
    return { success: false, message: "Delete Task failed" };
  }
}