import { useEffect, useState } from "react";
import API from "../api/axiosInstance";
import TaskCard from "../components/TaskCard";
import { Task } from "../types";


const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);


  useEffect(() => {
    API.get("/tasks").then(res => setTasks(res.data));
  }, []);

  const claimTask = async (id: string) => {
    await API.post(`/tasks/${id}/claim`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div className="p-6 grid gap-4 md:grid-cols-3">
      {tasks.map((task: Task) => (
        <TaskCard key={task._id} task={task} onClaim={claimTask} />
      ))}
    </div>
  );
};

export default Tasks;