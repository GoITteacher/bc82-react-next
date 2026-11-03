import type { Task } from "../../types/task";
import css from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task._id} className={css.item}>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            className={css.checkbox}
          />
          <span className={css.text}>{task.title}</span>
          <button type="button" className={css.button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
