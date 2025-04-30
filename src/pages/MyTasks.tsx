import { useEffect, useState } from "react";
import API from "../api/axiosInstance";
import TaskCard from "../components/TaskCard";

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    API.get("/tasks/my").then(res => setTasks(res.data));
  }, []);

  const unclaimTask = async (id: string) => {
    await API.post(`/tasks/${id}/unclaim`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div className="p-6 grid gap-4 md:grid-cols-3">
      {tasks.map((task: any) => (
        <TaskCard key={task._id} task={task} onUnclaim={unclaimTask} />
      ))}
    </div>
  );
};

export default MyTasks;