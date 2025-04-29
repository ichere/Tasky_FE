import React from "react";

interface TaskProps {
  task: any;
  onClaim?: (id: string) => void;
  onUnclaim?: (id: string) => void;
}

const TaskCard = ({ task, onClaim, onUnclaim }: TaskProps) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-2">
      <h3 className="text-lg font-bold">{task.name}</h3>
      <p>{task.description}</p>
      <p className="font-semibold">Budget: ${task.budget}</p>
      {onClaim && (
        <button onClick={() => onClaim(task._id)} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
          Claim Task
        </button>
      )}
      {onUnclaim && (
        <button onClick={() => onUnclaim(task._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Unclaim Task
        </button>
      )}
    </div>
  );
};

export default TaskCard;