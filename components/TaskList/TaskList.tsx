"use client";
import { useTasksStore } from "@/store/tasksStore";
import css from "./TaskList.module.css";
import TaskItem from "./TaskItem/TaskItem";

const TaskList = () => {
  const tasks = useTasksStore((s) => s.tasks);
  const clear = useTasksStore((s) => s.clearTaskList);

  return (
    <div className={css["taskList"]}>
      <ul>
        {tasks.map((task) => {
          return <TaskItem task={task} />;
        })}
      </ul>

      <button onClick={clear}>Clear Tasks</button>
    </div>
  );
};

export default TaskList;
