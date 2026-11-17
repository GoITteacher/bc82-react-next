import { Task, useTasksStore } from "@/store/tasksStore";
import css from "./TaskItem.module.css";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const removeTask = useTasksStore((s) => s.removeTask);
  return (
    <div className={css["task-item"]}>
      <p>{task.title}</p>
      <p>{task.description}</p>

      <button onClick={() => removeTask(task.id)}>X</button>
    </div>
  );
};

export default TaskItem;
