import { Task } from "../types";
import "./TaskCard.css";

interface Props {
  task: Task;
  onClaim?: (id: string) => void;
  onUnclaim?: (id: string) => void;
}

const TaskCard = ({ task, onClaim, onUnclaim }: Props) => {
  return (
    <div className="task-card">
      <h3 className="task-title">{task.name}</h3>
      <p>{task.description}</p>
      <p className="task-budget">Budget: ${task.budget}</p>

      {onClaim && (
        <button onClick={() => onClaim(task._id)} className="claim-btn">
          Claim
        </button>
      )}

      {onUnclaim && (
        <button onClick={() => onUnclaim(task._id)} className="unclaim-btn">
          Unclaim
        </button>
      )}
    </div>
  );
};

export default TaskCard;
