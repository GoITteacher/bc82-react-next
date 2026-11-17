import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

interface TasksStore {
  tasks: Task[];

  titleDraft: string;
  setTitleDraft: (value: string) => void;

  descriptionDraft: string;
  setDescriptionDraft: (value: string) => void;

  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  clearTaskList: () => void;
  clearDraft: () => void;
}

export const useTasksStore = create<TasksStore>()(
  persist(
    (setStore) => {
      return {
        tasks: [],

        titleDraft: "",
        setTitleDraft: (value) => {
          setStore(() => {
            return { titleDraft: value };
          });
        },

        descriptionDraft: "",
        setDescriptionDraft: (value) => {
          setStore(() => {
            return { descriptionDraft: value };
          });
        },

        addTask: (task) => {
          setStore((store) => {
            return { tasks: [...store.tasks, task] };
          });
        },

        removeTask: (id) => {
          setStore((store) => {
            const filtered = store.tasks.filter((el) => el.id !== id);
            return { tasks: filtered };
          });
        },

        clearTaskList: () => {
          setStore(() => {
            return { tasks: [] };
          });
        },

        clearDraft: () => {
          setStore(() => {
            return { titleDraft: "", descriptionDraft: "" };
          });
        },
      };
    },
    {
      name: "tasks",
    }
  )
);
