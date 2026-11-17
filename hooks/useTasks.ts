import { useTasksStore } from "@/store/tasksStore";

export const useTasks = () => {
  const addTask = useTasksStore((s) => s.addTask);

  const title = useTasksStore((s) => s.titleDraft);
  const setTitle = useTasksStore((s) => s.setTitleDraft);

  const desc = useTasksStore((s) => s.descriptionDraft);
  const setDesc = useTasksStore((s) => s.setDescriptionDraft);

  const clearDraft = useTasksStore((s) => s.clearDraft);

  return { title, desc, addTask, setTitle, setDesc, clearDraft };
};

export const useTaskTitle = (): [string, (v: string) => void] => {
  const title = useTasksStore((s) => s.titleDraft);
  const setTitle = useTasksStore((s) => s.setTitleDraft);
  return [title, setTitle];
};

export const useTaskDesc = (): [string, (v: string) => void] => {
  const desc = useTasksStore((s) => s.descriptionDraft);
  const setDesc = useTasksStore((s) => s.setDescriptionDraft);
  return [desc, setDesc];
};
