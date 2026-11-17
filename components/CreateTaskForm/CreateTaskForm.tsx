"use client";

import { useTasksStore } from "@/store/tasksStore";
import css from "./CreateTaskForm.module.css";
import { useTaskDesc, useTasks, useTaskTitle } from "@/hooks/useTasks";

const CreateTaskForm = () => {
  const { addTask, clearDraft } = useTasks();
  const [title, setTitle] = useTaskTitle();
  const [desc, setDesc] = useTaskDesc();

  const handleSubmit = (formData: FormData) => {
    const task = {
      id: Date.now().toString(),
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      status: "inProcess",
    };

    addTask(task);
    clearDraft();
  };

  return (
    <div className={css["createTaskForm"]}>
      <form action={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          name="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
