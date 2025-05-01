// src/components/TaskCard.tsx
import { Task } from "../types";

interface Props {
  task: Task;
  onClaim?: (id: string) => void;
  onUnclaim?: (id: string) => void;
}

const TaskCard = ({ task, onClaim, onUnclaim }: Props) => {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <h3 className="text-lg font-bold">{task.name}</h3>
      <p>{task.description}</p>
      <p className="text-blue-600 font-semibold">Budget: ${task.budget}</p>

      {onClaim && (
        <button
          onClick={() => onClaim(task._id)}
          className="bg-green-500 text-white px-3 py-1 mt-2 rounded"
        >
          Claim
        </button>
      )}

      {onUnclaim && (
        <button
          onClick={() => onUnclaim(task._id)}
          className="bg-red-500 text-white px-3 py-1 mt-2 rounded"
        >
          Unclaim
        </button>
      )}
    </div>
  );
};

export default TaskCard;
